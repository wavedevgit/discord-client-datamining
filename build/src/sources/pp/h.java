package pp;

import android.content.res.Resources;
import android.util.DisplayMetrics;
import java.util.Arrays;
import java.util.Locale;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final DisplayMetrics f46161a = Resources.getSystem().getDisplayMetrics();

    public static final double a(double d10) {
        return d10 * f46161a.density;
    }

    public static final String b(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Locale US = Locale.US;
        Intrinsics.checkNotNullExpressionValue(US, "US");
        String lowerCase = str.toLowerCase(US);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        return new Regex("[- ]").replace(lowerCase, "_");
    }

    public static final double c(double d10) {
        return d10 / f46161a.density;
    }

    public static final double d(double d10) {
        return d10 * f46161a.scaledDensity;
    }

    public static final boolean e(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return StringsKt.N(str, "iqfs", true);
    }

    public static final boolean f(String str) {
        if (str != null) {
            return StringsKt.N(str, "inq_", true);
        }
        return false;
    }

    public static final String g(int i10) {
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String format = String.format("#%06X", Arrays.copyOf(new Object[]{Integer.valueOf(i10 & 16777215)}, 1));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }
}
