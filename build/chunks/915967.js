/** Chunk was on 2827 **/
/** chunk id: 915967, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => Z,
    Bx: () => z,
    Gm: () => F,
    Q_: () => V,
    zF: () => Y,
    zR: () => K
}), n(65821), n(321073);
var r, i = n(966597),
    l = n(774603),
    s = n(430086),
    a = n(394318),
    o = n(303757),
    c = n(830004),
    d = n(434728),
    u = n(308494),
    _ = n(64460),
    p = n(92960),
    m = n(739008),
    g = n(314519),
    A = n(198168),
    f = n(799592),
    b = n(675704),
    h = n(806964),
    E = n(552049),
    O = n(877991),
    C = n(332779),
    x = n(187521),
    S = n(568765),
    T = n(904828),
    I = n(251494),
    y = n(82038),
    N = n(14214),
    j = n(151199),
    v = n(144353),
    P = n(535527),
    R = n(46647),
    D = n(512513),
    L = n(910492),
    w = n(416092),
    M = n(801796),
    G = n(344731),
    U = n(58841),
    k = n(406975),
    B = n(652215),
    H = n(985018),
    V = ((r = {}).NAVIGATION = "NAVIGATION", r.CHAT = "CHAT", r.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", r.MISCELLANEOUS = "MISCELLANEOUS", r.MESSAGE = "MESSAGE", r.DND = "DND", r);

function F(e) {
    switch (e) {
        case "NAVIGATION":
            return H.intl.string(H.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return H.intl.string(H.t.bI8F5u);
        case "CHAT":
            return H.intl.string(H.t.hDhbb3);
        case "MISCELLANEOUS":
            return H.intl.string(H.t.cBdwqs);
        case "MESSAGE":
            return H.intl.string(H.t["5fpmX9"]);
        case "DND":
            return H.intl.string(H.t["69j6+4"])
    }
}

function Y(e) {
    switch (e) {
        case "MESSAGE":
            return H.intl.string(H.t.iepGDn);
        case "DND":
            return H.intl.string(H.t.LBsB0a);
        default:
            return
    }
}

function W() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map(e => {
        let t = K[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0]
    })
}
let K = {
    [B.IWg.SERVER_NEXT]: T.yx,
    [B.IWg.SERVER_PREV]: T.yv,
    [B.IWg.CHANNEL_NEXT]: s.kF,
    [B.IWg.CHANNEL_PREV]: s.Oc,
    [B.IWg.NAVIGATE_BACK]: s.GY,
    [B.IWg.NAVIGATE_FORWARD]: s.M$,
    [B.IWg.UNREAD_NEXT]: M.mH,
    [B.IWg.UNREAD_PREV]: M.US,
    [B.IWg.MENTION_CHANNEL_NEXT]: M.BD,
    [B.IWg.MENTION_CHANNEL_PREV]: M.X8,
    [B.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [B.IWg.JUMP_TO_GUILD]: _.J,
    [B.IWg.SUBMIT]: I.X,
    [B.IWg.TEXTAREA_FOCUS]: y.c,
    [B.IWg.MARK_CHANNEL_READ]: p.D,
    [B.IWg.MARK_SERVER_READ]: m.P,
    [B.IWg.TOGGLE_CHANNEL_PINS]: v.O,
    [B.IWg.TOGGLE_FOR_LATER]: P.K,
    [B.IWg.TOGGLE_INBOX]: L.q,
    [B.IWg.MARK_TOP_INBOX_CHANNEL_READ]: L.O,
    [B.IWg.TOGGLE_USERS]: w.U,
    [B.IWg.TOGGLE_HELP]: R.x,
    [B.IWg.VIBE_WITH_WUMPUS]: U.y,
    [B.IWg.TOGGLE_MUTE]: N.VT,
    [B.IWg.TOGGLE_DEAFEN]: N.rR,
    [B.IWg.TOGGLE_CATEGORY_COLLAPSED]: j.y,
    [B.IWg.SEARCH_SOUNDBOARD]: x.A,
    [B.IWg.SCROLL_UP]: E.U5,
    [B.IWg.SCROLL_DOWN]: E.fz,
    [B.IWg.QUICKSWITCHER_SHOW]: b.R,
    [B.IWg.CREATE_DM_GROUP]: a.X,
    [B.IWg.SEARCH_EMOJIS]: O.L,
    [B.IWg.SEARCH_GIFS]: C.T,
    [B.IWg.SEARCH_STICKERS]: S.w,
    [B.IWg.TOGGLE_HOTKEYS]: D.z,
    [B.IWg.JUMP_TO_FIRST_UNREAD]: g.s,
    [B.IWg.CREATE_GUILD]: o.$,
    [B.IWg.UPLOAD_FILE]: G.T,
    [B.IWg.RETURN_TO_AUDIO_CHANNEL]: h.u,
    [B.IWg.CALL_ACCEPT]: l.Yo,
    [B.IWg.CALL_START]: l.OX,
    [B.IWg.FOCUS_SEARCH]: d.O,
    [B.IWg.JUMP_TO_CURRENT_CALL]: u.s,
    [B.IWg.ZOOM_IN]: k.Ur,
    [B.IWg.ZOOM_OUT]: k.hU,
    [B.IWg.ZOOM_RESET]: k.O$,
    [B.IWg.OPEN_APP_DIRECTORY]: A.N,
    [B.IWg.BROWSER_DEVTOOLS]: c.i,
    [B.IWg.OPEN_CONTEXT_MENU]: f.b
};

function z() {
    let e = [{
            description: H.intl.string(H.t.bx4Uyz),
            binds: W(B.IWg.SERVER_PREV, B.IWg.SERVER_NEXT),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t["+Wem6h"]),
            binds: W(B.IWg.CHANNEL_PREV, B.IWg.CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t["+2fcdz"]),
            binds: W(B.IWg.NAVIGATE_BACK, B.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.eVmj1H),
            binds: W(B.IWg.UNREAD_PREV, B.IWg.UNREAD_NEXT),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.EcqS7Y),
            binds: W(B.IWg.MENTION_CHANNEL_PREV, B.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t["4I3pwW"]),
            binds: W(B.IWg.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.Bqss72),
            binds: W(B.IWg.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.yYsRlD),
            binds: W(B.IWg.QUICKSWITCHER_SHOW),
            group: "NAVIGATION"
        }, {
            description: H.intl.string(H.t.O7ouXO),
            binds: W(B.IWg.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.Lns0Fc),
            binds: ["mod+d"],
            group: "DND"
        }, {
            description: H.intl.string(H.t.dmMqay),
            binds: ["up", "down"],
            group: "DND"
        }, {
            description: H.intl.string(H.t["cs/HVH"]),
            binds: ["spacebar", "enter"],
            group: "DND"
        }, {
            description: H.intl.string(H.t["1ioMJQ"]),
            binds: ["esc"],
            group: "DND",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.UaXAPx),
            binds: W(B.IWg.MARK_SERVER_READ),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["5X9vFj"]),
            binds: W(B.IWg.MARK_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.wxQFsl),
            binds: W(B.IWg.CREATE_DM_GROUP),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["C+XV7f"]),
            binds: W(B.IWg.TOGGLE_CHANNEL_PINS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["Q+YV/T"]),
            binds: W(B.IWg.TOGGLE_INBOX),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["YEjV+W"]),
            binds: W(B.IWg.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.AcBI9S),
            binds: W(B.IWg.TOGGLE_USERS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.JoxNnl),
            binds: W(B.IWg.SEARCH_EMOJIS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["3PHxo8"]),
            binds: W(B.IWg.SEARCH_GIFS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.YFl7eb),
            binds: W(B.IWg.SEARCH_STICKERS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.L3RYYJ),
            binds: W(B.IWg.SCROLL_UP, B.IWg.SCROLL_DOWN),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t["3HAurM"]),
            binds: W(B.IWg.JUMP_TO_FIRST_UNREAD),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.rrYBEu),
            binds: W(B.IWg.TEXTAREA_FOCUS),
            group: "CHAT"
        }, {
            description: H.intl.string(H.t.sUJlPL),
            binds: W(B.IWg.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.tL6eVW),
            binds: W(B.IWg.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t["QXe/7T"]),
            binds: W(B.IWg.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t.d6UIii),
            binds: W(B.IWg.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t.IcEW06),
            binds: W(B.IWg.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t.WN2dsS),
            binds: W(B.IWg.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.rUK0kk),
            binds: W(B.IWg.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO"
        }, {
            description: H.intl.string(H.t.vkGkSn),
            binds: W(B.IWg.TOGGLE_HELP),
            group: "MISCELLANEOUS"
        }, {
            description: H.intl.string(H.t.FJvZ87),
            binds: W(B.IWg.FOCUS_SEARCH),
            group: "MISCELLANEOUS"
        }, {
            description: H.intl.string(H.t["FiWl/T"]),
            binds: W(B.IWg.OPEN_CONTEXT_MENU),
            group: "MISCELLANEOUS"
        }, {
            description: H.intl.string(H.t.HnNtEI),
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.fsBWmS),
            binds: ["e"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.xwMqD7),
            binds: ["backspace"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.CvQ18w),
            binds: ["p"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.lfIHs4),
            binds: ["plus"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t["5IEsGx"]),
            binds: ["r"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.zSyDdA),
            binds: ["f"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.yGLjXF),
            binds: ["s"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.JrGD7E),
            binds: ["mod+c"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.RpE9k7),
            binds: ["alt+enter"],
            group: "MESSAGE"
        }, {
            description: H.intl.string(H.t.rrYBEu),
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0
        }, {
            description: H.intl.string(H.t.z9c6mt),
            binds: W(B.IWg.VIBE_WITH_WUMPUS),
            group: "MISCELLANEOUS"
        }],
        {
            enabled: t,
            inInbox: n
        } = i.A.getCurrentConfig({
            location: "keybinds"
        }, {
            autoTrackExposure: !1
        });
    return t && !n && e.push({
        description: H.intl.string(H.t.IWNSoH),
        binds: W(B.IWg.TOGGLE_FOR_LATER),
        group: "CHAT"
    }), e
}
let Z = 21552 == n.j ? K : null