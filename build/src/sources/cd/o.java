package cd;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public final int f7487a;

    /* renamed from: b  reason: collision with root package name */
    public final int f7488b;

    /* renamed from: c  reason: collision with root package name */
    public final long f7489c;

    /* renamed from: d  reason: collision with root package name */
    public final long f7490d;

    /* renamed from: e  reason: collision with root package name */
    public final long f7491e;

    /* renamed from: f  reason: collision with root package name */
    public final Format f7492f;

    /* renamed from: g  reason: collision with root package name */
    public final int f7493g;

    /* renamed from: h  reason: collision with root package name */
    public final long[] f7494h;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f7495i;

    /* renamed from: j  reason: collision with root package name */
    public final int f7496j;

    /* renamed from: k  reason: collision with root package name */
    private final p[] f7497k;

    public o(int i10, int i11, long j10, long j11, long j12, Format format, int i12, p[] pVarArr, int i13, long[] jArr, long[] jArr2) {
        this.f7487a = i10;
        this.f7488b = i11;
        this.f7489c = j10;
        this.f7490d = j11;
        this.f7491e = j12;
        this.f7492f = format;
        this.f7493g = i12;
        this.f7497k = pVarArr;
        this.f7496j = i13;
        this.f7494h = jArr;
        this.f7495i = jArr2;
    }

    public p a(int i10) {
        p[] pVarArr = this.f7497k;
        if (pVarArr == null) {
            return null;
        }
        return pVarArr[i10];
    }
}
