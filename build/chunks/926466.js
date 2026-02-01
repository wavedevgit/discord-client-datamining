/** chunk id: 926466, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n(421380),
    c = n(397927),
    u = n(58149),
    d = n(954571),
    p = n(652215),
    h = n(985018),
    g = n(861968);
let m = (0, s.debounce)(u.Ay.trackWithMetadata, 500),
    f = function(e) {
        let {
            guild: t,
            title: n,
            message: l,
            image: s,
            type: f,
            imageStyles: A,
            imageMarginX: _,
            imageMarginTop: b,
            trackingSource: E,
            undismissable: O,
            onDismissed: y,
            onClick: I,
            cta: v,
            ctaColor: S,
            centerText: C,
            className: N
        } = e;
        i.useEffect(() => {
            m(p.HAw.CHANNEL_NOTICE_VIEWED, {
                notice_type: f,
                guild_id: t.id
            })
        }, [t.id, f]);
        let T = null;
        "function" == typeof v ? T = v() : null != v && (T = (0, r.jsx)(o.$n, {
            "data-migration-pending": !0,
            className: g.x6,
            size: o.$n.Sizes.SMALL,
            onClick: () => {
                null != f && d.default.track(p.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                    source: E,
                    guild_id: t.id,
                    notice_type: f
                }), null == I || I()
            },
            fullWidth: !0,
            color: S,
            children: v
        }));
        let j = null;
        "function" == typeof n ? j = n() : null != n && (j = (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: a()(g.DD, {
                [g.vG]: null == s
            }, {
                [g.gX]: C
            }),
            children: n
        }));
        let x = null;
        "function" == typeof l ? x = l() : null != l && (x = (0, r.jsx)(c.Text, {
            className: a()({
                [g.gX]: C
            }),
            variant: "text-sm/normal",
            color: "text-muted",
            children: l
        }));
        let P = null != _ ? "".concat(_, "px") : "16px";
        return (0, r.jsxs)("div", {
            className: a()(g.kL, N),
            children: [!0 === O ? null : (0, r.jsx)(c.DUT, {
                onClick: () => {
                    u.Ay.trackWithMetadata(p.HAw.CHANNEL_NOTICE_CLOSED, {
                        notice_type: f
                    }), null == y || y()
                },
                className: g.VN,
                "aria-label": h.intl.string(h.t.WAI6xu),
                children: (0, r.jsx)(c.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: g.ut
                })
            }), null != s && (0, r.jsx)("div", {
                className: g.ZS,
                style: {
                    marginTop: "".concat(b, "px"),
                    marginLeft: P,
                    marginRight: P
                },
                children: (0, r.jsx)("img", {
                    className: g.Sl,
                    style: A,
                    src: s,
                    alt: ""
                })
            }), (0, r.jsxs)("div", {
                className: g.iU,
                children: [j, x, T]
            })]
        })
    }