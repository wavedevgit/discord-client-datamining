/** chunk id: 797169, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => o
});
var r = n(626584),
    i = n(837921);
let a = new r.A("cleanupUnusedVoiceFilterFiles");
async function o(e) {
    try {
        let {
            deletedFiles: t,
            errors: n
        } = await i.Ay.cleanupUnusedVoiceFilterFiles(e);
        t.length > 0 && a.info("VF cleanup completed", {
            deletedFiles: t
        }), n.length > 0 && a.warn("VF cleanup had errors", {
            errors: n
        })
    } catch (e) {
        a.warn("VF cleanup failed", {
            error: e
        })
    }
}