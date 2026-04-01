/** chunk id: 114714 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(73153),
    a = n(272355),
    l = n(927813),
    r = n(4106),
    s = n(335934);
let o = null;
class d extends a.A {
    _initialize() {
        i.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    _terminate() {
        i.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    handlePostConnectionOpen() {
        (0, s.HF)("ICYMIManager", !1) && (! function e() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            r.A.fetchDehydrated({
                isInitialLoad: t
            }), null != o && clearTimeout(o), o = setTimeout(() => e(), 15 * l.A.Millis.MINUTE)
        }(!0), r.A.getGuildChannelScores(), r.A.getRecommendedGuilds())
    }
}
let c = new d