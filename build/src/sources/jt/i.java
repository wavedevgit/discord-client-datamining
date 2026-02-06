package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f31008a;

    /* renamed from: b  reason: collision with root package name */
    private int f31009b;

    public i(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31008a = bufferWithData;
        this.f31009b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        byte[] bArr = this.f31008a;
        if (bArr.length < i10) {
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, bArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31008a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31009b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f31008a;
        int d10 = d();
        this.f31009b = d10 + 1;
        bArr[d10] = b10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public byte[] a() {
        byte[] copyOf = Arrays.copyOf(this.f31008a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
