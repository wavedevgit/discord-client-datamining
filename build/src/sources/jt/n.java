package jt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private char[] f31037a;

    /* renamed from: b  reason: collision with root package name */
    private int f31038b;

    public n(char[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f31037a = bufferWithData;
        this.f31038b = bufferWithData.length;
        b(10);
    }

    @Override // jt.d2
    public void b(int i10) {
        char[] cArr = this.f31037a;
        if (cArr.length < i10) {
            char[] copyOf = Arrays.copyOf(cArr, kotlin.ranges.d.d(i10, cArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f31037a = copyOf;
        }
    }

    @Override // jt.d2
    public int d() {
        return this.f31038b;
    }

    public final void e(char c10) {
        d2.c(this, 0, 1, null);
        char[] cArr = this.f31037a;
        int d10 = d();
        this.f31038b = d10 + 1;
        cArr[d10] = c10;
    }

    @Override // jt.d2
    /* renamed from: f */
    public char[] a() {
        char[] copyOf = Arrays.copyOf(this.f31037a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
