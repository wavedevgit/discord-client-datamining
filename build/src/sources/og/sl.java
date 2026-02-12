package og;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends jf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f39654d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39655e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39656i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f39657o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f39658p;

    /* renamed from: q  reason: collision with root package name */
    private final int f39659q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f39660r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f39661s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f39662t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f39663u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f39664v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f39665w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f39666x;

    /* renamed from: y  reason: collision with root package name */
    private final il f39667y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f39668z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f39654d = i10;
        this.f39655e = str;
        this.f39656i = str2;
        this.f39657o = bArr;
        this.f39658p = pointArr;
        this.f39659q = i11;
        this.f39660r = klVar;
        this.f39661s = nlVar;
        this.f39662t = olVar;
        this.f39663u = rlVar;
        this.f39664v = plVar;
        this.f39665w = llVar;
        this.f39666x = hlVar;
        this.f39667y = ilVar;
        this.f39668z = jlVar;
    }

    public final int b() {
        return this.f39654d;
    }

    public final int c() {
        return this.f39659q;
    }

    public final String d() {
        return this.f39656i;
    }

    public final Point[] e() {
        return this.f39658p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f39654d);
        jf.c.s(parcel, 2, this.f39655e, false);
        jf.c.s(parcel, 3, this.f39656i, false);
        jf.c.f(parcel, 4, this.f39657o, false);
        jf.c.v(parcel, 5, this.f39658p, i10, false);
        jf.c.l(parcel, 6, this.f39659q);
        jf.c.q(parcel, 7, this.f39660r, i10, false);
        jf.c.q(parcel, 8, this.f39661s, i10, false);
        jf.c.q(parcel, 9, this.f39662t, i10, false);
        jf.c.q(parcel, 10, this.f39663u, i10, false);
        jf.c.q(parcel, 11, this.f39664v, i10, false);
        jf.c.q(parcel, 12, this.f39665w, i10, false);
        jf.c.q(parcel, 13, this.f39666x, i10, false);
        jf.c.q(parcel, 14, this.f39667y, i10, false);
        jf.c.q(parcel, 15, this.f39668z, i10, false);
        jf.c.b(parcel, a10);
    }
}
