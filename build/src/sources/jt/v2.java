package jt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f31135a;

    /* renamed from: b  reason: collision with root package name */
    private int f31136b;

    public /* synthetic */ v2(byte[] bArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(bArr);
    }

    @Override // jt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return qr.y.b(f());
    }

    @Override // jt.d2
    public void b(int i10) {
        if (qr.y.l(this.f31135a) < i10) {
            byte[] bArr = this.f31135a;
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, qr.y.l(bArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31135a = qr.y.d(copyOf);
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31136b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f31135a;
        int d10 = d();
        this.f31136b = d10 + 1;
        qr.y.r(bArr, d10, b10);
    }

    public byte[] f() {
        byte[] copyOf = Arrays.copyOf(this.f31135a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return qr.y.d(copyOf);
    }

    private v2(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31135a = bufferWithData;
        this.f31136b = qr.y.l(bufferWithData);
        b(10);
    }
}
