/** Chunk was on 1113 **/
/** chunk id: 582904, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L7: () => m,
    Z0: () => f,
    kt: () => g
}), n(896048), n(638769), n(839272);
var r = n(64700),
    l = n(311907),
    i = n(775602),
    s = n(394577),
    a = n(21119),
    o = n(696451),
    c = n(287809),
    u = n(607567),
    d = n(403362),
    h = n(605431),
    p = n(366251);

function g(e) {
    let {
        channel: t
    } = e, {
        totalSuggestions: n
    } = s.A.useConfig({
        location: "useVoiceInviteSuggestions"
    }), i = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap(), []), h = null == t ? void 0 : t.guild_id, p = new Set((0, l.bG)([u.Ay], () => null == t ? [] : u.Ay.getVoiceStatesForChannel(t).map(e => e.user.id), [t])), g = (0, l.yK)([o.Ay, c.default], () => o.Ay.getMembers(h).map(e => c.default.getUser(e.userId)).filter(d.Vq).filter(e => !p.has(e.id)), [h, p]);
    return r.useMemo(() => g.toSorted((e, t) => {
        var n, r, l, s;
        let {
            id: a
        } = e, {
            id: o
        } = t;
        return (null != (n = null == (l = i.get(o)) ? void 0 : l.vcProbability) ? n : 0) - (null != (r = null == (s = i.get(a)) ? void 0 : s.vcProbability) ? r : 0)
    }), [g, i]).slice(0, n)
}

function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            collapsed: n = !1
        } = t,
        i = (0, l.bG)([p.A], () => p.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: i && !n,
        dismiss: r.useCallback(() => {
            (0, h.w)(e.id)
        }, [e])
    }
}

function m(e) {
    let [t, n] = r.useState(!1), [s, a] = r.useState(!1), o = (0, l.bG)([i.A], () => i.A.keyboardModeEnabled);
    r.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), a(!1);
        let r = () => n(!0),
            l = () => n(!1),
            i = () => a(!0),
            s = e => {
                t.contains(e.relatedTarget) || a(!1)
            };
        return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", l), t.addEventListener("focusin", i), t.addEventListener("focusout", s), () => {
            t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", l), t.removeEventListener("focusin", i), t.removeEventListener("focusout", s)
        }
    }, [e]);
    let c = o && s;
    return {
        isHovering: t,
        isFocusing: c,
        isHoveringOrFocusing: t || c
    }
}