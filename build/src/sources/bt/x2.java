package bt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f7721a;

    /* renamed from: b  reason: collision with root package name */
    private int f7722b;

    public /* synthetic */ x2(int[] iArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(iArr);
    }

    @Override // bt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return jr.a0.b(f());
    }

    @Override // bt.d2
    public void b(int i10) {
        if (jr.a0.k(this.f7721a) < i10) {
            int[] iArr = this.f7721a;
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, jr.a0.k(iArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f7721a = jr.a0.d(copyOf);
        }
    }

    @Override // bt.d2
    public int d() {
        return this.f7722b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f7721a;
        int d10 = d();
        this.f7722b = d10 + 1;
        jr.a0.p(iArr, d10, i10);
    }

    public int[] f() {
        int[] copyOf = Arrays.copyOf(this.f7721a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return jr.a0.d(copyOf);
    }

    private x2(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f7721a = bufferWithData;
        this.f7722b = jr.a0.k(bufferWithData);
        b(10);
    }
}
