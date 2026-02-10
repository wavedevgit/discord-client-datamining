package tt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f50091a;

    /* renamed from: b  reason: collision with root package name */
    private int f50092b;

    public /* synthetic */ x2(int[] iArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(iArr);
    }

    @Override // tt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return as.a0.b(f());
    }

    @Override // tt.d2
    public void b(int i10) {
        if (as.a0.l(this.f50091a) < i10) {
            int[] iArr = this.f50091a;
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, as.a0.l(iArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f50091a = as.a0.d(copyOf);
        }
    }

    @Override // tt.d2
    public int d() {
        return this.f50092b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f50091a;
        int d10 = d();
        this.f50092b = d10 + 1;
        as.a0.r(iArr, d10, i10);
    }

    public int[] f() {
        int[] copyOf = Arrays.copyOf(this.f50091a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return as.a0.d(copyOf);
    }

    private x2(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f50091a = bufferWithData;
        this.f50092b = as.a0.l(bufferWithData);
        b(10);
    }
}
