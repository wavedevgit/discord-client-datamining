package cd;

import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    public final o f8202a;

    /* renamed from: b  reason: collision with root package name */
    public final int f8203b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f8204c;

    /* renamed from: d  reason: collision with root package name */
    public final int[] f8205d;

    /* renamed from: e  reason: collision with root package name */
    public final int f8206e;

    /* renamed from: f  reason: collision with root package name */
    public final long[] f8207f;

    /* renamed from: g  reason: collision with root package name */
    public final int[] f8208g;

    /* renamed from: h  reason: collision with root package name */
    public final long f8209h;

    public r(o oVar, long[] jArr, int[] iArr, int i10, long[] jArr2, int[] iArr2, long j10) {
        boolean z10;
        boolean z11;
        if (iArr.length == jArr2.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        if (jArr.length == jArr2.length) {
            z11 = true;
        } else {
            z11 = false;
        }
        oe.a.a(z11);
        oe.a.a(iArr2.length == jArr2.length);
        this.f8202a = oVar;
        this.f8204c = jArr;
        this.f8205d = iArr;
        this.f8206e = i10;
        this.f8207f = jArr2;
        this.f8208g = iArr2;
        this.f8209h = j10;
        this.f8203b = jArr.length;
        if (iArr2.length > 0) {
            int length = iArr2.length - 1;
            iArr2[length] = iArr2[length] | 536870912;
        }
    }

    public int a(long j10) {
        for (int i10 = w0.i(this.f8207f, j10, true, false); i10 >= 0; i10--) {
            if ((this.f8208g[i10] & 1) != 0) {
                return i10;
            }
        }
        return -1;
    }

    public int b(long j10) {
        for (int e10 = w0.e(this.f8207f, j10, true, false); e10 < this.f8207f.length; e10++) {
            if ((this.f8208g[e10] & 1) != 0) {
                return e10;
            }
        }
        return -1;
    }
}
