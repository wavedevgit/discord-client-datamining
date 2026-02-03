package bt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f7708a;

    /* renamed from: b  reason: collision with root package name */
    private int f7709b;

    public /* synthetic */ v2(byte[] bArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(bArr);
    }

    @Override // bt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return jr.y.b(f());
    }

    @Override // bt.d2
    public void b(int i10) {
        if (jr.y.k(this.f7708a) < i10) {
            byte[] bArr = this.f7708a;
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, jr.y.k(bArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f7708a = jr.y.d(copyOf);
        }
    }

    @Override // bt.d2
    public int d() {
        return this.f7709b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f7708a;
        int d10 = d();
        this.f7709b = d10 + 1;
        jr.y.p(bArr, d10, b10);
    }

    public byte[] f() {
        byte[] copyOf = Arrays.copyOf(this.f7708a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return jr.y.d(copyOf);
    }

    private v2(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f7708a = bufferWithData;
        this.f7709b = jr.y.k(bufferWithData);
        b(10);
    }
}
