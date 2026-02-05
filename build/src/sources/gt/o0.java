package gt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private int[] f25306a;

    /* renamed from: b  reason: collision with root package name */
    private int f25307b;

    public o0(int[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f25306a = bufferWithData;
        this.f25307b = bufferWithData.length;
        b(10);
    }

    @Override // gt.d2
    public void b(int i10) {
        int[] iArr = this.f25306a;
        if (iArr.length < i10) {
            int[] copyOf = Arrays.copyOf(iArr, kotlin.ranges.d.d(i10, iArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f25306a = copyOf;
        }
    }

    @Override // gt.d2
    public int d() {
        return this.f25307b;
    }

    public final void e(int i10) {
        d2.c(this, 0, 1, null);
        int[] iArr = this.f25306a;
        int d10 = d();
        this.f25307b = d10 + 1;
        iArr[d10] = i10;
    }

    @Override // gt.d2
    /* renamed from: f */
    public int[] a() {
        int[] copyOf = Arrays.copyOf(this.f25306a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
