package tt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f50079a;

    /* renamed from: b  reason: collision with root package name */
    private int f50080b;

    public /* synthetic */ v2(byte[] bArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(bArr);
    }

    @Override // tt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return as.y.b(f());
    }

    @Override // tt.d2
    public void b(int i10) {
        if (as.y.l(this.f50079a) < i10) {
            byte[] bArr = this.f50079a;
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, as.y.l(bArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f50079a = as.y.d(copyOf);
        }
    }

    @Override // tt.d2
    public int d() {
        return this.f50080b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f50079a;
        int d10 = d();
        this.f50080b = d10 + 1;
        as.y.r(bArr, d10, b10);
    }

    public byte[] f() {
        byte[] copyOf = Arrays.copyOf(this.f50079a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return as.y.d(copyOf);
    }

    private v2(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f50079a = bufferWithData;
        this.f50080b = as.y.l(bufferWithData);
        b(10);
    }
}
