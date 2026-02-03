package ov;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p implements nu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final p f44819a = new p();

    private p() {
    }

    @Override // nu.b
    public Object f(Object obj, Object obj2) {
        String str;
        List split$default;
        List f02;
        Object firstOrNull = CollectionsKt.firstOrNull(sv.a.c(obj));
        if (firstOrNull instanceof String) {
            str = (String) firstOrNull;
        } else {
            str = null;
        }
        if (str == null || (split$default = StringsKt.split$default(str, new String[]{""}, false, 0, 6, null)) == null || (f02 = CollectionsKt.f0(split$default, 1)) == null) {
            return null;
        }
        return CollectionsKt.g0(f02, 1);
    }
}
