package tt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f50000a;

    /* renamed from: b  reason: collision with root package name */
    private int f50001b;

    public i(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f50000a = bufferWithData;
        this.f50001b = bufferWithData.length;
        b(10);
    }

    @Override // tt.d2
    public void b(int i10) {
        byte[] bArr = this.f50000a;
        if (bArr.length < i10) {
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, bArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f50000a = copyOf;
        }
    }

    @Override // tt.d2
    public int d() {
        return this.f50001b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f50000a;
        int d10 = d();
        this.f50001b = d10 + 1;
        bArr[d10] = b10;
    }

    @Override // tt.d2
    /* renamed from: f */
    public byte[] a() {
        byte[] copyOf = Arrays.copyOf(this.f50000a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
