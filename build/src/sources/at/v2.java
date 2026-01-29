package at;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f6894a;

    /* renamed from: b  reason: collision with root package name */
    private int f6895b;

    public /* synthetic */ v2(byte[] bArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(bArr);
    }

    @Override // at.d2
    public /* bridge */ /* synthetic */ Object a() {
        return ir.y.b(f());
    }

    @Override // at.d2
    public void b(int i10) {
        if (ir.y.k(this.f6894a) < i10) {
            byte[] bArr = this.f6894a;
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, ir.y.k(bArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f6894a = ir.y.d(copyOf);
        }
    }

    @Override // at.d2
    public int d() {
        return this.f6895b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f6894a;
        int d10 = d();
        this.f6895b = d10 + 1;
        ir.y.p(bArr, d10, b10);
    }

    public byte[] f() {
        byte[] copyOf = Arrays.copyOf(this.f6894a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return ir.y.d(copyOf);
    }

    private v2(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f6894a = bufferWithData;
        this.f6895b = ir.y.k(bufferWithData);
        b(10);
    }
}
