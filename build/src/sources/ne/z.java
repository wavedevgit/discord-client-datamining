package ne;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private int f39690a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f39691b;

    public z() {
        this(32);
    }

    public void a(long j10) {
        int i10 = this.f39690a;
        long[] jArr = this.f39691b;
        if (i10 == jArr.length) {
            this.f39691b = Arrays.copyOf(jArr, i10 * 2);
        }
        long[] jArr2 = this.f39691b;
        int i11 = this.f39690a;
        this.f39690a = i11 + 1;
        jArr2[i11] = j10;
    }

    public long b(int i10) {
        if (i10 >= 0 && i10 < this.f39690a) {
            return this.f39691b[i10];
        }
        throw new IndexOutOfBoundsException("Invalid index " + i10 + ", size is " + this.f39690a);
    }

    public int c() {
        return this.f39690a;
    }

    public long[] d() {
        return Arrays.copyOf(this.f39691b, this.f39690a);
    }

    public z(int i10) {
        this.f39691b = new long[i10];
    }
}
