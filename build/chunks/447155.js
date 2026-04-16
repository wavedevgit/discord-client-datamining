/** chunk id: 447155 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    v: () => h
}), n(321073);
var i, l = n(827734),
    s = n(397927),
    a = n(833349),
    r = n(47167),
    o = n(994500),
    c = n(287809),
    d = n(652215),
    u = n(985018),
    h = ((i = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE", i.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", i.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", i.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", i.INVITE_TO_WATCH = "INVITE_TO_WATCH", i.CREATE_THREAD = "CREATE_THREAD", i.SLASH_COMMAND = "SLASH_COMMAND", i.CLIPS = "CLIPS", i.POLL = "POLL", i.ACTIVITY = "ACTIVITY", i.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE", i.SUMMARIZE_THREAD = "SUMMARIZE_THREAD", i);

function m(e) {
    let {
        canAttachFiles: t,
        canStartThreads: n,
        useSlate: i,
        canUseApplicationCommands: h,
        hasClips: m,
        channel: A,
        activities: g,
        newClipsCount: _,
        canPostPolls: p,
        appContext: f,
        canSendScheduledMessages: E,
        canSummarizeThreads: C
    } = e, x = [];
    return t && (x.push({
        type: "UPLOAD_A_FILE",
        icon: s.H8$,
        display: u.intl.string(u.t["d3+iYs"])
    }), x.push({
        type: "UPLOAD_TEXT_AS_FILE",
        icon: s.H8$,
        display: u.intl.string(u.t["G9s+EM"])
    })), m && t && f !== d.BRT.POPOUT && x.push({
        type: "CLIPS",
        icon: s.xgA,
        display: u.intl.string(u.t.o034cv),
        badgeVal: _,
        badgeColor: l.A.colors.BACKGROUND_BRAND.css
    }), n && x.push({
        type: "CREATE_THREAD",
        icon: s.G_k,
        display: u.intl.string(u.t.rBIGBL)
    }), p && x.push({
        type: "POLL",
        icon: s.YRe,
        display: u.intl.string(u.t.Flr51u)
    }), i && h && x.push({
        type: "SLASH_COMMAND",
        icon: s.k9F,
        display: u.intl.string(u.t.Bbvp6G)
    }), g.forEach(e => {
        !(0, a.A)(e, d.jUm.EMBEDDED) && (e.type === d.$pd.PLAYING && (0, a.A)(e, d.jUm.JOIN) && x.push({
            type: "INVITE_TO_GAME",
            icon: s.LVO,
            display: u.intl.formatToPlainString(u.t["KHLo+F"], {
                channel: (0, r.m1)(A, c.default, o.A, !0),
                game: null != e ? e.name : ""
            }),
            activity: e
        }), e.type === d.$pd.LISTENING && (0, a.A)(e, d.jUm.SYNC) && x.push({
            type: "INVITE_TO_LISTEN",
            icon: s.J2m,
            display: u.intl.formatToPlainString(u.t.I479px, {
                channel: (0, r.m1)(A, c.default, o.A, !0),
                name: null != e ? e.name : ""
            }),
            activity: e
        }), e.type === d.$pd.WATCHING && (0, a.A)(e, d.jUm.SYNC) && x.push({
            type: "INVITE_TO_WATCH",
            icon: s.bMW,
            display: u.intl.formatToPlainString(u.t["EvCP/g"], {
                channel: (0, r.m1)(A, c.default, o.A, !0),
                name: null != e ? e.name : ""
            }),
            activity: e
        }))
    }), E && x.push({
        type: "SCHEDULED_MESSAGE",
        icon: s.O4,
        display: u.intl.string(u.t["3+ii4F"])
    }), A.isThread() && C && x.push({
        type: "SUMMARIZE_THREAD",
        icon: s.Dud,
        display: u.intl.string(u.t.EXfguE)
    }), x
}