package bd;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    public final o f7443a;

    /* renamed from: b  reason: collision with root package name */
    public final int f7444b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f7445c;

    /* renamed from: d  reason: collision with root package name */
    public final int[] f7446d;

    /* renamed from: e  reason: collision with root package name */
    public final int f7447e;

    /* renamed from: f  reason: collision with root package name */
    public final long[] f7448f;

    /* renamed from: g  reason: collision with root package name */
    public final int[] f7449g;

    /* renamed from: h  reason: collision with root package name */
    public final long f7450h;

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
        this.f7443a = oVar;
        this.f7445c = jArr;
        this.f7446d = iArr;
        this.f7447e = i10;
        this.f7448f = jArr2;
        this.f7449g = iArr2;
        this.f7450h = j10;
        this.f7444b = jArr.length;
        if (iArr2.length > 0) {
            int length = iArr2.length - 1;
            iArr2[length] = iArr2[length] | 536870912;
        }
    }

    public int a(long j10) {
        for (int i10 = w0.i(this.f7448f, j10, true, false); i10 >= 0; i10--) {
            if ((this.f7449g[i10] & 1) != 0) {
                return i10;
            }
        }
        return -1;
    }

    public int b(long j10) {
        for (int e10 = w0.e(this.f7448f, j10, true, false); e10 < this.f7448f.length; e10++) {
            if ((this.f7449g[e10] & 1) != 0) {
                return e10;
            }
        }
        return -1;
    }
}
