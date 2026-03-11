/** chunk id: 249581 params = (module,exports,require) **/
i.d(e, {
    A: () => C
});
var n = i(627968),
    r = i(64700),
    l = i(503698),
    s = i.n(l),
    a = i(397927),
    o = i(927018),
    c = i(64585),
    d = i(906688),
    u = i(99761);
let h = t => {
    let {
        color: e
    } = t;
    return (0, n.jsxs)("svg", {
        width: "48",
        height: "28",
        viewBox: "0 0 55 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, n.jsx)("rect", {
            x: "10.1968",
            y: "7",
            width: "14.4203",
            height: "14.4203",
            transform: "rotate(45 10.1968 7)",
            className: u.__invalid_toastBG
        }), (0, n.jsx)("rect", {
            x: "27.3936",
            y: "0.59021",
            width: "23.4851",
            height: "23.4851",
            transform: "rotate(45 27.3936 0.59021)",
            className: u.__invalid_toastBG
        }), (0, n.jsx)("rect", {
            x: "44.5903",
            y: "7",
            width: "14.4203",
            height: "14.4203",
            transform: "rotate(45 44.5903 7)",
            className: u.__invalid_toastBG
        }), (0, n.jsx)("rect", {
            x: "10.1968",
            y: "13",
            width: "6",
            height: "6",
            transform: "rotate(45 10.1968 13)",
            fill: e
        }), (0, n.jsx)("path", {
            d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
            fill: e
        }), (0, n.jsx)("rect", {
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
        unlocked: i
    } = t, {
        name: l,
        description: C,
        rarity: g,
        hideDescriptionUntilUnlock: A,
        onAction: E
    } = e, {
        color: _
    } = (0, o.ag)(g);
    r.useEffect(() => {
        let t = setTimeout(() => {
            c.A.playAchievementUnlockSound()
        }, 50);
        return () => {
            clearTimeout(t)
        }
    }, []);
    let m = null != E && i,
        p = m ? a.DUT : "div";
    return (0, n.jsxs)(p, {
        className: s()(u.kL, m && u.b),
        onClick: () => {
            m && E()
        },
        children: [(0, n.jsx)("div", {
            className: u.zc,
            children: (0, n.jsx)(d.A, {
                achievementId: e.id,
                size: d.A.Sizes.SIZE_40,
                unlocked: i
            })
        }), (0, n.jsxs)("div", {
            className: u.__invalid_nameContainer,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: l()
            }), (0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: A && !i ? "?????" : C()
            })]
        }), (0, n.jsx)("div", {
            className: u.Db,
            children: (0, n.jsx)(h, {
                color: _
            })
        })]
    })
}