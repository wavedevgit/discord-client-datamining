package dt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b3 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private short[] f20910a;

    /* renamed from: b  reason: collision with root package name */
    private int f20911b;

    public /* synthetic */ b3(short[] sArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(sArr);
    }

    @Override // dt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return lr.f0.b(f());
    }

    @Override // dt.d2
    public void b(int i10) {
        if (lr.f0.k(this.f20910a) < i10) {
            short[] sArr = this.f20910a;
            short[] copyOf = Arrays.copyOf(sArr, kotlin.ranges.d.d(i10, lr.f0.k(sArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f20910a = lr.f0.d(copyOf);
        }
    }

    @Override // dt.d2
    public int d() {
        return this.f20911b;
    }

    public final void e(short s10) {
        d2.c(this, 0, 1, null);
        short[] sArr = this.f20910a;
        int d10 = d();
        this.f20911b = d10 + 1;
        lr.f0.p(sArr, d10, s10);
    }

    public short[] f() {
        short[] copyOf = Arrays.copyOf(this.f20910a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return lr.f0.d(copyOf);
    }

    private b3(short[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f20910a = bufferWithData;
        this.f20911b = lr.f0.k(bufferWithData);
        b(10);
    }
}
