package ne;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private int f40230a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f40231b;

    public z() {
        this(32);
    }

    public void a(long j10) {
        int i10 = this.f40230a;
        long[] jArr = this.f40231b;
        if (i10 == jArr.length) {
            this.f40231b = Arrays.copyOf(jArr, i10 * 2);
        }
        long[] jArr2 = this.f40231b;
        int i11 = this.f40230a;
        this.f40230a = i11 + 1;
        jArr2[i11] = j10;
    }

    public long b(int i10) {
        if (i10 >= 0 && i10 < this.f40230a) {
            return this.f40231b[i10];
        }
        throw new IndexOutOfBoundsException("Invalid index " + i10 + ", size is " + this.f40230a);
    }

    public int c() {
        return this.f40230a;
    }

    public long[] d() {
        return Arrays.copyOf(this.f40231b, this.f40230a);
    }

    public z(int i10) {
        this.f40231b = new long[i10];
    }
}
