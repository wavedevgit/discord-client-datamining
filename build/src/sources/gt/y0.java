package gt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f25365a;

    /* renamed from: b  reason: collision with root package name */
    private int f25366b;

    public y0(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f25365a = bufferWithData;
        this.f25366b = bufferWithData.length;
        b(10);
    }

    @Override // gt.d2
    public void b(int i10) {
        long[] jArr = this.f25365a;
        if (jArr.length < i10) {
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, jArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f25365a = copyOf;
        }
    }

    @Override // gt.d2
    public int d() {
        return this.f25366b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f25365a;
        int d10 = d();
        this.f25366b = d10 + 1;
        jArr[d10] = j10;
    }

    @Override // gt.d2
    /* renamed from: f */
    public long[] a() {
        long[] copyOf = Arrays.copyOf(this.f25365a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
