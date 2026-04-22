/** chunk id: 856768 params = (module,exports,require) **/
l.d(t, {
    A: () => _
});
var n = l(627968),
    i = l(64700),
    s = l(827734),
    a = l(73939),
    C = l(36525),
    r = l(421380),
    o = l(397927),
    d = l(686956),
    c = l(58149),
    u = l(961350),
    m = l(954571),
    x = l(504049),
    h = l(587426),
    g = l(134413),
    H = l(652215),
    p = l(985018),
    j = l(983475);

function _(e) {
    let {
        guildId: t
    } = e, _ = (0, g.vA)(t), {
        selectedUserIds: f,
        clearSelection: b
    } = (0, h.A)(t), A = f.size > 0, v = (e, t, l, n) => {
        d.A.startBulkBan(e, t, l, n)
    }, V = i.useCallback(() => {
        b()
    }, [b]), L = (0, n.jsxs)("span", {
        className: j.zC,
        children: [(0, n.jsx)(o.nys, {
            size: "custom",
            width: 24,
            height: 24,
            color: (0, o.rdh)(s.A.unsafe_rawColors.PRIMARY_500).hex()
        }), (0, n.jsx)(o.Text, {
            variant: "heading-md/bold",
            color: "text-default",
            children: p.intl.format(p.t.TstoSZ, {
                count: f.size
            })
        }), (0, n.jsx)(o.QWc, {
            text: p.intl.string(p.t.yW6ZdE),
            onClick: V
        })]
    }), D = (0, n.jsxs)("span", {
        className: j.UD,
        children: [(0, n.jsx)(o.wI0, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
        }), (0, n.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "currentColor",
            children: p.intl.string(p.t["2a50fF"])
        })]
    });
    return _ ? (0, n.jsx)(a.F, {
        component: "div",
        className: j.n2,
        children: A && (0, n.jsx)(o.FQk, {
            children: (0, n.jsx)(C.A, {
                onSave: () => {
                    m.default.track(H.HAw.BULK_MODERATION_ACTION_STARTED, {
                        ...(0, c.H$)(t),
                        action_type: x.Nj.BAN,
                        target_user_ids: [...f],
                        mod_user_id: u.default.getId(),
                        location: "MemberSafetyPageActionNotice"
                    }), (0, o.mMO)(async () => {
                        let {
                            default: e
                        } = await l.e("2504").then(l.bind(l, 333179));
                        return l => (0, n.jsx)(e, {
                            ...l,
                            guildId: t,
                            canBulkBan: _,
                            userIds: f,
                            onBanMultiple: v
                        })
                    })
                },
                onSaveText: D,
                onSaveButtonColor: r.XD.RED,
                message: L
            })
        })
    }) : null
}