package kt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f35240a;

    /* renamed from: b  reason: collision with root package name */
    private int f35241b;

    public /* synthetic */ x2(int[] iArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(iArr);
    }

    @Override // kt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return rr.a0.b(f());
    }

    @Override // kt.d2
    public void b(int i10) {
        if (rr.a0.l(this.f35240a) < i10) {
            int[] iArr = this.f35240a;
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, rr.a0.l(iArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f35240a = rr.a0.d(copyOf);
        }
    }

    @Override // kt.d2
    public int d() {
        return this.f35241b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f35240a;
        int d10 = d();
        this.f35241b = d10 + 1;
        rr.a0.r(iArr, d10, i10);
    }

    public int[] f() {
        int[] copyOf = Arrays.copyOf(this.f35240a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return rr.a0.d(copyOf);
    }

    private x2(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f35240a = bufferWithData;
        this.f35241b = rr.a0.l(bufferWithData);
        b(10);
    }
}
