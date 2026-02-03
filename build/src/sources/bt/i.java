package bt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f7629a;

    /* renamed from: b  reason: collision with root package name */
    private int f7630b;

    public i(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f7629a = bufferWithData;
        this.f7630b = bufferWithData.length;
        b(10);
    }

    @Override // bt.d2
    public void b(int i10) {
        byte[] bArr = this.f7629a;
        if (bArr.length < i10) {
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, bArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f7629a = copyOf;
        }
    }

    @Override // bt.d2
    public int d() {
        return this.f7630b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f7629a;
        int d10 = d();
        this.f7630b = d10 + 1;
        bArr[d10] = b10;
    }

    @Override // bt.d2
    /* renamed from: f */
    public byte[] a() {
        byte[] copyOf = Arrays.copyOf(this.f7629a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
