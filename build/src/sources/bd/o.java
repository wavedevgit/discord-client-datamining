package bd;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public final int f6460a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6461b;

    /* renamed from: c  reason: collision with root package name */
    public final long f6462c;

    /* renamed from: d  reason: collision with root package name */
    public final long f6463d;

    /* renamed from: e  reason: collision with root package name */
    public final long f6464e;

    /* renamed from: f  reason: collision with root package name */
    public final Format f6465f;

    /* renamed from: g  reason: collision with root package name */
    public final int f6466g;

    /* renamed from: h  reason: collision with root package name */
    public final long[] f6467h;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f6468i;

    /* renamed from: j  reason: collision with root package name */
    public final int f6469j;

    /* renamed from: k  reason: collision with root package name */
    private final p[] f6470k;

    public o(int i10, int i11, long j10, long j11, long j12, Format format, int i12, p[] pVarArr, int i13, long[] jArr, long[] jArr2) {
        this.f6460a = i10;
        this.f6461b = i11;
        this.f6462c = j10;
        this.f6463d = j11;
        this.f6464e = j12;
        this.f6465f = format;
        this.f6466g = i12;
        this.f6470k = pVarArr;
        this.f6469j = i13;
        this.f6467h = jArr;
        this.f6468i = jArr2;
    }

    public p a(int i10) {
        p[] pVarArr = this.f6470k;
        if (pVarArr == null) {
            return null;
        }
        return pVarArr[i10];
    }
}
