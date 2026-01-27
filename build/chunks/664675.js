/** Chunk was on 21968 **/
/** chunk id: 664675, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P
}), n(172879), n(896048), n(638769);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(342494),
    c = n(990078),
    d = n(397927),
    u = n(686956),
    p = n(58149),
    m = n(392054),
    g = n(168186),
    b = n(320426),
    f = n(381616),
    h = n(961350),
    x = n(317525),
    j = n(71393),
    O = n(287809),
    y = n(954571),
    A = n(562153),
    v = n(661191),
    _ = n(53656),
    N = n(803378),
    w = n(200662),
    E = n(739174),
    T = n(738431),
    C = n(652215),
    S = n(985018),
    I = n(809719);

function P(e) {
    let {
        commandId: t,
        editPermissions: n,
        guildId: l,
        noneSelectedText: o,
        overwrites: c,
        hasAccessToMutatePermissions: p
    } = e, b = (0, s.bG)([j.A], () => j.A.getGuild(l));
    a()(null != b, "");
    let h = (0, s.bG)([x.A], () => x.A.getSortedRoles(l)),
        [y, E] = r.useState(new Set),
        T = r.useMemo(() => {
            let e = (0, g.Ap)(l),
                t = h.toReversed().reduce((e, t, n) => (e[t.id] = n, e), {});
            return Object.values(c).filter(e => e.canRead).sort((n, i) => {
                let r = n.type - i.type;
                if (0 !== r) return r;
                switch (n.type) {
                    case m.RA.USER:
                        return function(e, t, n) {
                            let i = Number(e.canWrite) - Number(t.canWrite);
                            if (0 !== i) return i;
                            let r = O.default.getUser(e.id),
                                l = O.default.getUser(t.id);
                            if (null != r && null != l) {
                                let e = A.Ay.getName(n, void 0, r),
                                    t = A.Ay.getName(n, void 0, l);
                                return null == e ? void 0 : e.localeCompare(t)
                            }
                            return v.default.compare(e.id, t.id)
                        }(n, i, l);
                    case m.RA.ROLE:
                        if (n.id === l) return -1;
                        if (i.id === l) return 1;
                        return t[n.id] > t[i.id] ? -1 : 1;
                    case m.RA.CHANNEL:
                        if (n.id === e) return -1;
                        if (i.id === e) return 1;
                        let a = Number(n.canWrite) - Number(i.canWrite);
                        return 0 !== a ? a : v.default.compare(n.id, i.id)
                }
            })
        }, [l, c, h]),
        C = r.useCallback((e, t) => {
            n({}, [(0, w.Eu)(e, t)])
        }, [n]),
        S = r.useCallback((e, t, i) => {
            let r = (0, w.Eu)(e, t);
            null != c[r] && n({
                [r]: {
                    id: e,
                    permission: i,
                    type: t
                }
            }, [])
        }, [n, c]);
    r.useEffect(() => {
        let e = Object.values(c).filter(e => e.type === m.RA.USER && !e.canRead && !y.has(e.id)).map(e => e.id);
        0 !== e.length && (u.A.requestMembersById(l, e, !1), E(t => new Set([...t, ...e])))
    }, [l, c, y, E]);
    let P = (0, s.bG)([N.A], () => N.A.getApplicationId()),
        R = (0, s.bG)([_.default], () => null == P ? void 0 : _.default.integrations.find(e => {
            var t;
            return (null == (t = e.application) ? void 0 : t.id) === P
        })),
        L = (0, s.bG)([f.A], () => void 0 !== R && f.A.canShowToggleTooltip(R.id));
    return T.length > 0 ? T.map(e => (0, i.jsx)(k, {
        guild: b,
        commandId: t,
        onChange: t => S(e.id, e.type, t),
        onRemove: () => C(e.id, e.type),
        overwrite: e,
        integration: R,
        canShowMigrationTooltip: L,
        hasAccessToMutatePermissions: p
    }, e.id)) : (0, i.jsx)("div", {
        className: I.dh,
        children: (0, i.jsx)(d.Text, {
            color: "text-muted",
            variant: "text-sm/normal",
            children: o
        })
    })
}

function k(e) {
    var t, n, l;
    let a, {
            guild: s,
            commandId: d,
            onChange: u,
            onRemove: f,
            overwrite: x,
            integration: j,
            canShowMigrationTooltip: O,
            hasAccessToMutatePermissions: A
        } = e,
        v = x.id === s.id || x.id === (0, g.Ap)(s.id),
        _ = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        N = !x.canWrite || !A,
        w = h.default.getId();
    A ? x.canWrite || (x.type === m.RA.USER ? a = x.id === w ? S.intl.string(S.t["1VF/0x"]) : S.intl.string(S.t.P1GnEd) : x.type === m.RA.ROLE && (a = S.intl.string(S.t.mcAijf))) : a = null != d ? S.intl.string(S.t.tybdas) : S.intl.string(S.t["z2hjk/"]);
    let P = O && null != j && x.id === s.id && void 0 !== _ && !x.permission;
    r.useEffect(() => {
        if (P) {
            var e, t, n;
            y.default.track(C.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), i.forEach(function(t) {
                        var i;
                        i = n[t], t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i
                    })
                }
                return e
            }({}, (0, p.H$)(s.id)), n = n = {
                application_id: null == j || null == (e = j.application) ? void 0 : e.id,
                location: "toggle"
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        }
    }, [s.id, null == j || null == (l = j.application) ? void 0 : l.id, P]);
    let k = r.useRef(null),
        L = (0, i.jsx)(c.m, {
            text: a,
            shouldShow: N,
            position: "left",
            children: (0, i.jsx)("div", {
                ref: k,
                children: (0, i.jsx)(T.A, {
                    isDisabled: N,
                    currentValue: x.permission,
                    onChange: P ? e => {
                        b.A.dismissToggleTooltip(s.id, j), u(e)
                    } : u
                })
            })
        }),
        D = (0, i.jsx)(o.AM, {
            targetElementRef: k,
            title: S.intl.string(S.t.ufFDiC),
            body: S.intl.format(S.t.pW4Crz, {
                botName: _,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
            }),
            position: "bottom",
            caretConfig: {
                align: "center"
            },
            onRequestClose: () => {
                b.A.dismissToggleTooltip(s.id, j)
            }
        });
    return (0, i.jsxs)("div", {
        className: I.Wk,
        children: [(0, i.jsx)("div", {
            className: I.MB,
            children: (0, i.jsx)(E.A, {
                guild: s,
                id: x.id,
                type: x.type,
                isLocked: N,
                lockTooltipText: a
            })
        }), (0, i.jsxs)("div", {
            className: I.ev,
            children: [(0, i.jsx)(R, {
                commandId: d,
                isSentinel: v,
                isDisabled: !A,
                onRemove: f
            }), L, P && D]
        })]
    }, x.id)
}

function R(e) {
    let {
        commandId: t,
        isSentinel: n,
        isDisabled: r,
        onRemove: l
    } = e;
    return r ? null : null == t && n ? null : (0, i.jsx)("div", {
        className: I.ys,
        children: (0, i.jsx)(d.DUT, {
            className: I.od,
            "aria-label": S.intl.string(S.t.mT0CQM),
            onClick: l,
            children: (0, i.jsx)(d.ucK, {
                size: "md",
                color: "currentColor",
                className: I.Yz
            })
        })
    })
}