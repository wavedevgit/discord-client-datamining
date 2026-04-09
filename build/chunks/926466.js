/** chunk id: 926466 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    a = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(421380),
    o = n(397927),
    d = n(58149),
    c = n(954571),
    u = n(652215),
    A = n(985018),
    h = n(66762);
let _ = r().debounce(d.Ay.trackWithMetadata, 500),
    m = e => {
        let {
            guild: t,
            title: n,
            message: l,
            image: r,
            type: m,
            imageMarginX: g,
            imageMarginTop: p,
            trackingSource: E,
            undismissable: I,
            onDismissed: f,
            onClick: C,
            cta: T,
            ctaColor: N
        } = e;
        a.useEffect(() => {
            _(u.HAw.CHANNEL_NOTICE_VIEWED, {
                notice_type: m,
                guild_id: t.id
            })
        }, [t.id, m]);
        let S = null;
        "function" == typeof T ? S = T() : null != T && (S = (0, i.jsx)(s.$n, {
            "data-migration-pending": !0,
            className: h.HM,
            size: s.$n.Sizes.SMALL,
            onClick: () => {
                null != m && c.default.track(u.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                    source: E,
                    guild_id: t.id,
                    notice_type: m
                }), C?.()
            },
            fullWidth: !0,
            color: N,
            children: T
        }));
        let x = null != g ? `${g}px` : "16px";
        return (0, i.jsxs)("div", {
            className: h.kX,
            children: [!0 === I ? null : (0, i.jsx)(o.DUT, {
                onClick: () => {
                    d.Ay.trackWithMetadata(u.HAw.CHANNEL_NOTICE_CLOSED, {
                        notice_type: m
                    }), f?.()
                },
                className: h.VN,
                "aria-label": A.intl.string(A.t.WAI6xu),
                children: (0, i.jsx)(o.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: h.ut
                })
            }), null != r && (0, i.jsx)("div", {
                className: h.ZS,
                style: {
                    marginTop: `${p}px`,
                    marginLeft: x,
                    marginRight: x
                },
                children: "string" == typeof r ? (0, i.jsx)("img", {
                    className: h.Sl,
                    src: r,
                    alt: ""
                }) : r
            }), (0, i.jsxs)("div", {
                className: h.iU,
                children: [null != n ? (0, i.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    className: h.DD,
                    children: n
                }) : null, (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: l
                }), S]
            })]
        })
    }