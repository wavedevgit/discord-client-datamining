package og;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends jf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f41327d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41328e;

    /* renamed from: i  reason: collision with root package name */
    private final String f41329i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f41330o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f41331p;

    /* renamed from: q  reason: collision with root package name */
    private final int f41332q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f41333r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f41334s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f41335t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f41336u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f41337v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f41338w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f41339x;

    /* renamed from: y  reason: collision with root package name */
    private final il f41340y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f41341z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f41327d = i10;
        this.f41328e = str;
        this.f41329i = str2;
        this.f41330o = bArr;
        this.f41331p = pointArr;
        this.f41332q = i11;
        this.f41333r = klVar;
        this.f41334s = nlVar;
        this.f41335t = olVar;
        this.f41336u = rlVar;
        this.f41337v = plVar;
        this.f41338w = llVar;
        this.f41339x = hlVar;
        this.f41340y = ilVar;
        this.f41341z = jlVar;
    }

    public final int b() {
        return this.f41327d;
    }

    public final int c() {
        return this.f41332q;
    }

    public final String d() {
        return this.f41329i;
    }

    public final Point[] e() {
        return this.f41331p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f41327d);
        jf.c.s(parcel, 2, this.f41328e, false);
        jf.c.s(parcel, 3, this.f41329i, false);
        jf.c.f(parcel, 4, this.f41330o, false);
        jf.c.v(parcel, 5, this.f41331p, i10, false);
        jf.c.l(parcel, 6, this.f41332q);
        jf.c.q(parcel, 7, this.f41333r, i10, false);
        jf.c.q(parcel, 8, this.f41334s, i10, false);
        jf.c.q(parcel, 9, this.f41335t, i10, false);
        jf.c.q(parcel, 10, this.f41336u, i10, false);
        jf.c.q(parcel, 11, this.f41337v, i10, false);
        jf.c.q(parcel, 12, this.f41338w, i10, false);
        jf.c.q(parcel, 13, this.f41339x, i10, false);
        jf.c.q(parcel, 14, this.f41340y, i10, false);
        jf.c.q(parcel, 15, this.f41341z, i10, false);
        jf.c.b(parcel, a10);
    }
}
