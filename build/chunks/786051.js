/** Chunk was on 1113 **/
/** chunk id: 786051, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    l = n(64700),
    i = n(607399),
    s = n(311907),
    a = n(397927),
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
        buttonSubmitting: g,
        onButtonClick: f,
        imageSrc: m,
        animationSrc: b,
        secondaryButtonText: A,
        onSecondaryButtonClick: y,
        children: O,
        useReducedMotion: _ = !1,
        buttonVariant: j
    } = e, x = (0, s.bG)([c.Ay], () => c.Ay.getState().isMembersOpen);
    if (i.Fr && x) return null;
    if (null == t) return (0, r.jsx)(r.Fragment, {
        children: l.Children.only(O)
    });
    let v = null;
    return null != m ? v = (0, r.jsx)("img", {
        alt: "",
        src: m,
        className: u.Sl
    }) : null != b && (v = (0, r.jsx)(a.akl, {
        importData: b,
        shouldAnimate: !_,
        className: u.lY
    })), (0, r.jsxs)("div", {
        className: u.iE,
        children: [(0, r.jsxs)("div", {
            className: u.Qs,
            children: [v, (0, r.jsxs)("div", {
                className: u.Qq,
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    className: u.DD,
                    children: t
                }), null != n && (0, r.jsx)(a.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: n
                })]
            })]
        }), (0, r.jsxs)("div", {
            className: u.UD,
            children: [null != A && (0, r.jsx)("div", {
                className: u.x6,
                children: (0, r.jsx)(a.QWc, {
                    textVariant: "text-sm/semibold",
                    text: A,
                    onClick: y
                })
            }), null != h && (0, r.jsx)("div", {
                className: u.x6,
                children: (0, r.jsx)(a.Button, {
                    text: h,
                    size: "sm",
                    variant: null != j ? j : "secondary",
                    onClick: f,
                    loading: g,
                    icon: p
                })
            })]
        }), null != d && (0, r.jsx)(o.A, {
            className: u.qW,
            deadline: d
        })]
    })
}