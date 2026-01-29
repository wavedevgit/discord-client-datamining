package kotlin.random;

import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    public static final String a(Object from, Object until) {
        Intrinsics.checkNotNullParameter(from, "from");
        Intrinsics.checkNotNullParameter(until, "until");
        return "Random range is empty: [" + from + ", " + until + ").";
    }

    public static final void b(int i10, int i11) {
        if (i11 > i10) {
            return;
        }
        throw new IllegalArgumentException(a(Integer.valueOf(i10), Integer.valueOf(i11)).toString());
    }

    public static final int c(int i10) {
        return 31 - Integer.numberOfLeadingZeros(i10);
    }

    public static final int d(c cVar, IntRange range) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        Intrinsics.checkNotNullParameter(range, "range");
        if (!range.isEmpty()) {
            if (range.e() < Integer.MAX_VALUE) {
                return cVar.f(range.d(), range.e() + 1);
            }
            if (range.d() > Integer.MIN_VALUE) {
                return cVar.f(range.d() - 1, range.e()) + 1;
            }
            return cVar.d();
        }
        throw new IllegalArgumentException("Cannot get random in empty range: " + range);
    }

    public static final int e(int i10, int i11) {
        return (i10 >>> (32 - i11)) & ((-i11) >> 31);
    }
}
