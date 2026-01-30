/** chunk id: 193699, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(397927),
    s = n(290595),
    o = n(755395),
    c = n(780964),
    u = n(840065),
    d = n(652215),
    p = n(49999),
    h = n(985018),
    g = n(786983);

function f(e) {
    let {
        className: t,
        markAsDismissed: n
    } = e;
    return (0, r.jsxs)(o.A, {
        className: l()(g.Nr, t),
        children: [(0, r.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: g.wx,
            children: h.intl.string(h.t.HcbnMM)
        }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: h.intl.format(h.t.NkFrzN, {
                onPrivacyClick: () => {
                    (0, u.openUserSettings)(c.X.DATA_AND_PRIVACY_PANEL, {
                        section: d.nc_.DATA_AND_PRIVACY
                    })
                }
            })
        }), (0, r.jsxs)("div", {
            className: g.UD,
            children: [(0, r.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                fullWidth: !0,
                text: h.intl.string(h.t.ebojgD),
                onClick: () => (0, s.U)([d.YAq.PERSONALIZATION], [])
            }), (0, r.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: h.intl.string(h.t.f3Pet9),
                onClick: () => n(p.i.DISMISS)
            })]
        })]
    })
}