package gt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f25361a;

    /* renamed from: b  reason: collision with root package name */
    private int f25362b;

    public /* synthetic */ x2(int[] iArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(iArr);
    }

    @Override // gt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return or.a0.b(f());
    }

    @Override // gt.d2
    public void b(int i10) {
        if (or.a0.l(this.f25361a) < i10) {
            int[] iArr = this.f25361a;
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, or.a0.l(iArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f25361a = or.a0.d(copyOf);
        }
    }

    @Override // gt.d2
    public int d() {
        return this.f25362b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f25361a;
        int d10 = d();
        this.f25362b = d10 + 1;
        or.a0.q(iArr, d10, i10);
    }

    public int[] f() {
        int[] copyOf = Arrays.copyOf(this.f25361a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return or.a0.d(copyOf);
    }

    private x2(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f25361a = bufferWithData;
        this.f25362b = or.a0.l(bufferWithData);
        b(10);
    }
}
