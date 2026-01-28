/** Chunk was on 5606 **/
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
    p = n(64460),
    _ = n(92960),
    m = n(739008),
    g = n(314519),
    f = n(198168),
    b = n(799592),
    h = n(675704),
    A = n(806964),
    E = n(552049),
    x = n(877991),
    O = n(332779),
    C = n(187521),
    y = n(568765),
    j = n(904828),
    T = n(251494),
    v = n(82038),
    S = n(14214),
    I = n(151199),
    N = n(144353),
    P = n(535527),
    R = n(46647),
    D = n(512513),
    w = n(910492),
    L = n(416092),
    M = n(801796),
    G = n(344731),
    U = n(58841),
    k = n(406975),
    H = n(652215),
    B = n(985018),
    V = ((r = {}).NAVIGATION = "NAVIGATION", r.CHAT = "CHAT", r.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", r.MISCELLANEOUS = "MISCELLANEOUS", r.MESSAGE = "MESSAGE", r.DND = "DND", r);

function F(e) {
    switch (e) {
        case "NAVIGATION":
            return B.intl.string(B.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return B.intl.string(B.t.bI8F5u);
        case "CHAT":
            return B.intl.string(B.t.hDhbb3);
        case "MISCELLANEOUS":
            return B.intl.string(B.t.cBdwqs);
        case "MESSAGE":
            return B.intl.string(B.t["5fpmX9"]);
        case "DND":
            return B.intl.string(B.t["69j6+4"])
    }
}

function Y(e) {
    switch (e) {
        case "MESSAGE":
            return B.intl.string(B.t.iepGDn);
        case "DND":
            return B.intl.string(B.t.LBsB0a);
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
    [H.IWg.SERVER_NEXT]: j.yx,
    [H.IWg.SERVER_PREV]: j.yv,
    [H.IWg.CHANNEL_NEXT]: s.kF,
    [H.IWg.CHANNEL_PREV]: s.Oc,
    [H.IWg.NAVIGATE_BACK]: s.GY,
    [H.IWg.NAVIGATE_FORWARD]: s.M$,
    [H.IWg.UNREAD_NEXT]: M.mH,
    [H.IWg.UNREAD_PREV]: M.US,
    [H.IWg.MENTION_CHANNEL_NEXT]: M.BD,
    [H.IWg.MENTION_CHANNEL_PREV]: M.X8,
    [H.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [H.IWg.JUMP_TO_GUILD]: p.J,
    [H.IWg.SUBMIT]: T.X,
    [H.IWg.TEXTAREA_FOCUS]: v.c,
    [H.IWg.MARK_CHANNEL_READ]: _.D,
    [H.IWg.MARK_SERVER_READ]: m.P,
    [H.IWg.TOGGLE_CHANNEL_PINS]: N.O,
    [H.IWg.TOGGLE_FOR_LATER]: P.K,
    [H.IWg.TOGGLE_INBOX]: w.q,
    [H.IWg.MARK_TOP_INBOX_CHANNEL_READ]: w.O,
    [H.IWg.TOGGLE_USERS]: L.U,
    [H.IWg.TOGGLE_HELP]: R.x,
    [H.IWg.VIBE_WITH_WUMPUS]: U.y,
    [H.IWg.TOGGLE_MUTE]: S.VT,
    [H.IWg.TOGGLE_DEAFEN]: S.rR,
    [H.IWg.TOGGLE_CATEGORY_COLLAPSED]: I.y,
    [H.IWg.SEARCH_SOUNDBOARD]: C.A,
    [H.IWg.SCROLL_UP]: E.U5,
    [H.IWg.SCROLL_DOWN]: E.fz,
    [H.IWg.QUICKSWITCHER_SHOW]: h.R,
    [H.IWg.CREATE_DM_GROUP]: a.X,
    [H.IWg.SEARCH_EMOJIS]: x.L,
    [H.IWg.SEARCH_GIFS]: O.T,
    [H.IWg.SEARCH_STICKERS]: y.w,
    [H.IWg.TOGGLE_HOTKEYS]: D.z,
    [H.IWg.JUMP_TO_FIRST_UNREAD]: g.s,
    [H.IWg.CREATE_GUILD]: o.$,
    [H.IWg.UPLOAD_FILE]: G.T,
    [H.IWg.RETURN_TO_AUDIO_CHANNEL]: A.u,
    [H.IWg.CALL_ACCEPT]: l.Yo,
    [H.IWg.CALL_START]: l.OX,
    [H.IWg.FOCUS_SEARCH]: d.O,
    [H.IWg.JUMP_TO_CURRENT_CALL]: u.s,
    [H.IWg.ZOOM_IN]: k.Ur,
    [H.IWg.ZOOM_OUT]: k.hU,
    [H.IWg.ZOOM_RESET]: k.O$,
    [H.IWg.OPEN_APP_DIRECTORY]: f.N,
    [H.IWg.BROWSER_DEVTOOLS]: c.i,
    [H.IWg.OPEN_CONTEXT_MENU]: b.b
};

function z() {
    let e = [{
            description: B.intl.string(B.t.bx4Uyz),
            binds: W(H.IWg.SERVER_PREV, H.IWg.SERVER_NEXT),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t["+Wem6h"]),
            binds: W(H.IWg.CHANNEL_PREV, H.IWg.CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t["+2fcdz"]),
            binds: W(H.IWg.NAVIGATE_BACK, H.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.eVmj1H),
            binds: W(H.IWg.UNREAD_PREV, H.IWg.UNREAD_NEXT),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.EcqS7Y),
            binds: W(H.IWg.MENTION_CHANNEL_PREV, H.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t["4I3pwW"]),
            binds: W(H.IWg.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.Bqss72),
            binds: W(H.IWg.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.yYsRlD),
            binds: W(H.IWg.QUICKSWITCHER_SHOW),
            group: "NAVIGATION"
        }, {
            description: B.intl.string(B.t.O7ouXO),
            binds: W(H.IWg.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.Lns0Fc),
            binds: ["mod+d"],
            group: "DND"
        }, {
            description: B.intl.string(B.t.dmMqay),
            binds: ["up", "down"],
            group: "DND"
        }, {
            description: B.intl.string(B.t["cs/HVH"]),
            binds: ["spacebar", "enter"],
            group: "DND"
        }, {
            description: B.intl.string(B.t["1ioMJQ"]),
            binds: ["esc"],
            group: "DND",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.UaXAPx),
            binds: W(H.IWg.MARK_SERVER_READ),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["5X9vFj"]),
            binds: W(H.IWg.MARK_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.wxQFsl),
            binds: W(H.IWg.CREATE_DM_GROUP),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["C+XV7f"]),
            binds: W(H.IWg.TOGGLE_CHANNEL_PINS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["Q+YV/T"]),
            binds: W(H.IWg.TOGGLE_INBOX),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["YEjV+W"]),
            binds: W(H.IWg.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.AcBI9S),
            binds: W(H.IWg.TOGGLE_USERS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.JoxNnl),
            binds: W(H.IWg.SEARCH_EMOJIS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["3PHxo8"]),
            binds: W(H.IWg.SEARCH_GIFS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.YFl7eb),
            binds: W(H.IWg.SEARCH_STICKERS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.L3RYYJ),
            binds: W(H.IWg.SCROLL_UP, H.IWg.SCROLL_DOWN),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t["3HAurM"]),
            binds: W(H.IWg.JUMP_TO_FIRST_UNREAD),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.rrYBEu),
            binds: W(H.IWg.TEXTAREA_FOCUS),
            group: "CHAT"
        }, {
            description: B.intl.string(B.t.sUJlPL),
            binds: W(H.IWg.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.tL6eVW),
            binds: W(H.IWg.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t["QXe/7T"]),
            binds: W(H.IWg.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t.d6UIii),
            binds: W(H.IWg.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t.IcEW06),
            binds: W(H.IWg.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t.WN2dsS),
            binds: W(H.IWg.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.rUK0kk),
            binds: W(H.IWg.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO"
        }, {
            description: B.intl.string(B.t.vkGkSn),
            binds: W(H.IWg.TOGGLE_HELP),
            group: "MISCELLANEOUS"
        }, {
            description: B.intl.string(B.t.FJvZ87),
            binds: W(H.IWg.FOCUS_SEARCH),
            group: "MISCELLANEOUS"
        }, {
            description: B.intl.string(B.t["FiWl/T"]),
            binds: W(H.IWg.OPEN_CONTEXT_MENU),
            group: "MISCELLANEOUS"
        }, {
            description: B.intl.string(B.t.HnNtEI),
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.fsBWmS),
            binds: ["e"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.xwMqD7),
            binds: ["backspace"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.CvQ18w),
            binds: ["p"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.lfIHs4),
            binds: ["plus"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t["5IEsGx"]),
            binds: ["r"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.zSyDdA),
            binds: ["f"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.yGLjXF),
            binds: ["s"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.JrGD7E),
            binds: ["mod+c"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.RpE9k7),
            binds: ["alt+enter"],
            group: "MESSAGE"
        }, {
            description: B.intl.string(B.t.rrYBEu),
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0
        }, {
            description: B.intl.string(B.t.z9c6mt),
            binds: W(H.IWg.VIBE_WITH_WUMPUS),
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
        description: B.intl.string(B.t.IWNSoH),
        binds: W(H.IWg.TOGGLE_FOR_LATER),
        group: "CHAT"
    }), e
}
let Z = 21552 == n.j ? K : null