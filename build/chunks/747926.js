/** Chunk was on web.js **/
/** chunk id: 747926, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    JA: () => S,
    Tv: () => T,
    bA: () => N,
    xu: () => C
});
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(73153),
    l = n(465532),
    c = n(58149),
    u = n(584682),
    d = n(9588),
    f = n(267102),
    p = n(376708),
    _ = n(976860),
    h = n(378570),
    m = n(253932),
    g = n(761640),
    E = n(31717),
    y = n(309010),
    b = n(977997),
    O = n(203982),
    v = n(37411),
    A = n(652215),
    I = n(746080);

function S(e, t, n) {
    if (!(0, p.C$)(e.id)) return void(0, d.E)();
    f.Uw.dispatch(A.jej.POPOUT_CLOSE);
    let r = !s().isEmpty(b.A.getVoiceStatesForChannel(e.id));
    if (t || !m.SY.getSetting() || __OVERLAY__ || r) {
        o.h.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e.parent_id
        }), null != n ? (0, h.N9)(e, {
            source: n
        }) : (0, h.iN)(e.id);
        return
    }
    i()(null != e.parent_id, "all threads must have parents");
    let a = e.getGuildId();
    if (null != a && null != g.Ay.getGuildSidebarState(a)) {
        o.h.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e.parent_id
        }), null != n ? (0, h.N9)(e, {
            source: n
        }) : (0, h.iN)(e.id);
        return
    }
    let l = y.A.getChannelId();
    e.parent_id === l || (0, I.mP)(l) || (0, h.iN)(e.parent_id), (0, _.pX)(A.BVt.CHANNEL_THREAD_VIEW((0, u.j)(e), (0, I.mP)(l) ? I.VV.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? {
        source: v.H9.FORUM
    } : void 0), setTimeout(() => {
        O._.dispatch(A.jej.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: e.id
        })
    }, 0)
}

function T(e, t, n) {
    if (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i()(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.zV)(A.HAw.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }), f.Uw.dispatch(A.jej.POPOUT_CLOSE), y.A.getChannelId() !== e.id && (0, h.iN)(e.id), "" === E.A.getDraft(e.id, E.C.FirstThreadMessage)) {
        let t = E.A.getDraft(e.id, E.C.ChannelMessage);
        l.A.saveDraft(e.id, "", E.C.ChannelMessage), l.A.saveDraft(e.id, t, E.C.FirstThreadMessage)
    }
    setTimeout(() => {
        o.h.dispatch({
            type: "SIDEBAR_CREATE_THREAD",
            parentChannelId: e.id,
            parentMessageId: null == t ? void 0 : t.id,
            location: n
        })
    }, 0)
}

function C(e, t) {
    (0, _.pX)(A.BVt.CHANNEL(e, (0, I.mP)(t) ? I.VV.GUILD_HOME : t)), o.h.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: t
    })
}

function N(e) {
    o.h.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e
    }), o.h.dispatch({
        type: "DRAFT_CLEAR",
        channelId: e,
        draftType: E.C.FirstThreadMessage
    }), o.h.dispatch({
        type: "DRAFT_CLEAR",
        channelId: e,
        draftType: E.C.ThreadSettings
    })
}