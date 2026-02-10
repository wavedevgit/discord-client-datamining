package kt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f35258a;

    /* renamed from: b  reason: collision with root package name */
    private int f35259b;

    public /* synthetic */ z2(long[] jArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(jArr);
    }

    @Override // kt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return rr.c0.b(f());
    }

    @Override // kt.d2
    public void b(int i10) {
        if (rr.c0.l(this.f35258a) < i10) {
            long[] jArr = this.f35258a;
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, rr.c0.l(jArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f35258a = rr.c0.d(copyOf);
        }
    }

    @Override // kt.d2
    public int d() {
        return this.f35259b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f35258a;
        int d10 = d();
        this.f35259b = d10 + 1;
        rr.c0.r(jArr, d10, j10);
    }

    public long[] f() {
        long[] copyOf = Arrays.copyOf(this.f35258a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return rr.c0.d(copyOf);
    }

    private z2(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f35258a = bufferWithData;
        this.f35259b = rr.c0.l(bufferWithData);
        b(10);
    }
}
