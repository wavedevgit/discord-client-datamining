/** chunk id: 382913 params = (module,exports,require) **/
i.d(t, {
    B: () => n
});

function n(e) {
    return e.map((e, t) => ({
        file: e.file,
        name: e.id ?? `attachment_${t}`,
        filename: e.file?.name
    }))
}