package mv;

import java.util.Locale;
import kotlin.jvm.internal.Intrinsics;
import mv.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements lu.b, o {

    /* renamed from: a  reason: collision with root package name */
    public static final b f39446a = new b();

    private b() {
    }

    public String a(Object obj) {
        return o.a.a(this, obj);
    }

    @Override // lu.b
    public Object f(Object obj, Object obj2) {
        String a10 = a(obj);
        if (a10 != null) {
            if (a10.length() > 0) {
                StringBuilder sb2 = new StringBuilder();
                String valueOf = String.valueOf(a10.charAt(0));
                Intrinsics.checkNotNull(valueOf, "null cannot be cast to non-null type java.lang.String");
                String upperCase = valueOf.toUpperCase(Locale.ROOT);
                Intrinsics.checkNotNullExpressionValue(upperCase, "this as java.lang.String).toUpperCase(Locale.ROOT)");
                sb2.append((Object) upperCase);
                String substring = a10.substring(1);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String).substring(startIndex)");
                sb2.append(substring);
                return sb2.toString();
            }
            return a10;
        }
        return null;
    }
}
