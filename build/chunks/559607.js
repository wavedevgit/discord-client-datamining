/** chunk id: 559607 params = (module,exports,require) **/
a.d(t, {
    A: () => h
});
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(311907),
    o = a(397927),
    c = a(773669),
    d = a(985018),
    u = a(364569);
let m = (0, d.getAvailableLocales)();

function h(e) {
    let {
        application: t,
        className: a
    } = e, l = (0, r.bG)([c.default], () => c.default.locale), {
        supportedLanguages: h,
        usersLanguageIsFirst: p
    } = i.useMemo(() => {
        if (t.directory_entry?.supported_locales != null) {
            let e = new Set(t.directory_entry.supported_locales),
                a = e.has(l),
                n = m.filter(t => e.has(t.value));
            return a && n.sort((e, t) => e.value === l ? -1 : +(t.value === l)), {
                supportedLanguages: n.map(e => d.intl.string(e.localizedName)),
                usersLanguageIsFirst: a
            }
        }
        return {
            supportedLanguages: [],
            usersLanguageIsFirst: !1
        }
    }, [t.directory_entry, l]);
    return (0, n.jsxs)("div", {
        className: a,
        children: [(0, n.jsx)(o.Heading, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.Fbjlu3)
        }), (0, n.jsx)("ul", {
            className: u.nw,
            children: h.map((e, t) => (0, n.jsx)("li", {
                className: s()(u.WH, u.O6),
                children: (0, n.jsx)(o.Text, {
                    variant: 0 === t && p ? "text-sm/bold" : "text-sm/normal",
                    children: e
                })
            }, e))
        }), " "]
    })
}