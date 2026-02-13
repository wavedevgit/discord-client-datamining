package xn;

import android.content.Context;
import android.net.Uri;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f55507a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final Map f55508b = new LinkedHashMap();

    private b() {
    }

    private final int a(Context context, String str, String str2) {
        if (str.length() == 0) {
            return -1;
        }
        Locale ROOT = Locale.ROOT;
        Intrinsics.checkNotNullExpressionValue(ROOT, "ROOT");
        String lowerCase = str.toLowerCase(ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        String J = StringsKt.J(lowerCase, "-", "_", false, 4, null);
        String str3 = str2 + "/" + J;
        synchronized (this) {
            Map map = f55508b;
            Integer num = (Integer) map.get(str3);
            if (num != null) {
                return num.intValue();
            }
            int identifier = context.getResources().getIdentifier(J, str2, context.getPackageName());
            map.put(str3, Integer.valueOf(identifier));
            return identifier;
        }
    }

    public final Uri b(Context context, String name) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(name, "name");
        Locale ROOT = Locale.ROOT;
        Intrinsics.checkNotNullExpressionValue(ROOT, "ROOT");
        String lowerCase = name.toLowerCase(ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        StringsKt.J(lowerCase, "-", "_", false, 4, null);
        int a10 = a(context, name, "drawable");
        if (a10 != 0) {
            return Uri.parse("res:/" + a10);
        }
        int a11 = a(context, name, "raw");
        if (a11 != 0) {
            return Uri.parse("res:/" + a11);
        } else if (StringsKt.P(name, "asset:/", false, 2, null)) {
            String B0 = StringsKt.B0(name, "asset:/");
            return Uri.parse("file:///android_asset/" + B0);
        } else {
            return Uri.parse("file:///android_asset/" + name);
        }
    }
}
