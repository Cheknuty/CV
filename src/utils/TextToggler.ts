
export function TextToggle({ eng, rus, uzb, lang }: { eng: string, rus: string, uzb: string; lang: string }) {

    switch(lang) {
        case "rus": return rus;
        case "eng": return eng;
        case "uzb": return uzb;
        default: return "error";
    }
}