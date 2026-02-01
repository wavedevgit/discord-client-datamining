/** chunk id: 105130, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => d
});
var r = n(933958),
    i = n(663278),
    l = n(91242),
    a = n(859703),
    s = n(792620);
n(590889);
var o = n(592653),
    c = n(652215),
    u = n(360469);

function d(e, t, n) {
    var d, p, h, g, m, f, A, _;
    switch (t) {
        case c.ZE4.ACTIVITY_PIP_MODE_UPDATE: {
            let t = null == (d = e.application) ? void 0 : d.id,
                n = null != t ? r.Ay.getLayoutModeForApp(t) : null;
            return null != n ? {
                is_pip_mode: n !== u.bN.FOCUSED
            } : null
        }
        case c.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE: {
            let t = null == (p = e.application) ? void 0 : p.id,
                n = null != t ? r.Ay.getLayoutModeForApp(t) : null;
            return null != n ? {
                layout_mode: n
            } : null
        }
        case c.ZE4.FRAME_LAYOUT_MODE_UPDATE: {
            let t = null != (null == (h = e.application) ? void 0 : h.id) ? null == (g = l.A.getConnectedFrame()) ? void 0 : g.layoutMode : null;
            return null != t ? {
                layout_mode: t
            } : null
        }
        case c.ZE4.THERMAL_STATE_UPDATE: {
            let e = (0, i.zw)();
            if (e === i.MW.UNHANDLED) return null;
            return {
                thermal_state: e
            }
        }
        case c.ZE4.ORIENTATION_UPDATE:
            return null;
        case c.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
            return (0, o.Y$)();
        case c.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE: {
            let {
                quest_id: t
            } = n;
            if (!t) return null;
            let r = a.A.getQuest(t),
                i = (0, s.TP)(r);
            if (null == r || null == i || i !== (null == (f = e.application) ? void 0 : f.id)) return null;
            return {
                quest_id: t,
                is_enrolled: (null == (A = r.userStatus) ? void 0 : A.enrolledAt) != null,
                enrolled_at: null != (m = null == (_ = r.userStatus) ? void 0 : _.enrolledAt) ? m : null
            }
        }
        default:
            return null
    }
}