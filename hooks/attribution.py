"""MkDocs hook: Jinja filter that serialises a string as JSON with every character escaped.

Used by overrides/main.html for the attribution data block. Every character of the
string (ASCII included) becomes a \\uXXXX escape; characters outside the Basic
Multilingual Plane become UTF-16 surrogate pairs. The result is a valid JSON string
literal including the surrounding quotes, so json.loads() returns the original text.
"""


def json_unicode_escape(value) -> str:
    """Return value as a JSON string literal in which every character is \\u-escaped."""
    text = "" if value is None else str(value)
    units = text.encode("utf-16-be")
    code_units = (
        int.from_bytes(units[i : i + 2], "big") for i in range(0, len(units), 2)
    )
    escaped = "".join(f"\\u{unit:04x}" for unit in code_units)
    return '"' + escaped + '"'


def on_env(env, config, files):
    """Register the filter for the theme templates."""
    env.filters["json_unicode_escape"] = json_unicode_escape
    return env
