/** chunk id: 419117, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => E
}), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(199966),
    u = i(963935),
    o = i(985018);

function d(t) {
    let {
        title: e
    } = t;
    return e
}

function A(t) {
    let {
        useTitle: e,
        settingKey: i,
        formatter: n,
        index: l
    } = t, s = e();
    return "string" == typeof s ? n({
        title: s,
        index: l,
        key: i
    }) : s
}

function T(t) {
    let {
        setting: e,
        formatter: i,
        index: l
    } = t;
    return () => (0, n.jsx)(A, {
        useTitle: e.useTitle,
        settingKey: e.key,
        formatter: i,
        index: l
    }, e.key)
}

function S(t) {
    return t.type === u.Z6.LIST
}

function E(t, e) {
    let {
        limit: i = 2,
        formatter: n = d
    } = e ?? {};
    r()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let {
        visibleDirectory: s,
        accessibleDirectory: A
    } = (0, a._)(), E = s.get(t) ?? A.get(t);
    r()(null != E && (E.type === u.Z6.ACCORDION || S(E)), "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node");
    let g = S(E) ? E.collapseAfter ?? 0 : 0,
        c = E.layout;
    return l.useMemo(() => {
        let t = g,
            e = [];
        for (let i of c)
            if ("useTitle" in i && null != i.useTitle) {
                if (t > 0) {
                    t--;
                    continue
                }
                e.push({
                    key: i.key,
                    useTitle: i.useTitle
                })
            } if (0 === e.length) return "";
        let l = Math.min(i, 3);
        if (e.length <= l)
            if (1 === e.length) return o.intl.format(o.t["3H9tCW"], {
                settingOneHook: T({
                    setting: e[0],
                    formatter: n,
                    index: 0
                })
            });
            else if (2 === e.length) return o.intl.format(o.t.MWryo6, {
            settingOneHook: T({
                setting: e[0],
                formatter: n,
                index: 0
            }),
            settingTwoHook: T({
                setting: e[1],
                formatter: n,
                index: 1
            })
        });
        else return o.intl.format(o.t.a00b5G, {
            settingOneHook: T({
                setting: e[0],
                formatter: n,
                index: 0
            }),
            settingTwoHook: T({
                setting: e[1],
                formatter: n,
                index: 1
            }),
            settingThreeHook: T({
                setting: e[2],
                formatter: n,
                index: 2
            })
        });
        return 1 === l ? o.intl.format(o.t.O8vNbS, {
            settingOneHook: T({
                setting: e[0],
                formatter: n,
                index: 0
            })
        }) : 2 === l ? o.intl.format(o.t["acXG/W"], {
            settingOneHook: T({
                setting: e[0],
                formatter: n,
                index: 0
            }),
            settingTwoHook: T({
                setting: e[1],
                formatter: n,
                index: 1
            })
        }) : o.intl.format(o.t["5+ldWc"], {
            settingOneHook: T({
                setting: e[0],
                formatter: n,
                index: 0
            }),
            settingTwoHook: T({
                setting: e[1],
                formatter: n,
                index: 1
            }),
            settingThreeHook: T({
                setting: e[2],
                formatter: n,
                index: 2
            })
        })
    }, [i, g, c, n])
}