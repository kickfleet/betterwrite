export interface PDFStateStyles {
	base: PDFStateStylesBase;
	paragraph: PDFStateStylesParagraph;
	headingOne: PDFStateStylesHeading;
	headingTwo: PDFStateStylesHeading;
	headingThree: PDFStateStylesHeading;
	switcher: PDFStateStylesSwitcher;
}

export interface PDFStateStylesBaseBackground {
	data: string;
	main: string;
}

export interface PDFStateStylesBaseMargins {
	left: number;
	top: number;
	right: number;
	bottom: number;
}

export interface PDFStateStylesBase {
	summary: PDFStateStylesBaseSummary;
	header: PDFStateStylesBaseHeader;
	footer: PDFStateStylesBaseFooter;
	background: PDFStateStylesBaseBackground;
	pageSize: string;
	pageOrientation: string;
	pageMargins: PDFStateStylesBaseMargins;
}

export interface PDFStateStylesBaseSummary {
	fontFamily: string;
	fontSize: number;
	type: 'default';
}

export interface PDFStateStylesBaseHeader {
	start: number;
	content: string;
	alignment: 'default' | 'left' | 'center' | 'right';
	textSize: number;
	textType: 'simple' | 'counter';
	fontFamily: string;
}

export interface PDFStateStylesBaseFooter {
	start: number;
	alignment: 'default' | 'left' | 'center' | 'right';
	textSize: number;
	textType: 'simple' | 'counter';
	fontFamily: string;
}

export interface PDFStateStylesParagraph {
	font: string;
	fontSize: number;
	lineHeight: number;
	alignment: 'left' | 'center' | 'right' | 'justify';
	indent: number;
	characterSpacing: number;
	color: string;
	background: string;
	markerColor: string;
	decoration: 'underline' | 'lineThrough' | 'overline' | 'none' | undefined;
	decorationStyle: 'dashed' | 'dotted' | 'double' | 'none' | undefined;
	decorationColor: string;
	margin: {
		top: number;
		bottom: number;
	};
}

export interface PDFStateStylesHeading {
	font: string;
	fontSize: number;
	lineHeight: number;
	bold: boolean;
	italics: boolean;
	alignment: 'left' | 'center' | 'right' | 'justify';
	characterSpacing: number;
	color: string;
	background: string;
	markerColor: string;
	decoration: 'underline' | 'lineThrough' | 'overline' | undefined;
	decorationStyle: 'dashed' | 'dotted' | 'double' | 'wavy' | undefined;
	decorationColor: string;
	breakPage: boolean;
	margin: {
		top: number;
		bottom: number;
	};
}

export interface PDFStateStylesSwitcher {
	cover: boolean;
	main: boolean;
	footer: boolean;
	header: boolean;
	summary: boolean;
	encryption: boolean;
}

export interface PDFState {
	styles: PDFStateStyles;
	fonts: Array<string>;
	normalize: Record<string, any>;
}