/** chunk id: 324785, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => h
}), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(158954),
    i = r(311907),
    a = r(397927),
    c = r(686956),
    s = r(504049),
    u = r(734057),
    p = r(427262),
    f = r(226698),
    b = r(652215),
    y = r(641131),
    d = r(985018),
    g = r(544800);

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function m(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}

function h(e) {
    let {
        guildId: t,
        user: r,
        location: h,
        modReportId: j
    } = e, v = function(e, t) {
        if (null == e) return {};
        var r, n, l, o = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            return o
        }
        if (o = function(e, t) {
                if (null == e) return {};
                var r, n, l = {},
                    o = Object.getOwnPropertyNames(e);
                for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
    }(e, ["guildId", "user", "location", "modReportId"]), [w, P] = l.useState(""), [C, x] = l.useState(!1), k = (0, s.$9)(t, {
        location: h,
        targetUserId: r.id
    }), {
        isModReportClosed: I,
        isModReport: E
    } = (0, i.cf)([u.A], () => {
        let e = u.A.getChannel(j);
        return {
            isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
            isModReport: null == e ? void 0 : e.isModeratorReportChannel()
        }
    }), S = l.useCallback(() => {
        if (c.A.kickUser(t, r.id, w, j).then(() => {
                C && null != j && f.A.resolveFlag(j)
            }), k(s.Nj.KICK), null != j) {
            var e;
            null == (e = v.onClose) || e.call(v)
        }
    }, [t, r.id, w, k, j, C, v]), T = l.useCallback(e => {
        P(e)
    }, []);
    return null != j && E ? (0, n.jsx)(o.Modal, m(O({}, v), {
        title: d.intl.formatToPlainString(d.t["1Ie87p"], {
            user: r.username
        }),
        subtitle: d.intl.format(d.t["/yH0UT"], {
            user: "@".concat(p.Ay.getName(r))
        }),
        actions: [{
            text: d.intl.string(d.t["3glT6Z"]),
            onClick: S,
            size: "sm",
            variant: "critical-primary"
        }],
        actionBarInput: I ? void 0 : (0, n.jsx)(a.Checkbox, {
            checked: C,
            onChange: e => {
                x(e)
            },
            label: d.intl.string(y.default["8yIKem"])
        }),
        children: (0, n.jsx)(a.fs1, {
            label: d.intl.string(null != j ? d.t.hmKy8E : d.t["+2QEPt"]),
            maxLength: b.hlA,
            onChange: T,
            value: w,
            rows: 2
        })
    })) : (0, n.jsx)(o.ConfirmModal, m(O({
        title: d.intl.formatToPlainString(d.t["1Ie87p"], {
            user: r.username
        }),
        subtitle: d.intl.format(d.t["/yH0UT"], {
            user: "@".concat(p.Ay.getName(r))
        }),
        confirmText: d.intl.string(d.t["3glT6Z"]),
        cancelText: d.intl.string(d.t["ETE/oC"]),
        onConfirm: S
    }, v), {
        children: (0, n.jsx)("div", {
            className: g.Y,
            children: (0, n.jsx)(a.fs1, {
                label: d.intl.string(d.t["+2QEPt"]),
                maxLength: b.hlA,
                onChange: T,
                value: w,
                rows: 2
            })
        })
    }))
}