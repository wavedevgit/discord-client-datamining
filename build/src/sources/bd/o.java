package bd;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public final int f7409a;

    /* renamed from: b  reason: collision with root package name */
    public final int f7410b;

    /* renamed from: c  reason: collision with root package name */
    public final long f7411c;

    /* renamed from: d  reason: collision with root package name */
    public final long f7412d;

    /* renamed from: e  reason: collision with root package name */
    public final long f7413e;

    /* renamed from: f  reason: collision with root package name */
    public final Format f7414f;

    /* renamed from: g  reason: collision with root package name */
    public final int f7415g;

    /* renamed from: h  reason: collision with root package name */
    public final long[] f7416h;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f7417i;

    /* renamed from: j  reason: collision with root package name */
    public final int f7418j;

    /* renamed from: k  reason: collision with root package name */
    private final p[] f7419k;

    public o(int i10, int i11, long j10, long j11, long j12, Format format, int i12, p[] pVarArr, int i13, long[] jArr, long[] jArr2) {
        this.f7409a = i10;
        this.f7410b = i11;
        this.f7411c = j10;
        this.f7412d = j11;
        this.f7413e = j12;
        this.f7414f = format;
        this.f7415g = i12;
        this.f7419k = pVarArr;
        this.f7418j = i13;
        this.f7416h = jArr;
        this.f7417i = jArr2;
    }

    public p a(int i10) {
        p[] pVarArr = this.f7419k;
        if (pVarArr == null) {
            return null;
        }
        return pVarArr[i10];
    }
}
