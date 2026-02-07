package jt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f31148a;

    /* renamed from: b  reason: collision with root package name */
    private int f31149b;

    public /* synthetic */ x2(int[] iArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(iArr);
    }

    @Override // jt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return qr.a0.b(f());
    }

    @Override // jt.d2
    public void b(int i10) {
        if (qr.a0.l(this.f31148a) < i10) {
            int[] iArr = this.f31148a;
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, qr.a0.l(iArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31148a = qr.a0.d(copyOf);
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31149b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f31148a;
        int d10 = d();
        this.f31149b = d10 + 1;
        qr.a0.r(iArr, d10, i10);
    }

    public int[] f() {
        int[] copyOf = Arrays.copyOf(this.f31148a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return qr.a0.d(copyOf);
    }

    private x2(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31148a = bufferWithData;
        this.f31149b = qr.a0.l(bufferWithData);
        b(10);
    }
}
