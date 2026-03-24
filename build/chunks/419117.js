/** chunk id: 419117 params = (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(199966),
    o = n(963935),
    d = n(985018);

function c(e) {
    let {
        title: t
    } = e;
    return t
}

function u(e) {
    let {
        useTitle: t,
        settingKey: n,
        formatter: i,
        index: s
    } = e, l = t();
    return "string" == typeof l ? i({
        title: l,
        index: s,
        key: n
    }) : l
}

function m(e) {
    let {
        setting: t,
        formatter: n,
        index: s
    } = e;
    return () => (0, i.jsx)(u, {
        useTitle: t.useTitle,
        settingKey: t.key,
        formatter: n,
        index: s
    }, t.key)
}

function g(e) {
    return e.type === o.Z6.LIST
}

function _(e, t) {
    let {
        limit: n = 2,
        formatter: i = c
    } = t ?? {};
    a()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let {
        visibleDirectory: l,
        accessibleDirectory: u
    } = (0, r._)(), _ = l.get(e) ?? u.get(e);
    a()(null != _ && (_.type === o.Z6.ACCORDION || g(_)), "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node");
    let x = g(_) ? _.collapseAfter ?? 0 : 0,
        A = _.layout;
    return s.useMemo(() => {
        let e = x,
            t = [];
        for (let n of A)
            if ("useTitle" in n && null != n.useTitle) {
                if (e > 0) {
                    e--;
                    continue
                }
                t.push({
                    key: n.key,
                    useTitle: n.useTitle
                })
            } if (0 === t.length) return "";
        let s = Math.min(n, 3);
        if (t.length <= s)
            if (1 === t.length) return d.intl.format(d.t["3H9tCW"], {
                settingOneHook: m({
                    setting: t[0],
                    formatter: i,
                    index: 0
                })
            });
            else if (2 === t.length) return d.intl.format(d.t.MWryo6, {
            settingOneHook: m({
                setting: t[0],
                formatter: i,
                index: 0
            }),
            settingTwoHook: m({
                setting: t[1],
                formatter: i,
                index: 1
            })
        });
        else return d.intl.format(d.t.a00b5G, {
            settingOneHook: m({
                setting: t[0],
                formatter: i,
                index: 0
            }),
            settingTwoHook: m({
                setting: t[1],
                formatter: i,
                index: 1
            }),
            settingThreeHook: m({
                setting: t[2],
                formatter: i,
                index: 2
            })
        });
        return 1 === s ? d.intl.format(d.t.O8vNbS, {
            settingOneHook: m({
                setting: t[0],
                formatter: i,
                index: 0
            })
        }) : 2 === s ? d.intl.format(d.t["acXG/W"], {
            settingOneHook: m({
                setting: t[0],
                formatter: i,
                index: 0
            }),
            settingTwoHook: m({
                setting: t[1],
                formatter: i,
                index: 1
            })
        }) : d.intl.format(d.t["5+ldWc"], {
            settingOneHook: m({
                setting: t[0],
                formatter: i,
                index: 0
            }),
            settingTwoHook: m({
                setting: t[1],
                formatter: i,
                index: 1
            }),
            settingThreeHook: m({
                setting: t[2],
                formatter: i,
                index: 2
            })
        })
    }, [n, x, A, i])
}