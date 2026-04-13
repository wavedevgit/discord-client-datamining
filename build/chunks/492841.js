/** chunk id: 492841 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(406704),
    s = n(576705),
    r = n(143413),
    l = n(652215);

function a(e, t) {
    let n = !t.isSystemDM() && !(0, r.A)(e),
        a = s.A.can(l.xBc.PIN_MESSAGES, t) && s.A.can(l.xBc.READ_MESSAGE_HISTORY, t);
    return n && (a || t.isPrivate()) && (0, i.jr)(t) && t.type !== l.rbe.GUILD_VOICE && t.type !== l.rbe.GUILD_STAGE_VOICE
}