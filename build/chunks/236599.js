/** chunk id: 236599 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(773669),
    d = n(183555),
    u = n(985018),
    g = n(697737);

function _(e) {
    let {
        className: t
    } = e, l = ["en-US", "en-GB"].includes((0, r.bG)([c.default], () => c.default.locale)) ? u.intl.string(u.t.OYlggR) : u.intl.string(u.t.Y55Tua), {
        trackUserProfileEditAction: _
    } = (0, d.NJ)(), m = a.useCallback(() => {
        _({
            action: "PRESS_ADD_WIDGET"
        }), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("87591").then(n.bind(n, 333114));
            return t => (0, i.jsx)(e, {
                ...t,
                trackUserProfileEditAction: _
            })
        }, {
            stackingBehavior: "stack"
        })
    }, [_]);
    return (0, i.jsxs)("div", {
        className: s()(g.w, t),
        children: [(0, i.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-subtle",
            children: l
        }), (0, i.jsx)(o.Button, {
            icon: o.j96,
            text: u.intl.string(u.t["lBG2s/"]),
            size: "sm",
            variant: "secondary",
            onClick: m
        })]
    })
}