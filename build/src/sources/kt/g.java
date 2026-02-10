package kt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private boolean[] f35139a;

    /* renamed from: b  reason: collision with root package name */
    private int f35140b;

    public g(boolean[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f35139a = bufferWithData;
        this.f35140b = bufferWithData.length;
        b(10);
    }

    @Override // kt.d2
    public void b(int i10) {
        boolean[] zArr = this.f35139a;
        if (zArr.length < i10) {
            boolean[] copyOf = Arrays.copyOf(zArr, kotlin.ranges.d.d(i10, zArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f35139a = copyOf;
        }
    }

    @Override // kt.d2
    public int d() {
        return this.f35140b;
    }

    public final void e(boolean z10) {
        d2.c(this, 0, 1, null);
        boolean[] zArr = this.f35139a;
        int d10 = d();
        this.f35140b = d10 + 1;
        zArr[d10] = z10;
    }

    @Override // kt.d2
    /* renamed from: f */
    public boolean[] a() {
        boolean[] copyOf = Arrays.copyOf(this.f35139a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
