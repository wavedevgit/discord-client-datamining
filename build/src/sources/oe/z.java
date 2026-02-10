package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private int f40744a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f40745b;

    public z() {
        this(32);
    }

    public void a(long j10) {
        int i10 = this.f40744a;
        long[] jArr = this.f40745b;
        if (i10 == jArr.length) {
            this.f40745b = Arrays.copyOf(jArr, i10 * 2);
        }
        long[] jArr2 = this.f40745b;
        int i11 = this.f40744a;
        this.f40744a = i11 + 1;
        jArr2[i11] = j10;
    }

    public long b(int i10) {
        if (i10 >= 0 && i10 < this.f40744a) {
            return this.f40745b[i10];
        }
        throw new IndexOutOfBoundsException("Invalid index " + i10 + ", size is " + this.f40744a);
    }

    public int c() {
        return this.f40744a;
    }

    public long[] d() {
        return Arrays.copyOf(this.f40745b, this.f40744a);
    }

    public z(int i10) {
        this.f40745b = new long[i10];
    }
}
