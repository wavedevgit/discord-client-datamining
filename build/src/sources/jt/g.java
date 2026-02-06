package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private boolean[] f30999a;

    /* renamed from: b  reason: collision with root package name */
    private int f31000b;

    public g(boolean[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f30999a = bufferWithData;
        this.f31000b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        boolean[] zArr = this.f30999a;
        if (zArr.length < i10) {
            boolean[] copyOf = Arrays.copyOf(zArr, kotlin.ranges.d.d(i10, zArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f30999a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31000b;
    }

    public final void e(boolean z10) {
        d2.c(this, 0, 1, null);
        boolean[] zArr = this.f30999a;
        int d10 = d();
        this.f31000b = d10 + 1;
        zArr[d10] = z10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public boolean[] a() {
        boolean[] copyOf = Arrays.copyOf(this.f30999a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
