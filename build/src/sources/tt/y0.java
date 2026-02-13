package tt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f50664a;

    /* renamed from: b  reason: collision with root package name */
    private int f50665b;

    public y0(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f50664a = bufferWithData;
        this.f50665b = bufferWithData.length;
        b(10);
    }

    @Override // tt.d2
    public void b(int i10) {
        long[] jArr = this.f50664a;
        if (jArr.length < i10) {
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, jArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f50664a = copyOf;
        }
    }

    @Override // tt.d2
    public int d() {
        return this.f50665b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f50664a;
        int d10 = d();
        this.f50665b = d10 + 1;
        jArr[d10] = j10;
    }

    @Override // tt.d2
    /* renamed from: f */
    public long[] a() {
        long[] copyOf = Arrays.copyOf(this.f50664a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
