package bd;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r {

    /* renamed from: a  reason: collision with root package name */
    public final o f6680a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6681b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f6682c;

    /* renamed from: d  reason: collision with root package name */
    public final int[] f6683d;

    /* renamed from: e  reason: collision with root package name */
    public final int f6684e;

    /* renamed from: f  reason: collision with root package name */
    public final long[] f6685f;

    /* renamed from: g  reason: collision with root package name */
    public final int[] f6686g;

    /* renamed from: h  reason: collision with root package name */
    public final long f6687h;

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
        this.f6680a = oVar;
        this.f6682c = jArr;
        this.f6683d = iArr;
        this.f6684e = i10;
        this.f6685f = jArr2;
        this.f6686g = iArr2;
        this.f6687h = j10;
        this.f6681b = jArr.length;
        if (iArr2.length > 0) {
            int length = iArr2.length - 1;
            iArr2[length] = iArr2[length] | 536870912;
        }
    }

    public int a(long j10) {
        for (int i10 = w0.i(this.f6685f, j10, true, false); i10 >= 0; i10--) {
            if ((this.f6686g[i10] & 1) != 0) {
                return i10;
            }
        }
        return -1;
    }

    public int b(long j10) {
        for (int e10 = w0.e(this.f6685f, j10, true, false); e10 < this.f6685f.length; e10++) {
            if ((this.f6686g[e10] & 1) != 0) {
                return e10;
            }
        }
        return -1;
    }
}
