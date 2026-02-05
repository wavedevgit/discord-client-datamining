package gt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private char[] f25298a;

    /* renamed from: b  reason: collision with root package name */
    private int f25299b;

    public n(char[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f25298a = bufferWithData;
        this.f25299b = bufferWithData.length;
        b(10);
    }

    @Override // gt.d2
    public void b(int i10) {
        char[] cArr = this.f25298a;
        if (cArr.length < i10) {
            char[] copyOf = Arrays.copyOf(cArr, kotlin.ranges.d.d(i10, cArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f25298a = copyOf;
        }
    }

    @Override // gt.d2
    public int d() {
        return this.f25299b;
    }

    public final void e(char c10) {
        d2.c(this, 0, 1, null);
        char[] cArr = this.f25298a;
        int d10 = d();
        this.f25299b = d10 + 1;
        cArr[d10] = c10;
    }

    @Override // gt.d2
    /* renamed from: f */
    public char[] a() {
        char[] copyOf = Arrays.copyOf(this.f25298a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
