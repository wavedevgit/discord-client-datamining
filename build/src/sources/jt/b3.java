package jt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b3 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private short[] f30973a;

    /* renamed from: b  reason: collision with root package name */
    private int f30974b;

    public /* synthetic */ b3(short[] sArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(sArr);
    }

    @Override // jt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return qr.f0.b(f());
    }

    @Override // jt.d2
    public void b(int i10) {
        if (qr.f0.l(this.f30973a) < i10) {
            short[] sArr = this.f30973a;
            short[] copyOf = Arrays.copyOf(sArr, kotlin.ranges.d.d(i10, qr.f0.l(sArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f30973a = qr.f0.d(copyOf);
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f30974b;
    }

    public final void e(short s10) {
        d2.c(this, 0, 1, null);
        short[] sArr = this.f30973a;
        int d10 = d();
        this.f30974b = d10 + 1;
        qr.f0.r(sArr, d10, s10);
    }

    public short[] f() {
        short[] copyOf = Arrays.copyOf(this.f30973a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return qr.f0.d(copyOf);
    }

    private b3(short[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f30973a = bufferWithData;
        this.f30974b = qr.f0.l(bufferWithData);
        b(10);
    }
}
