import { Dispatch, SetStateAction } from "react";

interface LanguageDropdownProps {
    onLanguageSelect: Dispatch<SetStateAction<string>>;
};

export default function LanguageDropdown({onLanguageSelect}: LanguageDropdownProps) {
    const programmingLanguages = [
        "plaintext",
        "abap",
        "apex",
        "azcli",
        "bat",
        "bicep",
        "cameligo",
        "clojure",
        "coffeescript",
        "c",
        "cpp",
        "csharp",
        "csp",
        "css",
        "cypher",
        "dart",
        "dockerfile",
        "ecl",
        "elixir",
        "flow9",
        "fsharp",
        "freemarker2",
        "freemarker2.tag-angle.interpolation-dollar",
        "freemarker2.tag-bracket.interpolation-dollar",
        "freemarker2.tag-angle.interpolation-bracket",
        "freemarker2.tag-bracket.interpolation-bracket",
        "freemarker2.tag-auto.interpolation-dollar",
        "freemarker2.tag-auto.interpolation-bracket",
        "go",
        "graphql",
        "handlebars",
        "hcl",
        "html",
        "ini",
        "java",
        "javascript",
        "julia",
        "kotlin",
        "less",
        "lexon",
        "lua",
        "liquid",
        "m3",
        "markdown",
        "mdx",
        "mips",
        "msdax",
        "mysql",
        "objective-c",
        "pascal",
        "pascaligo",
        "perl",
        "pgsql",
        "php",
        "pla",
        "postiats",
        "powerquery",
        "powershell",
        "proto",
        "pug",
        "python",
        "qsharp",
        "r",
        "razor",
        "redis",
        "redshift",
        "restructuredtext",
        "ruby",
        "rust",
        "sb",
        "scala",
        "scheme",
        "scss",
        "shell",
        "sol",
        "aes",
        "sparql",
        "sql",
        "st",
        "swift",
        "systemverilog",
        "verilog",
        "tcl",
        "twig",
        "typescript",
        "vb",
        "wgsl",
        "xml",
        "yaml",
        "json"
    ];

    const languageOptions = programmingLanguages.map((lang) => (
        <option key={lang} value={lang}>{lang}</option>
    ))

    return (
        <>
            <select onChange={(e) => onLanguageSelect(e.target.value)} name="language">
                {languageOptions}
            </select>
        </>
    )
}