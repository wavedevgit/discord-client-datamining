package gt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f25348a;

    /* renamed from: b  reason: collision with root package name */
    private int f25349b;

    public /* synthetic */ v2(byte[] bArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(bArr);
    }

    @Override // gt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return or.y.b(f());
    }

    @Override // gt.d2
    public void b(int i10) {
        if (or.y.l(this.f25348a) < i10) {
            byte[] bArr = this.f25348a;
            byte[] copyOf = Arrays.copyOf(bArr, kotlin.ranges.d.d(i10, or.y.l(bArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f25348a = or.y.d(copyOf);
        }
    }

    @Override // gt.d2
    public int d() {
        return this.f25349b;
    }

    public final void e(byte b10) {
        d2.c(this, 0, 1, null);
        byte[] bArr = this.f25348a;
        int d10 = d();
        this.f25349b = d10 + 1;
        or.y.q(bArr, d10, b10);
    }

    public byte[] f() {
        byte[] copyOf = Arrays.copyOf(this.f25348a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return or.y.d(copyOf);
    }

    private v2(byte[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f25348a = bufferWithData;
        this.f25349b = or.y.l(bufferWithData);
        b(10);
    }
}
