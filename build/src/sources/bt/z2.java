package bt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f7739a;

    /* renamed from: b  reason: collision with root package name */
    private int f7740b;

    public /* synthetic */ z2(long[] jArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(jArr);
    }

    @Override // bt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return jr.c0.b(f());
    }

    @Override // bt.d2
    public void b(int i10) {
        if (jr.c0.k(this.f7739a) < i10) {
            long[] jArr = this.f7739a;
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, jr.c0.k(jArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f7739a = jr.c0.d(copyOf);
        }
    }

    @Override // bt.d2
    public int d() {
        return this.f7740b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f7739a;
        int d10 = d();
        this.f7740b = d10 + 1;
        jr.c0.p(jArr, d10, j10);
    }

    public long[] f() {
        long[] copyOf = Arrays.copyOf(this.f7739a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return jr.c0.d(copyOf);
    }

    private z2(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f7739a = bufferWithData;
        this.f7740b = jr.c0.k(bufferWithData);
        b(10);
    }
}
