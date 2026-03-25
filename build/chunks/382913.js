/** chunk id: 382913 params = (module,exports,require) **/
n.d(t, {
    B: () => i
});

function i(e) {
    return e.map((e, t) => ({
        file: e.file,
        name: e.id ?? `attachment_${t}`,
        filename: e.file?.name
    }))
}