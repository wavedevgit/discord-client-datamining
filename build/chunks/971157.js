/** Chunk was on 21968 **/
/** chunk id: 971157, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(896048), n(321073), n(228524);
var i = n(627968),
    r = n(64700),
    l = n(179771),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    c = n(157559),
    d = n(235986),
    u = n(997509),
    p = n(776479),
    m = n(389996),
    g = n(576705),
    b = n(486020),
    f = n(661191),
    h = n(427262),
    x = n(447066),
    j = n(998874),
    O = n(657681),
    y = n(267001),
    A = n(652215),
    v = n(985018),
    _ = n(882441);

function N(e) {
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
}

function w(e) {
    var t, n;
    let {
        application: r,
        guild: l,
        integration: s
    } = e, o = function(e, t) {
        if (null == e) return {};
        var n, i, r, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, i, r = {},
                    l = Object.getOwnPropertyNames(e);
                for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l
    }(e, ["application", "guild", "integration"]);
    return (0, i.jsx)(a.ConfirmModal, (t = N({}, o), n = n = {
        title: v.intl.formatToPlainString(v.t["rL9d/1"], {
            applicationName: r.name
        }),
        subtitle: v.intl.format(v.t.FGE8ya, {
            applicationName: r.name
        }),
        confirmText: v.intl.string(v.t.ebGf4m),
        onConfirm: () => {
            u.A.disableIntegration(l.id, s.id).catch(() => {
                c.A.show({
                    title: v.intl.string(v.t.wYqMmI),
                    body: v.intl.string(v.t.A4Mnst)
                })
            })
        }
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

function T(e) {
    let {
        guild: t,
        applicationIntegration: n,
        selectableWebhookChannels: a,
        editedWebhook: c,
        errors: u,
        canNavigate: T
    } = e, {
        application: E,
        integration: C,
        webhooks: S
    } = n, [I, P] = (0, s.yK)([g.A], () => [g.A.can(A.xBc.MANAGE_ROLES, t), null == E.bot || g.A.canManageUser(A.xBc.MANAGE_GUILD, E.bot.id, t)], [E.bot, t]), k = (0, s.bG)([g.A], () => g.A.can(A.xBc.MANAGE_WEBHOOKS, t), [t]), R = r.useCallback(() => {
        T() && (0, o.qfG)(e => (0, i.jsx)(w, N({
            guild: t,
            application: E,
            integration: C
        }, e)))
    }, [E, T, t, C]), L = r.useMemo(() => {
        let e = [{
            icon: o.O4,
            text: v.intl.formatToPlainString(v.t.gcdJ8J, {
                timestamp: f.default.extractTimestamp(C.id)
            })
        }];
        return null != C.user && e.push({
            icon: o.nys,
            text: v.intl.formatToPlainString(v.t.qE7oqs, {
                user: h.Ay.getUserTag(C.user)
            })
        }), e
    }, [C.id, C.user]), D = r.useMemo(() => {
        var e;
        return null != E.bot && (null == (e = C.scopes) ? void 0 : e.includes(l.F.BOT)) ? (0, i.jsx)(O.A, {
            guild: t,
            applicationIntegration: n
        }) : (0, i.jsx)(o.ZpM, {
            className: _.aM,
            editable: !0,
            children: (0, i.jsx)(o.Text, {
                color: "text-muted",
                variant: "text-sm/normal",
                children: v.intl.string(v.t.pfLnza)
            })
        })
    }, [E.bot, n, t, C.scopes]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(x.A, {
            name: E.name,
            imageSrc: b.Ay.getApplicationIconURL({
                id: E.id,
                icon: E.icon,
                size: 32
            }),
            details: L,
            isHeader: !0
        }), (null == E ? void 0 : E.description) != null ? (0, i.jsx)(m.A, {
            userBio: E.description,
            className: _.ux
        }) : null, I ? (0, i.jsx)(p.A, {
            application: E,
            canNavigate: T,
            guildId: t.id
        }) : null, (0, i.jsx)(o.cGx, {
            className: _.zN
        }), null != E.bot ? (0, i.jsxs)("div", {
            className: _.uW,
            children: [(0, i.jsx)(j.A, {
                icon: (0, i.jsx)(o.CnV, {
                    size: "xs",
                    color: "currentColor"
                }),
                title: v.intl.string(v.t.AOdOYr)
            }), D]
        }) : null, (0, i.jsxs)("div", {
            className: _.uW,
            children: [(0, i.jsx)(j.A, {
                icon: (0, i.jsx)(o.XC7, {
                    size: "md",
                    color: "currentColor"
                }),
                title: v.intl.string(v.t["t9ZX/I"])
            }), S.length > 0 ? (0, i.jsx)(y.A, {
                webhooks: S,
                editedWebhook: c,
                selectableWebhookChannels: a,
                errors: u,
                canNavigate: T
            }) : (0, i.jsx)(o.ZpM, {
                className: _.aM,
                editable: !0,
                children: (0, i.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: k ? v.intl.string(v.t.ahPd2Y) : v.intl.string(v.t.axqYMl)
                })
            })]
        }), (0, i.jsx)(o.cGx, {
            className: _.zN
        }), (0, i.jsxs)(d.A, {
            className: _.uW,
            justify: d.A.Justify.BETWEEN,
            align: d.A.Align.CENTER,
            children: [(0, i.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: P ? v.intl.string(v.t.hdneL4) : v.intl.string(v.t.xRCMqx)
            }), (0, i.jsx)(d.A.Child, {
                grow: 0,
                shrink: 0,
                children: (0, i.jsx)(o.Button, {
                    variant: "critical-primary",
                    size: "sm",
                    text: v.intl.string(v.t.ebGf4m),
                    disabled: !P,
                    onClick: R
                })
            })]
        })]
    })
}