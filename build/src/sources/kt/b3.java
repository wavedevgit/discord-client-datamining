package kt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b3 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private short[] f35113a;

    /* renamed from: b  reason: collision with root package name */
    private int f35114b;

    public /* synthetic */ b3(short[] sArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(sArr);
    }

    @Override // kt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return rr.f0.b(f());
    }

    @Override // kt.d2
    public void b(int i10) {
        if (rr.f0.l(this.f35113a) < i10) {
            short[] sArr = this.f35113a;
            short[] copyOf = Arrays.copyOf(sArr, kotlin.ranges.d.d(i10, rr.f0.l(sArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f35113a = rr.f0.d(copyOf);
        }
    }

    @Override // kt.d2
    public int d() {
        return this.f35114b;
    }

    public final void e(short s10) {
        d2.c(this, 0, 1, null);
        short[] sArr = this.f35113a;
        int d10 = d();
        this.f35114b = d10 + 1;
        rr.f0.r(sArr, d10, s10);
    }

    public short[] f() {
        short[] copyOf = Arrays.copyOf(this.f35113a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return rr.f0.d(copyOf);
    }

    private b3(short[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f35113a = bufferWithData;
        this.f35114b = rr.f0.l(bufferWithData);
        b(10);
    }
}
