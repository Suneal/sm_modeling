######################################################################
#   File          : Makefile
#	Author		  : Saccharide
######################################################################

FILE=main
all: $(FILE).pdf
.PHONY: clean
.PHONY: .FORCE
clean:
	rm *.aux *.blg *.out *.bbl *.log $(FILE).pdf

$(FILE).pdf: $(FILE).tex .FORCE
	pdflatex $(FILE)
	bibtex $(FILE)
	pdflatex $(FILE)
	pdflatex $(FILE)
	start $(FILE).pdf
