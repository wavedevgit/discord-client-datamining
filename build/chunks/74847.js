/** chunk id: 74847 params = (module,exports,require) **/
"use strict";
n.d(t, {
    t: () => s
});
var i = n(734057),
    r = n(576705),
    l = n(652215);

function s(e) {
    let t = i.A.getChannel(e),
        n = t?.isPrivate(),
        s = t?.isForumChannel();
    return n || r.A.can(l.xBc.ATTACH_FILES, t) && r.A.can(l.xBc.SEND_MESSAGES, t) && !s
}