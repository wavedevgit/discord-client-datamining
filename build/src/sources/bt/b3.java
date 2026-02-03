package bt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b3 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private short[] f7594a;

    /* renamed from: b  reason: collision with root package name */
    private int f7595b;

    public /* synthetic */ b3(short[] sArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(sArr);
    }

    @Override // bt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return jr.f0.b(f());
    }

    @Override // bt.d2
    public void b(int i10) {
        if (jr.f0.k(this.f7594a) < i10) {
            short[] sArr = this.f7594a;
            short[] copyOf = Arrays.copyOf(sArr, kotlin.ranges.d.d(i10, jr.f0.k(sArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f7594a = jr.f0.d(copyOf);
        }
    }

    @Override // bt.d2
    public int d() {
        return this.f7595b;
    }

    public final void e(short s10) {
        d2.c(this, 0, 1, null);
        short[] sArr = this.f7594a;
        int d10 = d();
        this.f7595b = d10 + 1;
        jr.f0.p(sArr, d10, s10);
    }

    public short[] f() {
        short[] copyOf = Arrays.copyOf(this.f7594a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return jr.f0.d(copyOf);
    }

    private b3(short[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f7594a = bufferWithData;
        this.f7595b = jr.f0.k(bufferWithData);
        b(10);
    }
}
