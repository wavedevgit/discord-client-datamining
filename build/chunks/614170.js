/** Chunk was on 7453 **/
/** chunk id: 614170, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => C
}), t(228524);
var l = t(627968);
t(64700);
var r = t(311907),
    i = t(857071),
    a = t(69407),
    o = t(446600),
    c = t(734057),
    s = t(71393),
    u = t(576705),
    d = t(383501),
    g = t(287809),
    p = t(707592),
    m = t(698441),
    v = t(485394),
    f = t(961022),
    h = t(794782),
    b = t(9448),
    y = t(974930),
    A = t(691012),
    j = t(895202),
    x = t(482857),
    O = t(652215);

function C(e) {
    var n, t, C;
    let {
        guildEvent: E,
        truncate: N,
        onActionTaken: P,
        className: k,
        isNew: w
    } = e, {
        id: G,
        guild_id: _,
        channel_id: I,
        creator_id: S,
        name: T,
        description: D,
        entity_type: L,
        image: M,
        recurrence_rule: B
    } = E, U = (0, y.G3)(E), R = (0, r.bG)([m.Ay], () => m.Ay.isInterestedInEventRecurrence(G, U), [G, U]), V = (0, r.bG)([i.A], () => i.A.isLurking(_), [_]), K = (0, r.bG)([o.A], () => o.A.getStageInstanceByChannel(I), [I]), H = (0, r.bG)([s.A], () => s.A.getGuild(_), [_]), J = (0, r.bG)([c.A], () => c.A.getChannel(I), [I]), z = (0, r.bG)([g.default], () => g.default.getUser(S), [S]), {
        speakers: q
    } = (0, f.A)({
        id: I,
        data: {
            guild: null,
            instance: K,
            speakers: [],
            participantCount: 0
        },
        context: {
            guildId: _,
            instance: K
        }
    }), F = (0, r.bG)([d.A], () => d.A.getChannelId()), X = (0, m.Fd)(E), W = F === I && null != F && X, Q = q.filter(e => e.type === a.wY.VOICE), Y = Q.length, Z = (0, r.bG)([u.A], () => u.A.can(O.xBc.CONNECT, J), [J]), $ = (0, v.Ay)(E), ee = null != H, en = (0, x.A)({
        guild: H,
        channel: J,
        guildScheduledEvent: E,
        isActive: X,
        recurrenceId: U,
        onActionTaken: P
    }), et = V ? void 0 : e => (0, p.uR)({
        eventId: G,
        recurrenceId: e
    });
    return (0, l.jsx)(j.A, (t = function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
                l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
                var l;
                l = t[n], n in e ? Object.defineProperty(e, n, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = l
            })
        }
        return e
    }({
        guild: H,
        channel: J,
        creator: z,
        name: T,
        entityType: L,
        description: null != D ? D : void 0,
        location: null != (n = (0, b.oF)(E)) ? n : void 0,
        imageSource: null != M ? (0, A.A)(E) : void 0,
        imageLocation: j.c.THUMBNAIL,
        isActive: X,
        isUserLurking: V,
        isJoined: W,
        isMember: ee,
        speakers: Q,
        canConnect: Z,
        speakerCount: Y,
        rsvped: R,
        canInvite: $
    }, en), C = C = {
        className: k,
        onClick: et,
        truncate: N,
        isNew: w,
        guildEvent: E,
        recurrenceRule: (0, h.Sn)(B),
        recurrenceId: U
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(C)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
        }
        return t
    })(Object(C)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(C, e))
    }), t))
}