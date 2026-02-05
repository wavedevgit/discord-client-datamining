package mg;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends hf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f38091d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38092e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38093i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f38094o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f38095p;

    /* renamed from: q  reason: collision with root package name */
    private final int f38096q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f38097r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f38098s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f38099t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f38100u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f38101v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f38102w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f38103x;

    /* renamed from: y  reason: collision with root package name */
    private final il f38104y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f38105z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f38091d = i10;
        this.f38092e = str;
        this.f38093i = str2;
        this.f38094o = bArr;
        this.f38095p = pointArr;
        this.f38096q = i11;
        this.f38097r = klVar;
        this.f38098s = nlVar;
        this.f38099t = olVar;
        this.f38100u = rlVar;
        this.f38101v = plVar;
        this.f38102w = llVar;
        this.f38103x = hlVar;
        this.f38104y = ilVar;
        this.f38105z = jlVar;
    }

    public final int b() {
        return this.f38091d;
    }

    public final int c() {
        return this.f38096q;
    }

    public final String d() {
        return this.f38093i;
    }

    public final Point[] e() {
        return this.f38095p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38091d);
        hf.c.s(parcel, 2, this.f38092e, false);
        hf.c.s(parcel, 3, this.f38093i, false);
        hf.c.f(parcel, 4, this.f38094o, false);
        hf.c.v(parcel, 5, this.f38095p, i10, false);
        hf.c.l(parcel, 6, this.f38096q);
        hf.c.q(parcel, 7, this.f38097r, i10, false);
        hf.c.q(parcel, 8, this.f38098s, i10, false);
        hf.c.q(parcel, 9, this.f38099t, i10, false);
        hf.c.q(parcel, 10, this.f38100u, i10, false);
        hf.c.q(parcel, 11, this.f38101v, i10, false);
        hf.c.q(parcel, 12, this.f38102w, i10, false);
        hf.c.q(parcel, 13, this.f38103x, i10, false);
        hf.c.q(parcel, 14, this.f38104y, i10, false);
        hf.c.q(parcel, 15, this.f38105z, i10, false);
        hf.c.b(parcel, a10);
    }
}
