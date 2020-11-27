from django.shortcuts import render

from modSourcing.models import Source

from modExtracts.forms import ExtractFormSet


# Create your views here.
def home(request, pk):
    try:
        cont = Source.objects.get(pk = pk)
    except:
        cont = None
    return render(request, 'templates/extracts/home.html', {'continue':cont,})

def source_list(request):
    sources = Source.objects.filter(current_user = None)
    return render(request, 'templates/extracts/source_list.html', {'sources':sources,})

def source_checkout(request, pk):
    source = Source.objects.get(pk = pk)
    source.current_user = request.user
    return redirect('source_extract')

def source_release(request, pk):
    source = Source.objects.get(pk = pk)
    source.current_user = None
    return redirect('source_extract')

def source_extraction(request, pk):
    if request.method == 'GET':
        source = Source.objects.get(pk=pk)
        extracts = source.extracts.all()
        formset = ExtractFormSet(queryset=Extract.objects.filter(pk__in=extracts))
        return render(request, 'templates/extracts/source_extraction.html', {'formset':formset,})

    elif request.method == 'POST':
        formset = ExtractFormSet(request.POST)
        if formset.is_valid():
            formset.save()
        else:
            raise Exception('Failed to save...') # need better handling here
        
        return redirect('source_release')


