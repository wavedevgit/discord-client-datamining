package jt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f31118a;

    /* renamed from: b  reason: collision with root package name */
    private int f31119b;

    public /* synthetic */ z2(long[] jArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(jArr);
    }

    @Override // jt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return qr.c0.b(f());
    }

    @Override // jt.d2
    public void b(int i10) {
        if (qr.c0.l(this.f31118a) < i10) {
            long[] jArr = this.f31118a;
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, qr.c0.l(jArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31118a = qr.c0.d(copyOf);
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31119b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f31118a;
        int d10 = d();
        this.f31119b = d10 + 1;
        qr.c0.r(jArr, d10, j10);
    }

    public long[] f() {
        long[] copyOf = Arrays.copyOf(this.f31118a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return qr.c0.d(copyOf);
    }

    private z2(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31118a = bufferWithData;
        this.f31119b = qr.c0.l(bufferWithData);
        b(10);
    }
}
