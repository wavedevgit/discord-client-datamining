package mv;

import kotlin.text.StringsKt;
import mv.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements lu.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final d f39449a = new d();

    private d() {
    }

    public String a(Object obj) {
        return o.a.a(this, obj);
    }

    @Override // lu.b
    public Object f(Object obj, Object obj2) {
        String a10 = a(obj);
        if (a10 != null) {
            return Boolean.valueOf(StringsKt.k0(a10));
        }
        return null;
    }
}
