package u0;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l extends g {
    public l(int i10) {
        super(i10, null);
    }

    public final boolean c(long j10) {
        e(this.f51217b + 1);
        long[] jArr = this.f51216a;
        int i10 = this.f51217b;
        jArr[i10] = j10;
        this.f51217b = i10 + 1;
        return true;
    }

    public final boolean d(int i10, long[] elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        if (i10 < 0 || i10 > this.f51217b) {
            v0.d.c("");
        }
        if (elements.length == 0) {
            return false;
        }
        e(this.f51217b + elements.length);
        long[] jArr = this.f51216a;
        int i11 = this.f51217b;
        if (i10 != i11) {
            kotlin.collections.i.j(jArr, jArr, elements.length + i10, i10, i11);
        }
        kotlin.collections.i.o(elements, jArr, i10, 0, 0, 12, null);
        this.f51217b += elements.length;
        return true;
    }

    public final void e(int i10) {
        long[] jArr = this.f51216a;
        if (jArr.length < i10) {
            long[] copyOf = Arrays.copyOf(jArr, Math.max(i10, (jArr.length * 3) / 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f51216a = copyOf;
        }
    }

    public /* synthetic */ l(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 16 : i10);
    }
}
