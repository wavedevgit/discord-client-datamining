package dt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f21024a;

    /* renamed from: b  reason: collision with root package name */
    private int f21025b;

    public /* synthetic */ v2(byte[] bArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(bArr);
    }

    @Override // dt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return lr.y.b(f());
    }

    @Override // dt.d2
    public void b(int i10) {
        if (lr.y.k(this.f21024a) < i10) {
            byte[] bArr = this.f21024a;
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, lr.y.k(bArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f21024a = lr.y.d(copyOf);
        }
    }

    @Override // dt.d2
    public int d() {
        return this.f21025b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f21024a;
        int d10 = d();
        this.f21025b = d10 + 1;
        lr.y.p(bArr, d10, b10);
    }

    public byte[] f() {
        byte[] copyOf = Arrays.copyOf(this.f21024a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return lr.y.d(copyOf);
    }

    private v2(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f21024a = bufferWithData;
        this.f21025b = lr.y.k(bufferWithData);
        b(10);
    }
}
