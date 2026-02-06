package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f31045a;

    /* renamed from: b  reason: collision with root package name */
    private int f31046b;

    public o0(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31045a = bufferWithData;
        this.f31046b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        int[] iArr = this.f31045a;
        if (iArr.length < i10) {
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, iArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31045a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31046b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f31045a;
        int d10 = d();
        this.f31046b = d10 + 1;
        iArr[d10] = i10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public int[] a() {
        int[] copyOf = Arrays.copyOf(this.f31045a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
