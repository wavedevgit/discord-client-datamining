package uc;

import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long[] f51279a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f51280b;

    /* renamed from: c  reason: collision with root package name */
    private final long f51281c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f51282d;

    public x(long[] jArr, long[] jArr2, long j10) {
        boolean z10;
        boolean z11;
        if (jArr.length == jArr2.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        int length = jArr2.length;
        if (length > 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f51282d = z11;
        if (z11 && jArr2[0] > 0) {
            int i10 = length + 1;
            long[] jArr3 = new long[i10];
            this.f51279a = jArr3;
            long[] jArr4 = new long[i10];
            this.f51280b = jArr4;
            System.arraycopy(jArr, 0, jArr3, 1, length);
            System.arraycopy(jArr2, 0, jArr4, 1, length);
        } else {
            this.f51279a = jArr;
            this.f51280b = jArr2;
        }
        this.f51281c = j10;
    }

    @Override // uc.z
    public z.a e(long j10) {
        if (!this.f51282d) {
            return new z.a(a0.f51179c);
        }
        int i10 = w0.i(this.f51280b, j10, true, true);
        a0 a0Var = new a0(this.f51280b[i10], this.f51279a[i10]);
        if (a0Var.f51180a != j10 && i10 != this.f51280b.length - 1) {
            int i11 = i10 + 1;
            return new z.a(a0Var, new a0(this.f51280b[i11], this.f51279a[i11]));
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        return this.f51282d;
    }

    @Override // uc.z
    public long i() {
        return this.f51281c;
    }
}
