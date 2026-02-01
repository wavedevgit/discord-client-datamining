/** chunk id: 786051, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    r = n(64700),
    i = n(607399),
    a = n(311907),
    s = n(397927),
    o = n(576470),
    c = n(761640),
    u = n(945675);
let d = function(e) {
    let {
        message: t,
        subtitle: n,
        countdown: d,
        buttonText: h,
        buttonIcon: p,
        buttonSubmitting: f,
        onButtonClick: m,
        imageSrc: g,
        animationSrc: A,
        secondaryButtonText: b,
        onSecondaryButtonClick: _,
        children: y,
        useReducedMotion: v = !1,
        buttonVariant: E
    } = e, O = (0, a.bG)([c.Ay], () => c.Ay.getState().isMembersOpen);
    if (i.Fr && O) return null;
    if (null == t) return (0, l.jsx)(l.Fragment, {
        children: r.Children.only(y)
    });
    let C = null;
    return null != g ? C = (0, l.jsx)("img", {
        alt: "",
        src: g,
        className: u.Sl
    }) : null != A && (C = (0, l.jsx)(s.akl, {
        importData: A,
        shouldAnimate: !v,
        className: u.lY
    })), (0, l.jsxs)("div", {
        className: u.iE,
        children: [(0, l.jsxs)("div", {
            className: u.Qs,
            children: [C, (0, l.jsxs)("div", {
                className: u.Qq,
                children: [(0, l.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    className: u.DD,
                    children: t
                }), null != n && (0, l.jsx)(s.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: n
                })]
            })]
        }), (0, l.jsxs)("div", {
            className: u.UD,
            children: [null != b && (0, l.jsx)("div", {
                className: u.x6,
                children: (0, l.jsx)(s.QWc, {
                    textVariant: "text-sm/semibold",
                    text: b,
                    onClick: _
                })
            }), null != h && (0, l.jsx)("div", {
                className: u.x6,
                children: (0, l.jsx)(s.Button, {
                    text: h,
                    size: "sm",
                    variant: null != E ? E : "secondary",
                    onClick: m,
                    loading: f,
                    icon: p
                })
            })]
        }), null != d && (0, l.jsx)(o.A, {
            className: u.qW,
            deadline: d
        })]
    })
}