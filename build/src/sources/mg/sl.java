package mg;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends hf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f38429d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38430e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38431i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f38432o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f38433p;

    /* renamed from: q  reason: collision with root package name */
    private final int f38434q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f38435r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f38436s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f38437t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f38438u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f38439v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f38440w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f38441x;

    /* renamed from: y  reason: collision with root package name */
    private final il f38442y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f38443z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f38429d = i10;
        this.f38430e = str;
        this.f38431i = str2;
        this.f38432o = bArr;
        this.f38433p = pointArr;
        this.f38434q = i11;
        this.f38435r = klVar;
        this.f38436s = nlVar;
        this.f38437t = olVar;
        this.f38438u = rlVar;
        this.f38439v = plVar;
        this.f38440w = llVar;
        this.f38441x = hlVar;
        this.f38442y = ilVar;
        this.f38443z = jlVar;
    }

    public final int b() {
        return this.f38429d;
    }

    public final int c() {
        return this.f38434q;
    }

    public final String d() {
        return this.f38431i;
    }

    public final Point[] e() {
        return this.f38433p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38429d);
        hf.c.s(parcel, 2, this.f38430e, false);
        hf.c.s(parcel, 3, this.f38431i, false);
        hf.c.f(parcel, 4, this.f38432o, false);
        hf.c.v(parcel, 5, this.f38433p, i10, false);
        hf.c.l(parcel, 6, this.f38434q);
        hf.c.q(parcel, 7, this.f38435r, i10, false);
        hf.c.q(parcel, 8, this.f38436s, i10, false);
        hf.c.q(parcel, 9, this.f38437t, i10, false);
        hf.c.q(parcel, 10, this.f38438u, i10, false);
        hf.c.q(parcel, 11, this.f38439v, i10, false);
        hf.c.q(parcel, 12, this.f38440w, i10, false);
        hf.c.q(parcel, 13, this.f38441x, i10, false);
        hf.c.q(parcel, 14, this.f38442y, i10, false);
        hf.c.q(parcel, 15, this.f38443z, i10, false);
        hf.c.b(parcel, a10);
    }
}
