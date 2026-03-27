/** chunk id: 856768 params = (module,exports,require) **/
l.d(t, {
    A: () => f
});
var n = l(627968),
    i = l(64700),
    s = l(827734),
    a = l(73939),
    r = l(36525),
    C = l(421380),
    o = l(397927),
    d = l(686956),
    c = l(58149),
    u = l(961350),
    m = l(954571),
    x = l(504049),
    h = l(134413),
    g = l(225671),
    H = l(652215),
    j = l(985018),
    _ = l(260835);

function f(e) {
    let {
        guildId: t
    } = e, f = (0, h.vA)(t), {
        selectedUserIds: p,
        clearSelection: b
    } = (0, g.A)(t), v = p.size > 0, A = (e, t, l, n) => {
        d.A.startBulkBan(e, t, l, n)
    }, V = i.useCallback(() => {
        b()
    }, [b]), L = (0, n.jsxs)("span", {
        className: _.zC,
        children: [(0, n.jsx)(o.nys, {
            size: "custom",
            width: 24,
            height: 24,
            color: (0, o.rdh)(s.A.unsafe_rawColors.PRIMARY_500).hex()
        }), (0, n.jsx)(o.Text, {
            variant: "heading-md/bold",
            color: "text-default",
            children: j.intl.format(j.t.TstoSZ, {
                count: p.size
            })
        }), (0, n.jsx)(o.QWc, {
            text: j.intl.string(j.t.yW6ZdE),
            onClick: V
        })]
    }), N = (0, n.jsxs)("span", {
        className: _.UD,
        children: [(0, n.jsx)(o.wI0, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
        }), (0, n.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "currentColor",
            children: j.intl.string(j.t["2a50fF"])
        })]
    });
    return f ? (0, n.jsx)(a.F, {
        component: "div",
        className: _.n2,
        children: v && (0, n.jsx)(o.FQk, {
            children: (0, n.jsx)(r.A, {
                onSave: () => {
                    m.default.track(H.HAw.BULK_MODERATION_ACTION_STARTED, {
                        ...(0, c.H$)(t),
                        action_type: x.Nj.BAN,
                        target_user_ids: [...p],
                        mod_user_id: u.default.getId(),
                        location: "MemberSafetyPageActionNotice"
                    }), (0, o.mMO)(async () => {
                        let {
                            default: e
                        } = await l.e("2504").then(l.bind(l, 333179));
                        return l => (0, n.jsx)(e, {
                            ...l,
                            guildId: t,
                            canBulkBan: f,
                            userIds: p,
                            onBanMultiple: A
                        })
                    })
                },
                onSaveText: N,
                onSaveButtonColor: C.XD.RED,
                message: L
            })
        })
    }) : null
}