package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f31104a;

    /* renamed from: b  reason: collision with root package name */
    private int f31105b;

    public y0(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31104a = bufferWithData;
        this.f31105b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        long[] jArr = this.f31104a;
        if (jArr.length < i10) {
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, jArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31104a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31105b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f31104a;
        int d10 = d();
        this.f31105b = d10 + 1;
        jArr[d10] = j10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public long[] a() {
        long[] copyOf = Arrays.copyOf(this.f31104a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
