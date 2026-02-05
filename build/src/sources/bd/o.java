package bd;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public final int f6353a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6354b;

    /* renamed from: c  reason: collision with root package name */
    public final long f6355c;

    /* renamed from: d  reason: collision with root package name */
    public final long f6356d;

    /* renamed from: e  reason: collision with root package name */
    public final long f6357e;

    /* renamed from: f  reason: collision with root package name */
    public final Format f6358f;

    /* renamed from: g  reason: collision with root package name */
    public final int f6359g;

    /* renamed from: h  reason: collision with root package name */
    public final long[] f6360h;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f6361i;

    /* renamed from: j  reason: collision with root package name */
    public final int f6362j;

    /* renamed from: k  reason: collision with root package name */
    private final p[] f6363k;

    public o(int i10, int i11, long j10, long j11, long j12, Format format, int i12, p[] pVarArr, int i13, long[] jArr, long[] jArr2) {
        this.f6353a = i10;
        this.f6354b = i11;
        this.f6355c = j10;
        this.f6356d = j11;
        this.f6357e = j12;
        this.f6358f = format;
        this.f6359g = i12;
        this.f6363k = pVarArr;
        this.f6362j = i13;
        this.f6360h = jArr;
        this.f6361i = jArr2;
    }

    public p a(int i10) {
        p[] pVarArr = this.f6363k;
        if (pVarArr == null) {
            return null;
        }
        return pVarArr[i10];
    }
}
