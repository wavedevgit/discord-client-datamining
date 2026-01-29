package at;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b3 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private short[] f6780a;

    /* renamed from: b  reason: collision with root package name */
    private int f6781b;

    public /* synthetic */ b3(short[] sArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(sArr);
    }

    @Override // at.d2
    public /* bridge */ /* synthetic */ Object a() {
        return ir.f0.b(f());
    }

    @Override // at.d2
    public void b(int i10) {
        if (ir.f0.k(this.f6780a) < i10) {
            short[] sArr = this.f6780a;
            short[] copyOf = Arrays.copyOf(sArr, kotlin.ranges.d.d(i10, ir.f0.k(sArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f6780a = ir.f0.d(copyOf);
        }
    }

    @Override // at.d2
    public int d() {
        return this.f6781b;
    }

    public final void e(short s10) {
        d2.c(this, 0, 1, null);
        short[] sArr = this.f6780a;
        int d10 = d();
        this.f6781b = d10 + 1;
        ir.f0.p(sArr, d10, s10);
    }

    public short[] f() {
        short[] copyOf = Arrays.copyOf(this.f6780a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return ir.f0.d(copyOf);
    }

    private b3(short[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f6780a = bufferWithData;
        this.f6781b = ir.f0.k(bufferWithData);
        b(10);
    }
}
