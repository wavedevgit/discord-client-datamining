package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private int f39071a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f39072b;

    public z() {
        this(32);
    }

    public void a(long j10) {
        int i10 = this.f39071a;
        long[] jArr = this.f39072b;
        if (i10 == jArr.length) {
            this.f39072b = Arrays.copyOf(jArr, i10 * 2);
        }
        long[] jArr2 = this.f39072b;
        int i11 = this.f39071a;
        this.f39071a = i11 + 1;
        jArr2[i11] = j10;
    }

    public long b(int i10) {
        if (i10 >= 0 && i10 < this.f39071a) {
            return this.f39072b[i10];
        }
        throw new IndexOutOfBoundsException("Invalid index " + i10 + ", size is " + this.f39071a);
    }

    public int c() {
        return this.f39071a;
    }

    public long[] d() {
        return Arrays.copyOf(this.f39072b, this.f39071a);
    }

    public z(int i10) {
        this.f39072b = new long[i10];
    }
}
