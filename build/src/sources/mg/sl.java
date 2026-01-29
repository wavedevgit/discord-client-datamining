package mg;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends hf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f38636d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38637e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38638i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f38639o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f38640p;

    /* renamed from: q  reason: collision with root package name */
    private final int f38641q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f38642r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f38643s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f38644t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f38645u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f38646v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f38647w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f38648x;

    /* renamed from: y  reason: collision with root package name */
    private final il f38649y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f38650z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f38636d = i10;
        this.f38637e = str;
        this.f38638i = str2;
        this.f38639o = bArr;
        this.f38640p = pointArr;
        this.f38641q = i11;
        this.f38642r = klVar;
        this.f38643s = nlVar;
        this.f38644t = olVar;
        this.f38645u = rlVar;
        this.f38646v = plVar;
        this.f38647w = llVar;
        this.f38648x = hlVar;
        this.f38649y = ilVar;
        this.f38650z = jlVar;
    }

    public final int b() {
        return this.f38636d;
    }

    public final int c() {
        return this.f38641q;
    }

    public final String d() {
        return this.f38638i;
    }

    public final Point[] e() {
        return this.f38640p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38636d);
        hf.c.s(parcel, 2, this.f38637e, false);
        hf.c.s(parcel, 3, this.f38638i, false);
        hf.c.f(parcel, 4, this.f38639o, false);
        hf.c.v(parcel, 5, this.f38640p, i10, false);
        hf.c.l(parcel, 6, this.f38641q);
        hf.c.q(parcel, 7, this.f38642r, i10, false);
        hf.c.q(parcel, 8, this.f38643s, i10, false);
        hf.c.q(parcel, 9, this.f38644t, i10, false);
        hf.c.q(parcel, 10, this.f38645u, i10, false);
        hf.c.q(parcel, 11, this.f38646v, i10, false);
        hf.c.q(parcel, 12, this.f38647w, i10, false);
        hf.c.q(parcel, 13, this.f38648x, i10, false);
        hf.c.q(parcel, 14, this.f38649y, i10, false);
        hf.c.q(parcel, 15, this.f38650z, i10, false);
        hf.c.b(parcel, a10);
    }
}
