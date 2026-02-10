package og;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends jf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f39653d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39654e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39655i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f39656o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f39657p;

    /* renamed from: q  reason: collision with root package name */
    private final int f39658q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f39659r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f39660s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f39661t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f39662u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f39663v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f39664w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f39665x;

    /* renamed from: y  reason: collision with root package name */
    private final il f39666y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f39667z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f39653d = i10;
        this.f39654e = str;
        this.f39655i = str2;
        this.f39656o = bArr;
        this.f39657p = pointArr;
        this.f39658q = i11;
        this.f39659r = klVar;
        this.f39660s = nlVar;
        this.f39661t = olVar;
        this.f39662u = rlVar;
        this.f39663v = plVar;
        this.f39664w = llVar;
        this.f39665x = hlVar;
        this.f39666y = ilVar;
        this.f39667z = jlVar;
    }

    public final int b() {
        return this.f39653d;
    }

    public final int c() {
        return this.f39658q;
    }

    public final String d() {
        return this.f39655i;
    }

    public final Point[] e() {
        return this.f39657p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f39653d);
        jf.c.s(parcel, 2, this.f39654e, false);
        jf.c.s(parcel, 3, this.f39655i, false);
        jf.c.f(parcel, 4, this.f39656o, false);
        jf.c.v(parcel, 5, this.f39657p, i10, false);
        jf.c.l(parcel, 6, this.f39658q);
        jf.c.q(parcel, 7, this.f39659r, i10, false);
        jf.c.q(parcel, 8, this.f39660s, i10, false);
        jf.c.q(parcel, 9, this.f39661t, i10, false);
        jf.c.q(parcel, 10, this.f39662u, i10, false);
        jf.c.q(parcel, 11, this.f39663v, i10, false);
        jf.c.q(parcel, 12, this.f39664w, i10, false);
        jf.c.q(parcel, 13, this.f39665x, i10, false);
        jf.c.q(parcel, 14, this.f39666y, i10, false);
        jf.c.q(parcel, 15, this.f39667z, i10, false);
        jf.c.b(parcel, a10);
    }
}
