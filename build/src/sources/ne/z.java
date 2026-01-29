package ne;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private int f40312a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f40313b;

    public z() {
        this(32);
    }

    public void a(long j10) {
        int i10 = this.f40312a;
        long[] jArr = this.f40313b;
        if (i10 == jArr.length) {
            this.f40313b = Arrays.copyOf(jArr, i10 * 2);
        }
        long[] jArr2 = this.f40313b;
        int i11 = this.f40312a;
        this.f40312a = i11 + 1;
        jArr2[i11] = j10;
    }

    public long b(int i10) {
        if (i10 >= 0 && i10 < this.f40312a) {
            return this.f40313b[i10];
        }
        throw new IndexOutOfBoundsException("Invalid index " + i10 + ", size is " + this.f40312a);
    }

    public int c() {
        return this.f40312a;
    }

    public long[] d() {
        return Arrays.copyOf(this.f40313b, this.f40312a);
    }

    public z(int i10) {
        this.f40313b = new long[i10];
    }
}
