package bt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private float[] f7617a;

    /* renamed from: b  reason: collision with root package name */
    private int f7618b;

    public f0(float[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f7617a = bufferWithData;
        this.f7618b = bufferWithData.length;
        b(10);
    }

    @Override // bt.d2
    public void b(int i10) {
        float[] fArr = this.f7617a;
        if (fArr.length < i10) {
            float[] copyOf = Arrays.copyOf(fArr, kotlin.ranges.d.d(i10, fArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f7617a = copyOf;
        }
    }

    @Override // bt.d2
    public int d() {
        return this.f7618b;
    }

    public final void e(float f10) {
        d2.c(this, 0, 1, null);
        float[] fArr = this.f7617a;
        int d10 = d();
        this.f7618b = d10 + 1;
        fArr[d10] = f10;
    }

    @Override // bt.d2
    /* renamed from: f */
    public float[] a() {
        float[] copyOf = Arrays.copyOf(this.f7617a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
