package oe;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private int f39070a;

    /* renamed from: b  reason: collision with root package name */
    private long[] f39071b;

    public z() {
        this(32);
    }

    public void a(long j10) {
        int i10 = this.f39070a;
        long[] jArr = this.f39071b;
        if (i10 == jArr.length) {
            this.f39071b = Arrays.copyOf(jArr, i10 * 2);
        }
        long[] jArr2 = this.f39071b;
        int i11 = this.f39070a;
        this.f39070a = i11 + 1;
        jArr2[i11] = j10;
    }

    public long b(int i10) {
        if (i10 >= 0 && i10 < this.f39070a) {
            return this.f39071b[i10];
        }
        throw new IndexOutOfBoundsException("Invalid index " + i10 + ", size is " + this.f39070a);
    }

    public int c() {
        return this.f39070a;
    }

    public long[] d() {
        return Arrays.copyOf(this.f39071b, this.f39070a);
    }

    public z(int i10) {
        this.f39071b = new long[i10];
    }
}
