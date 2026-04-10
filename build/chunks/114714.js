/** chunk id: 114714 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(73153),
    l = n(272355),
    r = n(927813),
    a = n(4106),
    s = n(335934);
let o = null;
class d extends l.A {
    _initialize() {
        i.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    _terminate() {
        i.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    handlePostConnectionOpen() {
        (0, s.HF)("ICYMIManager") && (! function e() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            a.A.fetchDehydrated({
                isInitialLoad: t
            }), null != o && clearTimeout(o), o = setTimeout(() => e(), 15 * r.A.Millis.MINUTE)
        }(!0), a.A.getGuildChannelScores(), a.A.getRecommendedGuilds())
    }
}
let c = new d