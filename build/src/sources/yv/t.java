package yv;

import java.util.Locale;
import kotlin.jvm.internal.Intrinsics;
import yv.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t implements su.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final t f55710a = new t();

    private t() {
    }

    public String a(Object obj) {
        return o.a.a(this, obj);
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        String a10 = a(obj);
        if (a10 != null) {
            String upperCase = a10.toUpperCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(upperCase, "this as java.lang.String).toUpperCase(Locale.ROOT)");
            return upperCase;
        }
        return null;
    }
}
