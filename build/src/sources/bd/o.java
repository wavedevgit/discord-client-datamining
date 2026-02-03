package bd;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public final int f6506a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6507b;

    /* renamed from: c  reason: collision with root package name */
    public final long f6508c;

    /* renamed from: d  reason: collision with root package name */
    public final long f6509d;

    /* renamed from: e  reason: collision with root package name */
    public final long f6510e;

    /* renamed from: f  reason: collision with root package name */
    public final Format f6511f;

    /* renamed from: g  reason: collision with root package name */
    public final int f6512g;

    /* renamed from: h  reason: collision with root package name */
    public final long[] f6513h;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f6514i;

    /* renamed from: j  reason: collision with root package name */
    public final int f6515j;

    /* renamed from: k  reason: collision with root package name */
    private final p[] f6516k;

    public o(int i10, int i11, long j10, long j11, long j12, Format format, int i12, p[] pVarArr, int i13, long[] jArr, long[] jArr2) {
        this.f6506a = i10;
        this.f6507b = i11;
        this.f6508c = j10;
        this.f6509d = j11;
        this.f6510e = j12;
        this.f6511f = format;
        this.f6512g = i12;
        this.f6516k = pVarArr;
        this.f6515j = i13;
        this.f6513h = jArr;
        this.f6514i = jArr2;
    }

    public p a(int i10) {
        p[] pVarArr = this.f6516k;
        if (pVarArr == null) {
            return null;
        }
        return pVarArr[i10];
    }
}
