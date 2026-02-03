package q8;

import java.util.Locale;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import lr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f47435a = new a();

    /* renamed from: b  reason: collision with root package name */
    public static final Map f47436b = o0.m(v.a("mkv", "video/x-matroska"), v.a("glb", "model/gltf-binary"));

    private a() {
    }

    private final String a(String str) {
        int n02 = StringsKt.n0(str, '.', 0, false, 6, null);
        if (n02 >= 0 && n02 != str.length() - 1) {
            String substring = str.substring(n02 + 1);
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            return substring;
        }
        return null;
    }

    public static final String b(String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        String a10 = f47435a.a(path);
        if (a10 != null) {
            Locale US = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US, "US");
            String lowerCase = a10.toLowerCase(US);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            if (lowerCase != null) {
                String a11 = b.a(lowerCase);
                if (a11 == null) {
                    return (String) f47436b.get(lowerCase);
                }
                return a11;
            }
            return null;
        }
        return null;
    }

    public static final boolean c(String str) {
        if (str == null) {
            return false;
        }
        return StringsKt.P(str, "video/", false, 2, null);
    }
}
