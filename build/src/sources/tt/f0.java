package tt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private float[] f49988a;

    /* renamed from: b  reason: collision with root package name */
    private int f49989b;

    public f0(float[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f49988a = bufferWithData;
        this.f49989b = bufferWithData.length;
        b(10);
    }

    @Override // tt.d2
    public void b(int i10) {
        float[] fArr = this.f49988a;
        if (fArr.length < i10) {
            float[] copyOf = Arrays.copyOf(fArr, kotlin.ranges.d.d(i10, fArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f49988a = copyOf;
        }
    }

    @Override // tt.d2
    public int d() {
        return this.f49989b;
    }

    public final void e(float f10) {
        d2.c(this, 0, 1, null);
        float[] fArr = this.f49988a;
        int d10 = d();
        this.f49989b = d10 + 1;
        fArr[d10] = f10;
    }

    @Override // tt.d2
    /* renamed from: f */
    public float[] a() {
        float[] copyOf = Arrays.copyOf(this.f49988a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
