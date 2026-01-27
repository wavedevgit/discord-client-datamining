/** Chunk was on 77870 **/
/** chunk id: 582904, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L7: () => m,
    Z0: () => g,
    kt: () => f
}), n(896048), n(638769), n(839272);
var r = n(64700),
    l = n(311907),
    i = n(775602),
    s = n(400634),
    a = n(21119),
    o = n(696451),
    c = n(287809),
    u = n(607567),
    d = n(403362),
    p = n(605431),
    h = n(366251);

function f(e) {
    let {
        channel: t
    } = e, n = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap(), []), i = null == t ? void 0 : t.guild_id, s = new Set((0, l.bG)([u.Ay], () => null == t ? [] : u.Ay.getVoiceStatesForChannel(t).map(e => e.user.id), [t])), p = (0, l.yK)([o.Ay, c.default], () => o.Ay.getMembers(i).map(e => c.default.getUser(e.userId)).filter(d.Vq).filter(e => !s.has(e.id)), [i, s]);
    return r.useMemo(() => p.toSorted((e, t) => {
        var r, l, i, s;
        let {
            id: a
        } = e, {
            id: o
        } = t;
        return (null != (r = null == (i = n.get(o)) ? void 0 : i.vcProbability) ? r : 0) - (null != (l = null == (s = n.get(a)) ? void 0 : s.vcProbability) ? l : 0)
    }), [p, n]).slice(0, 5)
}

function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            enabled: n
        } = (0, s.B)({
            autoTrackExposure: !1,
            guildId: e.guild_id,
            location: "VoiceInviteSuggestionsUtils"
        }),
        {
            collapsed: i = !1
        } = t,
        a = (0, l.bG)([h.A], () => h.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: n && a && !i,
        dismiss: r.useCallback(() => {
            (0, p.w)(e.id)
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