package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private boolean[] f31047a;

    /* renamed from: b  reason: collision with root package name */
    private int f31048b;

    public g(boolean[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31047a = bufferWithData;
        this.f31048b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        boolean[] zArr = this.f31047a;
        if (zArr.length < i10) {
            boolean[] copyOf = Arrays.copyOf(zArr, kotlin.ranges.d.d(i10, zArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31047a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31048b;
    }

    public final void e(boolean z10) {
        d2.c(this, 0, 1, null);
        boolean[] zArr = this.f31047a;
        int d10 = d();
        this.f31048b = d10 + 1;
        zArr[d10] = z10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public boolean[] a() {
        boolean[] copyOf = Arrays.copyOf(this.f31047a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
