/** chunk id: 57990, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => c
}), n(733351);
var l = n(989349),
    r = n.n(l),
    i = n(253932),
    a = n(954571),
    o = n(815484),
    s = n(403918),
    u = n(652215);

function c(t) {
    let {
        text: e,
        emojiInfo: n,
        clearAfter: l,
        analyticsContext: c,
        createdAtMs: d,
        prompt: m,
        analyticsLocations: f
    } = t, p = e.trim();
    if (!(p.length > 0) && null == n) return i.G2.updateSetting(void 0);
    {
        let t = i.G2.updateSetting({
            text: p.length > 0 ? p : "",
            expiresAtMs: null != l && l !== s.yt.DONT_CLEAR ? String(r()().add((0, o.A)(l), "ms").toDate().getTime()) : "0",
            emojiId: null != n && null != n.id ? n.id : "0",
            emojiName: null != n ? n.name : "",
            createdAtMs: String(null != d ? d : r()().toDate().getTime())
        });
        return a.default.track(u.HAw.CUSTOM_STATUS_UPDATED, {
            location: null != c ? c.location : null,
            emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
            text_len: p.length,
            clear_after: null != l ? "".concat(l) : null,
            prompt_type: null == m ? void 0 : m.value,
            location_stack: f
        }), t
    }
}