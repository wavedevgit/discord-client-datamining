package tt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b3 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private short[] f49965a;

    /* renamed from: b  reason: collision with root package name */
    private int f49966b;

    public /* synthetic */ b3(short[] sArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(sArr);
    }

    @Override // tt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return as.f0.b(f());
    }

    @Override // tt.d2
    public void b(int i10) {
        if (as.f0.l(this.f49965a) < i10) {
            short[] sArr = this.f49965a;
            short[] copyOf = Arrays.copyOf(sArr, kotlin.ranges.d.d(i10, as.f0.l(sArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f49965a = as.f0.d(copyOf);
        }
    }

    @Override // tt.d2
    public int d() {
        return this.f49966b;
    }

    public final void e(short s10) {
        d2.c(this, 0, 1, null);
        short[] sArr = this.f49965a;
        int d10 = d();
        this.f49966b = d10 + 1;
        as.f0.r(sArr, d10, s10);
    }

    public short[] f() {
        short[] copyOf = Arrays.copyOf(this.f49965a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return as.f0.d(copyOf);
    }

    private b3(short[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f49965a = bufferWithData;
        this.f49966b = as.f0.l(bufferWithData);
        b(10);
    }
}
