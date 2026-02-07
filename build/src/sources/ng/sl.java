package ng;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends hf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f40302d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40303e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40304i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f40305o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f40306p;

    /* renamed from: q  reason: collision with root package name */
    private final int f40307q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f40308r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f40309s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f40310t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f40311u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f40312v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f40313w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f40314x;

    /* renamed from: y  reason: collision with root package name */
    private final il f40315y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f40316z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f40302d = i10;
        this.f40303e = str;
        this.f40304i = str2;
        this.f40305o = bArr;
        this.f40306p = pointArr;
        this.f40307q = i11;
        this.f40308r = klVar;
        this.f40309s = nlVar;
        this.f40310t = olVar;
        this.f40311u = rlVar;
        this.f40312v = plVar;
        this.f40313w = llVar;
        this.f40314x = hlVar;
        this.f40315y = ilVar;
        this.f40316z = jlVar;
    }

    public final int b() {
        return this.f40302d;
    }

    public final int c() {
        return this.f40307q;
    }

    public final String d() {
        return this.f40304i;
    }

    public final Point[] e() {
        return this.f40306p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f40302d);
        hf.c.s(parcel, 2, this.f40303e, false);
        hf.c.s(parcel, 3, this.f40304i, false);
        hf.c.f(parcel, 4, this.f40305o, false);
        hf.c.v(parcel, 5, this.f40306p, i10, false);
        hf.c.l(parcel, 6, this.f40307q);
        hf.c.q(parcel, 7, this.f40308r, i10, false);
        hf.c.q(parcel, 8, this.f40309s, i10, false);
        hf.c.q(parcel, 9, this.f40310t, i10, false);
        hf.c.q(parcel, 10, this.f40311u, i10, false);
        hf.c.q(parcel, 11, this.f40312v, i10, false);
        hf.c.q(parcel, 12, this.f40313w, i10, false);
        hf.c.q(parcel, 13, this.f40314x, i10, false);
        hf.c.q(parcel, 14, this.f40315y, i10, false);
        hf.c.q(parcel, 15, this.f40316z, i10, false);
        hf.c.b(parcel, a10);
    }
}
