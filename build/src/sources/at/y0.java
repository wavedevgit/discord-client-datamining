package at;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f6911a;

    /* renamed from: b  reason: collision with root package name */
    private int f6912b;

    public y0(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f6911a = bufferWithData;
        this.f6912b = bufferWithData.length;
        b(10);
    }

    @Override // at.d2
    public void b(int i10) {
        long[] jArr = this.f6911a;
        if (jArr.length < i10) {
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, jArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f6911a = copyOf;
        }
    }

    @Override // at.d2
    public int d() {
        return this.f6912b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f6911a;
        int d10 = d();
        this.f6912b = d10 + 1;
        jArr[d10] = j10;
    }

    @Override // at.d2
    /* renamed from: f */
    public long[] a() {
        long[] copyOf = Arrays.copyOf(this.f6911a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
