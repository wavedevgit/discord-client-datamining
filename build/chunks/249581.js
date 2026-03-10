/** chunk id: 249581 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    o = n(927018),
    c = n(64585),
    d = n(906688),
    _ = n(99761);
let u = e => {
    let {
        color: t
    } = e;
    return (0, i.jsxs)("svg", {
        width: "48",
        height: "28",
        viewBox: "0 0 55 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, i.jsx)("rect", {
            x: "10.1968",
            y: "7",
            width: "14.4203",
            height: "14.4203",
            transform: "rotate(45 10.1968 7)",
            className: _.__invalid_toastBG
        }), (0, i.jsx)("rect", {
            x: "27.3936",
            y: "0.59021",
            width: "23.4851",
            height: "23.4851",
            transform: "rotate(45 27.3936 0.59021)",
            className: _.__invalid_toastBG
        }), (0, i.jsx)("rect", {
            x: "44.5903",
            y: "7",
            width: "14.4203",
            height: "14.4203",
            transform: "rotate(45 44.5903 7)",
            className: _.__invalid_toastBG
        }), (0, i.jsx)("rect", {
            x: "10.1968",
            y: "13",
            width: "6",
            height: "6",
            transform: "rotate(45 10.1968 13)",
            fill: t
        }), (0, i.jsx)("path", {
            d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
            fill: t
        }), (0, i.jsx)("rect", {
            x: "44.5903",
            y: "13",
            width: "6",
            height: "6",
            transform: "rotate(45 44.5903 13)",
            fill: t
        })]
    })
};

function h(e) {
    let {
        achievement: t,
        unlocked: n
    } = e, {
        name: r,
        description: h,
        rarity: C,
        hideDescriptionUntilUnlock: g,
        onAction: A
    } = t, {
        color: m
    } = (0, o.ag)(C);
    a.useEffect(() => {
        let e = setTimeout(() => {
            c.A.playAchievementUnlockSound()
        }, 50);
        return () => {
            clearTimeout(e)
        }
    }, []);
    let E = null != A && n,
        p = E ? s.DUT : "div";
    return (0, i.jsxs)(p, {
        className: l()(_.kL, E && _.b),
        onClick: () => {
            E && A()
        },
        children: [(0, i.jsx)("div", {
            className: _.zc,
            children: (0, i.jsx)(d.A, {
                achievementId: t.id,
                size: d.A.Sizes.SIZE_40,
                unlocked: n
            })
        }), (0, i.jsxs)("div", {
            className: _.__invalid_nameContainer,
            children: [(0, i.jsx)(s.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: r()
            }), (0, i.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: g && !n ? "?????" : h()
            })]
        }), (0, i.jsx)("div", {
            className: _.Db,
            children: (0, i.jsx)(u, {
                color: m
            })
        })]
    })
}