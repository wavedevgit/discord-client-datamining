package tt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private boolean[] f50559a;

    /* renamed from: b  reason: collision with root package name */
    private int f50560b;

    public g(boolean[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f50559a = bufferWithData;
        this.f50560b = bufferWithData.length;
        b(10);
    }

    @Override // tt.d2
    public void b(int i10) {
        boolean[] zArr = this.f50559a;
        if (zArr.length < i10) {
            boolean[] copyOf = Arrays.copyOf(zArr, kotlin.ranges.d.d(i10, zArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f50559a = copyOf;
        }
    }

    @Override // tt.d2
    public int d() {
        return this.f50560b;
    }

    public final void e(boolean z10) {
        d2.c(this, 0, 1, null);
        boolean[] zArr = this.f50559a;
        int d10 = d();
        this.f50560b = d10 + 1;
        zArr[d10] = z10;
    }

    @Override // tt.d2
    /* renamed from: f */
    public boolean[] a() {
        boolean[] copyOf = Arrays.copyOf(this.f50559a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
