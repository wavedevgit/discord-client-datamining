/** chunk id: 455542, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(168186);
n(827669);
var s = n(985018),
    o = n(380964);

function c(e) {
    let {
        application: t
    } = e, n = l.useMemo(() => {
        var e;
        let n = null == (e = t.directory_entry) ? void 0 : e.popular_application_commands;
        return null != n ? n.map(e => (0, a.Oe)({
            rootCommand: e,
            command: e,
            applicationId: e.application_id
        })) : []
    }, [t]);
    return 0 === n.length ? null : (0, r.jsxs)("div", {
        className: o.hd,
        children: [(0, r.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: s.intl.string(s.t.swIgTL)
        }), (0, r.jsx)("div", {
            className: o.hQ,
            children: n.map(e => (0, r.jsxs)("div", {
                className: o.dO,
                children: [(0, r.jsxs)(i.Text, {
                    className: o.p6,
                    variant: "code",
                    color: "text-strong",
                    children: ["/", e.displayName]
                }), (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: e.displayDescription
                })]
            }, e.id))
        })]
    })
}