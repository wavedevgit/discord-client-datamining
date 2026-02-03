package dt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f20982a;

    /* renamed from: b  reason: collision with root package name */
    private int f20983b;

    public o0(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f20982a = bufferWithData;
        this.f20983b = bufferWithData.length;
        b(10);
    }

    @Override // dt.d2
    public void b(int i10) {
        int[] iArr = this.f20982a;
        if (iArr.length < i10) {
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, iArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f20982a = copyOf;
        }
    }

    @Override // dt.d2
    public int d() {
        return this.f20983b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f20982a;
        int d10 = d();
        this.f20983b = d10 + 1;
        iArr[d10] = i10;
    }

    @Override // dt.d2
    /* renamed from: f */
    public int[] a() {
        int[] copyOf = Arrays.copyOf(this.f20982a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
