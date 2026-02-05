package gt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f25379a;

    /* renamed from: b  reason: collision with root package name */
    private int f25380b;

    public /* synthetic */ z2(long[] jArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(jArr);
    }

    @Override // gt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return or.c0.b(f());
    }

    @Override // gt.d2
    public void b(int i10) {
        if (or.c0.l(this.f25379a) < i10) {
            long[] jArr = this.f25379a;
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, or.c0.l(jArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f25379a = or.c0.d(copyOf);
        }
    }

    @Override // gt.d2
    public int d() {
        return this.f25380b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f25379a;
        int d10 = d();
        this.f25380b = d10 + 1;
        or.c0.q(jArr, d10, j10);
    }

    public long[] f() {
        long[] copyOf = Arrays.copyOf(this.f25379a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return or.c0.d(copyOf);
    }

    private z2(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f25379a = bufferWithData;
        this.f25380b = or.c0.l(bufferWithData);
        b(10);
    }
}
