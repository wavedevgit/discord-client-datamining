package kt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private float[] f35136a;

    /* renamed from: b  reason: collision with root package name */
    private int f35137b;

    public f0(float[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f35136a = bufferWithData;
        this.f35137b = bufferWithData.length;
        b(10);
    }

    @Override // kt.d2
    public void b(int i10) {
        float[] fArr = this.f35136a;
        if (fArr.length < i10) {
            float[] copyOf = Arrays.copyOf(fArr, kotlin.ranges.d.d(i10, fArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f35136a = copyOf;
        }
    }

    @Override // kt.d2
    public int d() {
        return this.f35137b;
    }

    public final void e(float f10) {
        d2.c(this, 0, 1, null);
        float[] fArr = this.f35136a;
        int d10 = d();
        this.f35137b = d10 + 1;
        fArr[d10] = f10;
    }

    @Override // kt.d2
    /* renamed from: f */
    public float[] a() {
        float[] copyOf = Arrays.copyOf(this.f35136a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
