package y0;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private int f55864a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f55865b = i.b(16);

    /* renamed from: c  reason: collision with root package name */
    private int[] f55866c = new int[16];

    /* renamed from: d  reason: collision with root package name */
    private int[] f55867d;

    /* renamed from: e  reason: collision with root package name */
    private int f55868e;

    public f() {
        int[] iArr = new int[16];
        int i10 = 0;
        while (i10 < 16) {
            int i11 = i10 + 1;
            iArr[i10] = i11;
            i10 = i11;
        }
        this.f55867d = iArr;
    }

    private final int b() {
        int length = this.f55867d.length;
        if (this.f55868e >= length) {
            int i10 = length * 2;
            int[] iArr = new int[i10];
            int i11 = 0;
            while (i11 < i10) {
                int i12 = i11 + 1;
                iArr[i11] = i12;
                i11 = i12;
            }
            kotlin.collections.i.n(this.f55867d, iArr, 0, 0, 0, 14, null);
            this.f55867d = iArr;
        }
        int i13 = this.f55868e;
        this.f55868e = this.f55867d[i13];
        return i13;
    }

    private final void c(int i10) {
        int length = this.f55865b.length;
        if (i10 <= length) {
            return;
        }
        int i11 = length * 2;
        long[] b10 = i.b(i11);
        int[] iArr = new int[i11];
        kotlin.collections.i.o(this.f55865b, b10, 0, 0, 0, 12, null);
        kotlin.collections.i.n(this.f55866c, iArr, 0, 0, 0, 14, null);
        this.f55865b = b10;
        this.f55866c = iArr;
    }

    private final void e(int i10) {
        long[] jArr = this.f55865b;
        long j10 = jArr[i10];
        while (i10 > 0) {
            int i11 = ((i10 + 1) >> 1) - 1;
            if (Intrinsics.compare(jArr[i11], j10) > 0) {
                f(i11, i10);
                i10 = i11;
            } else {
                return;
            }
        }
    }

    private final void f(int i10, int i11) {
        long[] jArr = this.f55865b;
        int[] iArr = this.f55866c;
        int[] iArr2 = this.f55867d;
        long j10 = jArr[i10];
        jArr[i10] = jArr[i11];
        jArr[i11] = j10;
        int i12 = iArr[i10];
        int i13 = iArr[i11];
        iArr[i10] = i13;
        iArr[i11] = i12;
        iArr2[i13] = i10;
        iArr2[i12] = i11;
    }

    public final int a(long j10) {
        c(this.f55864a + 1);
        int i10 = this.f55864a;
        this.f55864a = i10 + 1;
        int b10 = b();
        this.f55865b[i10] = j10;
        this.f55866c[i10] = b10;
        this.f55867d[b10] = i10;
        e(i10);
        return b10;
    }

    public final long d(long j10) {
        if (this.f55864a > 0) {
            return this.f55865b[0];
        }
        return j10;
    }
}
