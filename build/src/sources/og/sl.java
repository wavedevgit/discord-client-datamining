package og;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends jf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f40222d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40223e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40224i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f40225o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f40226p;

    /* renamed from: q  reason: collision with root package name */
    private final int f40227q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f40228r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f40229s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f40230t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f40231u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f40232v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f40233w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f40234x;

    /* renamed from: y  reason: collision with root package name */
    private final il f40235y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f40236z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f40222d = i10;
        this.f40223e = str;
        this.f40224i = str2;
        this.f40225o = bArr;
        this.f40226p = pointArr;
        this.f40227q = i11;
        this.f40228r = klVar;
        this.f40229s = nlVar;
        this.f40230t = olVar;
        this.f40231u = rlVar;
        this.f40232v = plVar;
        this.f40233w = llVar;
        this.f40234x = hlVar;
        this.f40235y = ilVar;
        this.f40236z = jlVar;
    }

    public final int b() {
        return this.f40222d;
    }

    public final int c() {
        return this.f40227q;
    }

    public final String d() {
        return this.f40224i;
    }

    public final Point[] e() {
        return this.f40226p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f40222d);
        jf.c.s(parcel, 2, this.f40223e, false);
        jf.c.s(parcel, 3, this.f40224i, false);
        jf.c.f(parcel, 4, this.f40225o, false);
        jf.c.v(parcel, 5, this.f40226p, i10, false);
        jf.c.l(parcel, 6, this.f40227q);
        jf.c.q(parcel, 7, this.f40228r, i10, false);
        jf.c.q(parcel, 8, this.f40229s, i10, false);
        jf.c.q(parcel, 9, this.f40230t, i10, false);
        jf.c.q(parcel, 10, this.f40231u, i10, false);
        jf.c.q(parcel, 11, this.f40232v, i10, false);
        jf.c.q(parcel, 12, this.f40233w, i10, false);
        jf.c.q(parcel, 13, this.f40234x, i10, false);
        jf.c.q(parcel, 14, this.f40235y, i10, false);
        jf.c.q(parcel, 15, this.f40236z, i10, false);
        jf.c.b(parcel, a10);
    }
}
