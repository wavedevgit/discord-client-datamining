package tt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private float[] f50556a;

    /* renamed from: b  reason: collision with root package name */
    private int f50557b;

    public f0(float[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f50556a = bufferWithData;
        this.f50557b = bufferWithData.length;
        b(10);
    }

    @Override // tt.d2
    public void b(int i10) {
        float[] fArr = this.f50556a;
        if (fArr.length < i10) {
            float[] copyOf = Arrays.copyOf(fArr, kotlin.ranges.d.d(i10, fArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f50556a = copyOf;
        }
    }

    @Override // tt.d2
    public int d() {
        return this.f50557b;
    }

    public final void e(float f10) {
        d2.c(this, 0, 1, null);
        float[] fArr = this.f50556a;
        int d10 = d();
        this.f50557b = d10 + 1;
        fArr[d10] = f10;
    }

    @Override // tt.d2
    /* renamed from: f */
    public float[] a() {
        float[] copyOf = Arrays.copyOf(this.f50556a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
