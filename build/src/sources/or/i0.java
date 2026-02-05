package or;

import androidx.recyclerview.widget.RecyclerView;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.CharsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i0 {
    public static final int a(int i10, int i11) {
        return Intrinsics.compare(i10 ^ Integer.MIN_VALUE, i11 ^ Integer.MIN_VALUE);
    }

    public static final int b(long j10, long j11) {
        return Intrinsics.compare(j10 ^ Long.MIN_VALUE, j11 ^ Long.MIN_VALUE);
    }

    public static final double c(long j10) {
        return ((j10 >>> 11) * ((double) RecyclerView.ItemAnimator.FLAG_MOVED)) + (j10 & 2047);
    }

    public static final String d(long j10, int i10) {
        if (j10 >= 0) {
            String l10 = Long.toString(j10, CharsKt.checkRadix(i10));
            Intrinsics.checkNotNullExpressionValue(l10, "toString(...)");
            return l10;
        }
        long j11 = i10;
        long j12 = ((j10 >>> 1) / j11) << 1;
        long j13 = j10 - (j12 * j11);
        if (j13 >= j11) {
            j13 -= j11;
            j12++;
        }
        StringBuilder sb2 = new StringBuilder();
        String l11 = Long.toString(j12, CharsKt.checkRadix(i10));
        Intrinsics.checkNotNullExpressionValue(l11, "toString(...)");
        sb2.append(l11);
        String l12 = Long.toString(j13, CharsKt.checkRadix(i10));
        Intrinsics.checkNotNullExpressionValue(l12, "toString(...)");
        sb2.append(l12);
        return sb2.toString();
    }
}
