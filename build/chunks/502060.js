/** Chunk was on 60667 **/
/** chunk id: 502060, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o,
    G: () => a
}), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(195043),
    s = n(645022);

function a(e) {
    let {
        children: t,
        title: n,
        description: l
    } = e;
    return (0, r.jsxs)("div", {
        className: s.L1,
        children: [(null != n || null != l) && (0, r.jsxs)("div", {
            className: s.Km,
            children: [null != n && (0, r.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: n
            }), null != l && (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: l
            })]
        }), (0, r.jsx)("div", {
            className: s.Yq,
            children: t
        }), (0, r.jsx)(i.cGx, {
            className: s.yj
        })]
    })
}

function o(e) {
    let {
        children: t,
        title: n,
        description: i,
        webSetting: s
    } = e;
    return (0, r.jsx)(l.x, {
        setting: s,
        children: (0, r.jsx)(a, {
            title: n,
            description: i,
            children: t
        })
    })
}