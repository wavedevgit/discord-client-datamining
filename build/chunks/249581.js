/** chunk id: 249581 params = (module,exports,require) **/
n.d(e, {
    A: () => C
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(397927),
    o = n(927018),
    c = n(64585),
    d = n(906688),
    h = n(60828);
let u = t => {
    let {
        color: e
    } = t;
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
            className: h.__invalid_toastBG
        }), (0, i.jsx)("rect", {
            x: "27.3936",
            y: "0.59021",
            width: "23.4851",
            height: "23.4851",
            transform: "rotate(45 27.3936 0.59021)",
            className: h.__invalid_toastBG
        }), (0, i.jsx)("rect", {
            x: "44.5903",
            y: "7",
            width: "14.4203",
            height: "14.4203",
            transform: "rotate(45 44.5903 7)",
            className: h.__invalid_toastBG
        }), (0, i.jsx)("rect", {
            x: "10.1968",
            y: "13",
            width: "6",
            height: "6",
            transform: "rotate(45 10.1968 13)",
            fill: e
        }), (0, i.jsx)("path", {
            d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
            fill: e
        }), (0, i.jsx)("rect", {
            x: "44.5903",
            y: "13",
            width: "6",
            height: "6",
            transform: "rotate(45 44.5903 13)",
            fill: e
        })]
    })
};

function C(t) {
    let {
        achievement: e,
        unlocked: n
    } = t, {
        name: s,
        description: C,
        rarity: _,
        hideDescriptionUntilUnlock: A,
        onAction: E
    } = e, {
        color: g
    } = (0, o.ag)(_);
    r.useEffect(() => {
        let t = setTimeout(() => {
            c.A.playAchievementUnlockSound()
        }, 50);
        return () => {
            clearTimeout(t)
        }
    }, []);
    let T = null != E && n,
        L = T ? a.DUT : "div";
    return (0, i.jsxs)(L, {
        className: l()(h.kL, T && h.b),
        onClick: () => {
            T && E()
        },
        children: [(0, i.jsx)("div", {
            className: h.zc,
            children: (0, i.jsx)(d.A, {
                achievementId: e.id,
                size: d.A.Sizes.SIZE_40,
                unlocked: n
            })
        }), (0, i.jsxs)("div", {
            className: h.__invalid_nameContainer,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: s()
            }), (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: A && !n ? "?????" : C()
            })]
        }), (0, i.jsx)("div", {
            className: h.Db,
            children: (0, i.jsx)(u, {
                color: g
            })
        })]
    })
}