package pv;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {
    public static final double a(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Double p10 = StringsKt.p(str);
        if (p10 != null) {
            return p10.doubleValue();
        }
        return 0.0d;
    }

    public static final int b(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return (int) a(str);
    }

    public static final long c(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return (long) a(str);
    }
}
