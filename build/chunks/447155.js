/** chunk id: 447155, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p,
    v: () => h
}), n(321073);
var l, r = n(827734),
    i = n(397927),
    a = n(833349),
    s = n(47167),
    o = n(994500),
    c = n(287809),
    u = n(652215),
    d = n(985018),
    h = ((l = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE", l.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", l.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", l.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", l.INVITE_TO_WATCH = "INVITE_TO_WATCH", l.CREATE_THREAD = "CREATE_THREAD", l.SLASH_COMMAND = "SLASH_COMMAND", l.CLIPS = "CLIPS", l.POLL = "POLL", l.ACTIVITY = "ACTIVITY", l.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE", l.SUMMARIZE_THREAD = "SUMMARIZE_THREAD", l);

function p(e) {
    let {
        canAttachFiles: t,
        canStartThreads: n,
        useSlate: l,
        canUseApplicationCommands: h,
        hasClips: p,
        channel: f,
        activities: m,
        newClipsCount: g,
        canPostPolls: A,
        appContext: b,
        canSendScheduledMessages: _,
        canSummarizeThreads: y
    } = e, v = [];
    return t && (v.push({
        type: "UPLOAD_A_FILE",
        icon: i.H8$,
        display: d.intl.string(d.t["d3+iYs"])
    }), v.push({
        type: "UPLOAD_TEXT_AS_FILE",
        icon: i.H8$,
        display: d.intl.string(d.t["G9s+EM"])
    })), p && t && b !== u.BRT.POPOUT && v.push({
        type: "CLIPS",
        icon: i.xgA,
        display: d.intl.string(d.t.o034cv),
        badgeVal: g,
        badgeColor: r.A.colors.BACKGROUND_BRAND.css
    }), n && v.push({
        type: "CREATE_THREAD",
        icon: i.G_k,
        display: d.intl.string(d.t.rBIGBL)
    }), A && v.push({
        type: "POLL",
        icon: i.YRe,
        display: d.intl.string(d.t.Flr51u)
    }), l && h && v.push({
        type: "SLASH_COMMAND",
        icon: i.k9F,
        display: d.intl.string(d.t.Bbvp6G)
    }), m.forEach(e => {
        !(0, a.A)(e, u.jUm.EMBEDDED) && (e.type === u.$pd.PLAYING && (0, a.A)(e, u.jUm.JOIN) && v.push({
            type: "INVITE_TO_GAME",
            icon: i.LVO,
            display: d.intl.formatToPlainString(d.t["KHLo+F"], {
                channel: (0, s.m1)(f, c.default, o.A, !0),
                game: null != e ? e.name : ""
            }),
            activity: e
        }), e.type === u.$pd.LISTENING && (0, a.A)(e, u.jUm.SYNC) && v.push({
            type: "INVITE_TO_LISTEN",
            icon: i.J2m,
            display: d.intl.formatToPlainString(d.t.I479px, {
                channel: (0, s.m1)(f, c.default, o.A, !0),
                name: null != e ? e.name : ""
            }),
            activity: e
        }), e.type === u.$pd.WATCHING && (0, a.A)(e, u.jUm.SYNC) && v.push({
            type: "INVITE_TO_WATCH",
            icon: i.bMW,
            display: d.intl.formatToPlainString(d.t["EvCP/g"], {
                channel: (0, s.m1)(f, c.default, o.A, !0),
                name: null != e ? e.name : ""
            }),
            activity: e
        }))
    }), _ && v.push({
        type: "SCHEDULED_MESSAGE",
        icon: i.O4,
        display: d.intl.string(d.t["3+ii4F"])
    }), f.isThread() && y && v.push({
        type: "SUMMARIZE_THREAD",
        icon: i.Dud,
        display: d.intl.string(d.t.EXfguE)
    }), v
}