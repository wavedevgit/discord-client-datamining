/** chunk id: 249581, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(228524);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    o = n(927018),
    c = n(64585),
    d = n(906688),
    u = n(99761);
let h = e => {
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
            className: u.__invalid_toastBG
        }), (0, i.jsx)("rect", {
            x: "27.3936",
            y: "0.59021",
            width: "23.4851",
            height: "23.4851",
            transform: "rotate(45 27.3936 0.59021)",
            className: u.__invalid_toastBG
        }), (0, i.jsx)("rect", {
            x: "44.5903",
            y: "7",
            width: "14.4203",
            height: "14.4203",
            transform: "rotate(45 44.5903 7)",
            className: u.__invalid_toastBG
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

function g(e) {
    let {
        achievement: t,
        unlocked: n
    } = e, {
        name: s,
        description: g,
        rarity: x,
        hideDescriptionUntilUnlock: p,
        onAction: m
    } = t, {
        color: A
    } = (0, o.ag)(x);
    l.useEffect(() => {
        let e = setTimeout(() => {
            c.A.playAchievementUnlockSound()
        }, 50);
        return () => {
            clearTimeout(e)
        }
    }, []);
    let b = null != m && n,
        j = b ? a.DUT : "div";
    return (0, i.jsxs)(j, {
        className: r()(u.kL, b && u.b),
        onClick: () => {
            b && m()
        },
        children: [(0, i.jsx)("div", {
            className: u.zc,
            children: (0, i.jsx)(d.A, {
                achievementId: t.id,
                size: d.A.Sizes.SIZE_40,
                unlocked: n
            })
        }), (0, i.jsxs)("div", {
            className: u.__invalid_nameContainer,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: s()
            }), (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: p && !n ? "?????" : g()
            })]
        }), (0, i.jsx)("div", {
            className: u.Db,
            children: (0, i.jsx)(h, {
                color: A
            })
        })]
    })
}