/** chunk id: 382913, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => i
});

function i(e) {
    return e.map((e, t) => {
        var n, i;
        return {
            file: e.file,
            name: null != (n = e.id) ? n : "attachment_".concat(t),
            filename: null == (i = e.file) ? void 0 : i.name
        }
    })
}