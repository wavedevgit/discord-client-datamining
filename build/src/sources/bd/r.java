package bd;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    public final o f6387a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6388b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f6389c;

    /* renamed from: d  reason: collision with root package name */
    public final int[] f6390d;

    /* renamed from: e  reason: collision with root package name */
    public final int f6391e;

    /* renamed from: f  reason: collision with root package name */
    public final long[] f6392f;

    /* renamed from: g  reason: collision with root package name */
    public final int[] f6393g;

    /* renamed from: h  reason: collision with root package name */
    public final long f6394h;

    public r(o oVar, long[] jArr, int[] iArr, int i10, long[] jArr2, int[] iArr2, long j10) {
        boolean z10;
        boolean z11;
        if (iArr.length == jArr2.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (jArr.length == jArr2.length) {
            z11 = true;
        } else {
            z11 = false;
        }
        ne.a.a(z11);
        ne.a.a(iArr2.length == jArr2.length);
        this.f6387a = oVar;
        this.f6389c = jArr;
        this.f6390d = iArr;
        this.f6391e = i10;
        this.f6392f = jArr2;
        this.f6393g = iArr2;
        this.f6394h = j10;
        this.f6388b = jArr.length;
        if (iArr2.length > 0) {
            int length = iArr2.length - 1;
            iArr2[length] = iArr2[length] | 536870912;
        }
    }

    public int a(long j10) {
        for (int i10 = w0.i(this.f6392f, j10, true, false); i10 >= 0; i10--) {
            if ((this.f6393g[i10] & 1) != 0) {
                return i10;
            }
        }
        return -1;
    }

    public int b(long j10) {
        for (int e10 = w0.e(this.f6392f, j10, true, false); e10 < this.f6392f.length; e10++) {
            if ((this.f6393g[e10] & 1) != 0) {
                return e10;
            }
        }
        return -1;
    }
}
