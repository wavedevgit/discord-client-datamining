package at;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f6925a;

    /* renamed from: b  reason: collision with root package name */
    private int f6926b;

    public /* synthetic */ z2(long[] jArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(jArr);
    }

    @Override // at.d2
    public /* bridge */ /* synthetic */ Object a() {
        return ir.c0.b(f());
    }

    @Override // at.d2
    public void b(int i10) {
        if (ir.c0.k(this.f6925a) < i10) {
            long[] jArr = this.f6925a;
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, ir.c0.k(jArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f6925a = ir.c0.d(copyOf);
        }
    }

    @Override // at.d2
    public int d() {
        return this.f6926b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f6925a;
        int d10 = d();
        this.f6926b = d10 + 1;
        ir.c0.p(jArr, d10, j10);
    }

    public long[] f() {
        long[] copyOf = Arrays.copyOf(this.f6925a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return ir.c0.d(copyOf);
    }

    private z2(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f6925a = bufferWithData;
        this.f6926b = ir.c0.k(bufferWithData);
        b(10);
    }
}
