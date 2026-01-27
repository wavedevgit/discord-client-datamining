/** Chunk was on 77870 **/
/** chunk id: 47868, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(732955),
    o = n(397927),
    c = n(985018),
    u = n(67170);

function d(e) {
    let {
        className: t,
        iconContainerClassName: n,
        icon: i,
        title: d,
        description: p,
        userCount: h,
        onClick: f,
        highlight: g,
        onDismiss: m
    } = e, b = l.useCallback(e => {
        e.stopPropagation(), null == m || m()
    }, [m]);
    return (0, r.jsxs)(o.DUT, {
        className: s()(u.kL, t, null != g && {
            [u.U6]: g
        }),
        onClick: f,
        children: [(0, r.jsx)("div", {
            className: s()(u.Kk, n),
            children: i
        }), (0, r.jsxs)("div", {
            className: u.FS,
            children: [(0, r.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: d
            }), (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-strong",
                className: u.mG,
                children: p
            }), null != h && h > 0 ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-strong",
                    className: u.Om,
                    children: "•"
                }), (0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-strong",
                    className: u.mG,
                    children: c.intl.format(c.t.NywdIj, {
                        count: h
                    })
                })]
            }) : null]
        }), null != m ? (0, r.jsx)("div", {
            className: u.r,
            children: (0, r.jsx)(a.JnF, {
                size: "xs",
                onClick: b
            })
        }) : (0, r.jsx)(o._BQ, {
            size: "xs",
            color: "currentColor",
            className: u.OW
        })]
    })
}