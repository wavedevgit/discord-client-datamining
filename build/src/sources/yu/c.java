package yu;

import java.util.List;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import qv.d;
import yu.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements lu.b, b {

    /* renamed from: a  reason: collision with root package name */
    public static final c f55207a = new c();

    private c() {
    }

    private final int a(String str, int i10) {
        Integer valueOf = Integer.valueOf(str.length() + i10);
        if (valueOf.intValue() < 0) {
            valueOf = null;
        }
        if (valueOf != null) {
            return valueOf.intValue();
        }
        return 0;
    }

    private final int b(int i10, int i11) {
        Integer valueOf = Integer.valueOf(i10);
        if (valueOf.intValue() > i11) {
            valueOf = null;
        }
        if (valueOf != null) {
            return valueOf.intValue();
        }
        return i11;
    }

    private final String d(String str, int i10, int i11) {
        if (i10 >= 0 && i11 > 0) {
            return h(str, i10, i11);
        }
        if (i10 >= 0 && i11 < 0) {
            String substring = str.substring(i10, str.length() + i11);
            Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            return substring;
        } else if (i10 < 0 && i11 < 0) {
            return e(str, i10, i11);
        } else {
            if (i10 < 0 && i11 > 0) {
                return g(str, i10, i11);
            }
            return null;
        }
    }

    private final String e(String str, int i10, int i11) {
        String substring = str.substring(a(str, i10), b(str.length() + i11, str.length()));
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        return substring;
    }

    private final String g(String str, int i10, int i11) {
        int a10 = a(str, i10);
        String substring = str.substring(a10, b(i11 + a10, str.length()));
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        return substring;
    }

    private final String h(String str, int i10, int i11) {
        String substring = str.substring(i10, b(i11 + i10, str.length()));
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        return substring;
    }

    private final String i(String str, int i10) {
        if (i10 >= 0) {
            String substring = str.substring(i10);
            Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String).substring(startIndex)");
            return substring;
        } else if (Math.abs(i10) <= str.length()) {
            String substring2 = str.substring(str.length() + i10);
            Intrinsics.checkNotNullExpressionValue(substring2, "this as java.lang.String).substring(startIndex)");
            return substring2;
        } else {
            return str;
        }
    }

    private final String j(List list, int i10, int i11) {
        Object b10;
        String x02 = CollectionsKt.x0(k(CollectionsKt.firstOrNull(list)), ",", null, null, 0, null, null, 62, null);
        try {
            Result.a aVar = Result.f33071e;
            if (list.size() == 2) {
                x02 = f55207a.i(x02, i10);
            } else if (list.size() > 2) {
                x02 = f55207a.d(x02, i10, i11);
            }
            b10 = Result.b(x02);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33071e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.g(b10)) {
            b10 = null;
        }
        String str = (String) b10;
        if (str == null) {
            return "";
        }
        return str;
    }

    @Override // lu.b
    /* renamed from: c */
    public String f(Object obj, Object obj2) {
        List c10 = qv.a.c(obj);
        return f55207a.j(c10, d.b(String.valueOf(qv.c.b(c10))), d.b(String.valueOf(qv.c.c(c10))));
    }

    public List k(Object obj) {
        return b.a.d(this, obj);
    }
}
