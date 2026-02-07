package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private char[] f31085a;

    /* renamed from: b  reason: collision with root package name */
    private int f31086b;

    public n(char[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31085a = bufferWithData;
        this.f31086b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        char[] cArr = this.f31085a;
        if (cArr.length < i10) {
            char[] copyOf = Arrays.copyOf(cArr, kotlin.ranges.d.d(i10, cArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31085a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31086b;
    }

    public final void e(char c10) {
        d2.c(this, 0, 1, null);
        char[] cArr = this.f31085a;
        int d10 = d();
        this.f31086b = d10 + 1;
        cArr[d10] = c10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public char[] a() {
        char[] copyOf = Arrays.copyOf(this.f31085a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
