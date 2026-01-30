/** chunk id: 559607, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048), n(638769);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(773669),
    d = n(985018),
    u = n(873523);
let p = (0, d.getAvailableLocales)();

function h(e) {
    let {
        application: t,
        className: n
    } = e, i = (0, s.bG)([c.default], () => c.default.locale), {
        supportedLanguages: h,
        usersLanguageIsFirst: m
    } = l.useMemo(() => {
        var e;
        if ((null == (e = t.directory_entry) ? void 0 : e.supported_locales) != null) {
            let e = new Set(t.directory_entry.supported_locales),
                n = e.has(i),
                r = p.filter(t => e.has(t.value));
            return n && r.sort((e, t) => e.value === i ? -1 : +(t.value === i)), {
                supportedLanguages: r.map(e => d.intl.string(e.localizedName)),
                usersLanguageIsFirst: n
            }
        }
        return {
            supportedLanguages: [],
            usersLanguageIsFirst: !1
        }
    }, [t.directory_entry, i]);
    return (0, r.jsxs)("div", {
        className: n,
        children: [(0, r.jsx)(o.Heading, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: d.intl.string(d.t.Fbjlu3)
        }), (0, r.jsx)("ul", {
            className: u.nw,
            children: h.map((e, t) => (0, r.jsx)("li", {
                className: a()(u.WH, u.O6),
                children: (0, r.jsx)(o.Text, {
                    variant: 0 === t && m ? "text-sm/bold" : "text-sm/normal",
                    children: e
                })
            }, e))
        }), " "]
    })
}