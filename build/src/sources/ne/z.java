package ne;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private int f40328a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f40329b;

    public z() {
        this(32);
    }

    public void a(long j10) {
        int i10 = this.f40328a;
        long[] jArr = this.f40329b;
        if (i10 == jArr.length) {
            this.f40329b = Arrays.copyOf(jArr, i10 * 2);
        }
        long[] jArr2 = this.f40329b;
        int i11 = this.f40328a;
        this.f40328a = i11 + 1;
        jArr2[i11] = j10;
    }

    public long b(int i10) {
        if (i10 >= 0 && i10 < this.f40328a) {
            return this.f40329b[i10];
        }
        throw new IndexOutOfBoundsException("Invalid index " + i10 + ", size is " + this.f40328a);
    }

    public int c() {
        return this.f40328a;
    }

    public long[] d() {
        return Arrays.copyOf(this.f40329b, this.f40328a);
    }

    public z(int i10) {
        this.f40329b = new long[i10];
    }
}
