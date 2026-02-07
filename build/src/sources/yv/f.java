package yv;

import java.util.Locale;
import kotlin.jvm.internal.Intrinsics;
import yv.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements su.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final f f55689a = new f();

    private f() {
    }

    public String a(Object obj) {
        return o.a.a(this, obj);
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        String a10 = a(obj);
        if (a10 != null) {
            String lowerCase = a10.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(Locale.ROOT)");
            return lowerCase;
        }
        return null;
    }
}
