package dt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f21055a;

    /* renamed from: b  reason: collision with root package name */
    private int f21056b;

    public /* synthetic */ z2(long[] jArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(jArr);
    }

    @Override // dt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return lr.c0.b(f());
    }

    @Override // dt.d2
    public void b(int i10) {
        if (lr.c0.k(this.f21055a) < i10) {
            long[] jArr = this.f21055a;
            long[] copyOf = Arrays.copyOf(jArr, kotlin.ranges.d.d(i10, lr.c0.k(jArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f21055a = lr.c0.d(copyOf);
        }
    }

    @Override // dt.d2
    public int d() {
        return this.f21056b;
    }

    public final void e(long j10) {
        d2.c(this, 0, 1, null);
        long[] jArr = this.f21055a;
        int d10 = d();
        this.f21056b = d10 + 1;
        lr.c0.p(jArr, d10, j10);
    }

    public long[] f() {
        long[] copyOf = Arrays.copyOf(this.f21055a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return lr.c0.d(copyOf);
    }

    private z2(long[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f21055a = bufferWithData;
        this.f21056b = lr.c0.k(bufferWithData);
        b(10);
    }
}
