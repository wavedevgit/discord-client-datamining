package bt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private char[] f7658a;

    /* renamed from: b  reason: collision with root package name */
    private int f7659b;

    public n(char[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f7658a = bufferWithData;
        this.f7659b = bufferWithData.length;
        b(10);
    }

    @Override // bt.d2
    public void b(int i10) {
        char[] cArr = this.f7658a;
        if (cArr.length < i10) {
            char[] copyOf = Arrays.copyOf(cArr, kotlin.ranges.d.d(i10, cArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f7658a = copyOf;
        }
    }

    @Override // bt.d2
    public int d() {
        return this.f7659b;
    }

    public final void e(char c10) {
        d2.c(this, 0, 1, null);
        char[] cArr = this.f7658a;
        int d10 = d();
        this.f7659b = d10 + 1;
        cArr[d10] = c10;
    }

    @Override // bt.d2
    /* renamed from: f */
    public char[] a() {
        char[] copyOf = Arrays.copyOf(this.f7658a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
