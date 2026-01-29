package at;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f6907a;

    /* renamed from: b  reason: collision with root package name */
    private int f6908b;

    public /* synthetic */ x2(int[] iArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(iArr);
    }

    @Override // at.d2
    public /* bridge */ /* synthetic */ Object a() {
        return ir.a0.b(f());
    }

    @Override // at.d2
    public void b(int i10) {
        if (ir.a0.k(this.f6907a) < i10) {
            int[] iArr = this.f6907a;
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, ir.a0.k(iArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f6907a = ir.a0.d(copyOf);
        }
    }

    @Override // at.d2
    public int d() {
        return this.f6908b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f6907a;
        int d10 = d();
        this.f6908b = d10 + 1;
        ir.a0.p(iArr, d10, i10);
    }

    public int[] f() {
        int[] copyOf = Arrays.copyOf(this.f6907a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return ir.a0.d(copyOf);
    }

    private x2(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f6907a = bufferWithData;
        this.f6908b = ir.a0.k(bufferWithData);
        b(10);
    }
}
