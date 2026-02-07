package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f31093a;

    /* renamed from: b  reason: collision with root package name */
    private int f31094b;

    public o0(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31093a = bufferWithData;
        this.f31094b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        int[] iArr = this.f31093a;
        if (iArr.length < i10) {
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, iArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31093a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31094b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f31093a;
        int d10 = d();
        this.f31094b = d10 + 1;
        iArr[d10] = i10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public int[] a() {
        int[] copyOf = Arrays.copyOf(this.f31093a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
