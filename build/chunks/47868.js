/** Chunk was on 1113 **/
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
        description: h,
        userCount: p,
        onClick: g,
        highlight: f,
        onDismiss: m
    } = e, b = l.useCallback(e => {
        e.stopPropagation(), null == m || m()
    }, [m]);
    return (0, r.jsxs)(o.DUT, {
        className: s()(u.kL, t, null != f && {
            [u.U6]: f
        }),
        onClick: g,
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
                children: h
            }), null != p && p > 0 ? (0, r.jsxs)(r.Fragment, {
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
                        count: p
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