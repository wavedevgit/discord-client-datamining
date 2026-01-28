/** Chunk was on 60449 **/
/** chunk id: 502060, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o,
    G: () => a
}), n(228524);
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(195043),
    r = n(645022);

function a(e) {
    let {
        children: t,
        title: n,
        description: l
    } = e;
    return (0, i.jsxs)("div", {
        className: r.L1,
        children: [(null != n || null != l) && (0, i.jsxs)("div", {
            className: r.Km,
            children: [null != n && (0, i.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: n
            }), null != l && (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: l
            })]
        }), (0, i.jsx)("div", {
            className: r.Yq,
            children: t
        }), (0, i.jsx)(s.cGx, {
            className: r.yj
        })]
    })
}

function o(e) {
    let {
        children: t,
        title: n,
        description: s,
        webSetting: r
    } = e;
    return (0, i.jsx)(l.x, {
        setting: r,
        children: (0, i.jsx)(a, {
            title: n,
            description: s,
            children: t
        })
    })
}