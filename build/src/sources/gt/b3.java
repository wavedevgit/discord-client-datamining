package gt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b3 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private short[] f25234a;

    /* renamed from: b  reason: collision with root package name */
    private int f25235b;

    public /* synthetic */ b3(short[] sArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(sArr);
    }

    @Override // gt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return or.f0.b(f());
    }

    @Override // gt.d2
    public void b(int i10) {
        if (or.f0.l(this.f25234a) < i10) {
            short[] sArr = this.f25234a;
            short[] copyOf = Arrays.copyOf(sArr, kotlin.ranges.d.d(i10, or.f0.l(sArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f25234a = or.f0.d(copyOf);
        }
    }

    @Override // gt.d2
    public int d() {
        return this.f25235b;
    }

    public final void e(short s10) {
        d2.c(this, 0, 1, null);
        short[] sArr = this.f25234a;
        int d10 = d();
        this.f25235b = d10 + 1;
        or.f0.q(sArr, d10, s10);
    }

    public short[] f() {
        short[] copyOf = Arrays.copyOf(this.f25234a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return or.f0.d(copyOf);
    }

    private b3(short[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f25234a = bufferWithData;
        this.f25235b = or.f0.l(bufferWithData);
        b(10);
    }
}
