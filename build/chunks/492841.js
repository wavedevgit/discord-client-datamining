/** Chunk was on 6502 **/
/** chunk id: 492841, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(937161),
    l = n(406704),
    s = n(576705),
    r = n(143413),
    a = n(652215);

function o(e, t) {
    let n = !t.isSystemDM() && !(0, r.A)(e),
        {
            enabled: o
        } = i.A.getCurrentConfig({
            guildId: t.guild_id,
            location: "isMessagePinnable"
        }),
        c = (s.A.can(a.xBc.MANAGE_MESSAGES, t) && !o || s.A.can(a.xBc.PIN_MESSAGES, t)) && s.A.can(a.xBc.READ_MESSAGE_HISTORY, t);
    return n && (c || t.isPrivate()) && (0, l.jr)(t) && t.type !== a.rbe.GUILD_VOICE && t.type !== a.rbe.GUILD_STAGE_VOICE
}