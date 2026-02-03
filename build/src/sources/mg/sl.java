package mg;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends hf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f38632d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38633e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38634i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f38635o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f38636p;

    /* renamed from: q  reason: collision with root package name */
    private final int f38637q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f38638r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f38639s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f38640t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f38641u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f38642v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f38643w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f38644x;

    /* renamed from: y  reason: collision with root package name */
    private final il f38645y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f38646z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f38632d = i10;
        this.f38633e = str;
        this.f38634i = str2;
        this.f38635o = bArr;
        this.f38636p = pointArr;
        this.f38637q = i11;
        this.f38638r = klVar;
        this.f38639s = nlVar;
        this.f38640t = olVar;
        this.f38641u = rlVar;
        this.f38642v = plVar;
        this.f38643w = llVar;
        this.f38644x = hlVar;
        this.f38645y = ilVar;
        this.f38646z = jlVar;
    }

    public final int b() {
        return this.f38632d;
    }

    public final int c() {
        return this.f38637q;
    }

    public final String d() {
        return this.f38634i;
    }

    public final Point[] e() {
        return this.f38636p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38632d);
        hf.c.s(parcel, 2, this.f38633e, false);
        hf.c.s(parcel, 3, this.f38634i, false);
        hf.c.f(parcel, 4, this.f38635o, false);
        hf.c.v(parcel, 5, this.f38636p, i10, false);
        hf.c.l(parcel, 6, this.f38637q);
        hf.c.q(parcel, 7, this.f38638r, i10, false);
        hf.c.q(parcel, 8, this.f38639s, i10, false);
        hf.c.q(parcel, 9, this.f38640t, i10, false);
        hf.c.q(parcel, 10, this.f38641u, i10, false);
        hf.c.q(parcel, 11, this.f38642v, i10, false);
        hf.c.q(parcel, 12, this.f38643w, i10, false);
        hf.c.q(parcel, 13, this.f38644x, i10, false);
        hf.c.q(parcel, 14, this.f38645y, i10, false);
        hf.c.q(parcel, 15, this.f38646z, i10, false);
        hf.c.b(parcel, a10);
    }
}
