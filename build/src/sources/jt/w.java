package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private double[] f31089a;

    /* renamed from: b  reason: collision with root package name */
    private int f31090b;

    public w(double[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31089a = bufferWithData;
        this.f31090b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        double[] dArr = this.f31089a;
        if (dArr.length < i10) {
            double[] copyOf = Arrays.copyOf(dArr, kotlin.ranges.d.d(i10, dArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31089a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31090b;
    }

    public final void e(double d10) {
        d2.c(this, 0, 1, null);
        double[] dArr = this.f31089a;
        int d11 = d();
        this.f31090b = d11 + 1;
        dArr[d11] = d10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public double[] a() {
        double[] copyOf = Arrays.copyOf(this.f31089a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
