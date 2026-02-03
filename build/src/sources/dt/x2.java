package dt;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f21037a;

    /* renamed from: b  reason: collision with root package name */
    private int f21038b;

    public /* synthetic */ x2(int[] iArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(iArr);
    }

    @Override // dt.d2
    public /* bridge */ /* synthetic */ Object a() {
        return lr.a0.b(f());
    }

    @Override // dt.d2
    public void b(int i10) {
        if (lr.a0.k(this.f21037a) < i10) {
            int[] iArr = this.f21037a;
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, lr.a0.k(iArr) * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f21037a = lr.a0.d(copyOf);
        }
    }

    @Override // dt.d2
    public int d() {
        return this.f21038b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f21037a;
        int d10 = d();
        this.f21038b = d10 + 1;
        lr.a0.p(iArr, d10, i10);
    }

    public int[] f() {
        int[] copyOf = Arrays.copyOf(this.f21037a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return lr.a0.d(copyOf);
    }

    private x2(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f21037a = bufferWithData;
        this.f21038b = lr.a0.k(bufferWithData);
        b(10);
    }
}
