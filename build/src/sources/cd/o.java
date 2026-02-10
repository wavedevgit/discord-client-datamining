package cd;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public final int f8168a;

    /* renamed from: b  reason: collision with root package name */
    public final int f8169b;

    /* renamed from: c  reason: collision with root package name */
    public final long f8170c;

    /* renamed from: d  reason: collision with root package name */
    public final long f8171d;

    /* renamed from: e  reason: collision with root package name */
    public final long f8172e;

    /* renamed from: f  reason: collision with root package name */
    public final Format f8173f;

    /* renamed from: g  reason: collision with root package name */
    public final int f8174g;

    /* renamed from: h  reason: collision with root package name */
    public final long[] f8175h;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f8176i;

    /* renamed from: j  reason: collision with root package name */
    public final int f8177j;

    /* renamed from: k  reason: collision with root package name */
    private final p[] f8178k;

    public o(int i10, int i11, long j10, long j11, long j12, Format format, int i12, p[] pVarArr, int i13, long[] jArr, long[] jArr2) {
        this.f8168a = i10;
        this.f8169b = i11;
        this.f8170c = j10;
        this.f8171d = j11;
        this.f8172e = j12;
        this.f8173f = format;
        this.f8174g = i12;
        this.f8178k = pVarArr;
        this.f8177j = i13;
        this.f8175h = jArr;
        this.f8176i = jArr2;
    }

    public p a(int i10) {
        p[] pVarArr = this.f8178k;
        if (pVarArr == null) {
            return null;
        }
        return pVarArr[i10];
    }
}
