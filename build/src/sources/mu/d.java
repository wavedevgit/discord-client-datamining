package mu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements lu.b {

    /* renamed from: a  reason: collision with root package name */
    public static final d f39442a = new d();

    private d() {
    }

    @Override // lu.b
    /* renamed from: a */
    public Boolean f(Object obj, Object obj2) {
        Object firstOrNull = CollectionsKt.firstOrNull(qv.a.c(obj));
        Object b10 = qv.c.b(qv.a.c(obj));
        if (b10 instanceof String) {
            return Boolean.valueOf(StringsKt.V((CharSequence) b10, String.valueOf(firstOrNull), false, 2, null));
        }
        if (b10 instanceof List) {
            return Boolean.valueOf(((List) b10).contains(firstOrNull));
        }
        return Boolean.FALSE;
    }
}
