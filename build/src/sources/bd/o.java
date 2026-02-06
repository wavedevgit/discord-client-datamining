package bd;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public final int f6646a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6647b;

    /* renamed from: c  reason: collision with root package name */
    public final long f6648c;

    /* renamed from: d  reason: collision with root package name */
    public final long f6649d;

    /* renamed from: e  reason: collision with root package name */
    public final long f6650e;

    /* renamed from: f  reason: collision with root package name */
    public final Format f6651f;

    /* renamed from: g  reason: collision with root package name */
    public final int f6652g;

    /* renamed from: h  reason: collision with root package name */
    public final long[] f6653h;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f6654i;

    /* renamed from: j  reason: collision with root package name */
    public final int f6655j;

    /* renamed from: k  reason: collision with root package name */
    private final p[] f6656k;

    public o(int i10, int i11, long j10, long j11, long j12, Format format, int i12, p[] pVarArr, int i13, long[] jArr, long[] jArr2) {
        this.f6646a = i10;
        this.f6647b = i11;
        this.f6648c = j10;
        this.f6649d = j11;
        this.f6650e = j12;
        this.f6651f = format;
        this.f6652g = i12;
        this.f6656k = pVarArr;
        this.f6655j = i13;
        this.f6653h = jArr;
        this.f6654i = jArr2;
    }

    public p a(int i10) {
        p[] pVarArr = this.f6656k;
        if (pVarArr == null) {
            return null;
        }
        return pVarArr[i10];
    }
}
