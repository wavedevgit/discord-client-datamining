package kt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f35227a;

    /* renamed from: b  reason: collision with root package name */
    private int f35228b;

    public /* synthetic */ v2(byte[] bArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(bArr);
    }

    @Override // kt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return rr.y.b(f());
    }

    @Override // kt.d2
    public void b(int i10) {
        if (rr.y.l(this.f35227a) < i10) {
            byte[] bArr = this.f35227a;
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, rr.y.l(bArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f35227a = rr.y.d(copyOf);
        }
    }

    @Override // kt.d2
    public int d() {
        return this.f35228b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f35227a;
        int d10 = d();
        this.f35228b = d10 + 1;
        rr.y.r(bArr, d10, b10);
    }

    public byte[] f() {
        byte[] copyOf = Arrays.copyOf(this.f35227a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return rr.y.d(copyOf);
    }

    private v2(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f35227a = bufferWithData;
        this.f35228b = rr.y.l(bufferWithData);
        b(10);
    }
}
