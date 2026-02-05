package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class c {
    public static final double a(double d10, ks.b sourceUnit, ks.b targetUnit) {
        Intrinsics.checkNotNullParameter(sourceUnit, "sourceUnit");
        Intrinsics.checkNotNullParameter(targetUnit, "targetUnit");
        long convert = targetUnit.d().convert(1L, sourceUnit.d());
        if (convert > 0) {
            return d10 * convert;
        }
        return d10 / sourceUnit.d().convert(1L, targetUnit.d());
    }

    public static final long b(long j10, ks.b sourceUnit, ks.b targetUnit) {
        Intrinsics.checkNotNullParameter(sourceUnit, "sourceUnit");
        Intrinsics.checkNotNullParameter(targetUnit, "targetUnit");
        return targetUnit.d().convert(j10, sourceUnit.d());
    }

    public static final long c(long j10, ks.b sourceUnit, ks.b targetUnit) {
        Intrinsics.checkNotNullParameter(sourceUnit, "sourceUnit");
        Intrinsics.checkNotNullParameter(targetUnit, "targetUnit");
        return targetUnit.d().convert(j10, sourceUnit.d());
    }
}
