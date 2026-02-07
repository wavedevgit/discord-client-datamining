package ne;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private int f39093a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f39094b;

    public z() {
        this(32);
    }

    public void a(long j10) {
        int i10 = this.f39093a;
        long[] jArr = this.f39094b;
        if (i10 == jArr.length) {
            this.f39094b = Arrays.copyOf(jArr, i10 * 2);
        }
        long[] jArr2 = this.f39094b;
        int i11 = this.f39093a;
        this.f39093a = i11 + 1;
        jArr2[i11] = j10;
    }

    public long b(int i10) {
        if (i10 >= 0 && i10 < this.f39093a) {
            return this.f39094b[i10];
        }
        throw new IndexOutOfBoundsException("Invalid index " + i10 + ", size is " + this.f39093a);
    }

    public int c() {
        return this.f39093a;
    }

    public long[] d() {
        return Arrays.copyOf(this.f39094b, this.f39093a);
    }

    public z(int i10) {
        this.f39094b = new long[i10];
    }
}
