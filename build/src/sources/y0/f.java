package y0;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private int f53853a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f53854b = i.b(16);

    /* renamed from: c  reason: collision with root package name */
    private int[] f53855c = new int[16];

    /* renamed from: d  reason: collision with root package name */
    private int[] f53856d;

    /* renamed from: e  reason: collision with root package name */
    private int f53857e;

    public f() {
        int[] iArr = new int[16];
        int i10 = 0;
        while (i10 < 16) {
            int i11 = i10 + 1;
            iArr[i10] = i11;
            i10 = i11;
        }
        this.f53856d = iArr;
    }

    private final int b() {
        int length = this.f53856d.length;
        if (this.f53857e >= length) {
            int i10 = length * 2;
            int[] iArr = new int[i10];
            int i11 = 0;
            while (i11 < i10) {
                int i12 = i11 + 1;
                iArr[i11] = i12;
                i11 = i12;
            }
            kotlin.collections.i.n(this.f53856d, iArr, 0, 0, 0, 14, null);
            this.f53856d = iArr;
        }
        int i13 = this.f53857e;
        this.f53857e = this.f53856d[i13];
        return i13;
    }

    private final void c(int i10) {
        int length = this.f53854b.length;
        if (i10 <= length) {
            return;
        }
        int i11 = length * 2;
        long[] b10 = i.b(i11);
        int[] iArr = new int[i11];
        kotlin.collections.i.o(this.f53854b, b10, 0, 0, 0, 12, null);
        kotlin.collections.i.n(this.f53855c, iArr, 0, 0, 0, 14, null);
        this.f53854b = b10;
        this.f53855c = iArr;
    }

    private final void e(int i10) {
        long[] jArr = this.f53854b;
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
        long[] jArr = this.f53854b;
        int[] iArr = this.f53855c;
        int[] iArr2 = this.f53856d;
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
        c(this.f53853a + 1);
        int i10 = this.f53853a;
        this.f53853a = i10 + 1;
        int b10 = b();
        this.f53854b[i10] = j10;
        this.f53855c[i10] = b10;
        this.f53856d[b10] = i10;
        e(i10);
        return b10;
    }

    public final long d(long j10) {
        if (this.f53853a > 0) {
            return this.f53854b[0];
        }
        return j10;
    }
}
