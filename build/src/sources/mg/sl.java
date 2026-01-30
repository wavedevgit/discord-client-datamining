package mg;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends hf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f38652d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38653e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38654i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f38655o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f38656p;

    /* renamed from: q  reason: collision with root package name */
    private final int f38657q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f38658r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f38659s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f38660t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f38661u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f38662v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f38663w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f38664x;

    /* renamed from: y  reason: collision with root package name */
    private final il f38665y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f38666z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f38652d = i10;
        this.f38653e = str;
        this.f38654i = str2;
        this.f38655o = bArr;
        this.f38656p = pointArr;
        this.f38657q = i11;
        this.f38658r = klVar;
        this.f38659s = nlVar;
        this.f38660t = olVar;
        this.f38661u = rlVar;
        this.f38662v = plVar;
        this.f38663w = llVar;
        this.f38664x = hlVar;
        this.f38665y = ilVar;
        this.f38666z = jlVar;
    }

    public final int b() {
        return this.f38652d;
    }

    public final int c() {
        return this.f38657q;
    }

    public final String d() {
        return this.f38654i;
    }

    public final Point[] e() {
        return this.f38656p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38652d);
        hf.c.s(parcel, 2, this.f38653e, false);
        hf.c.s(parcel, 3, this.f38654i, false);
        hf.c.f(parcel, 4, this.f38655o, false);
        hf.c.v(parcel, 5, this.f38656p, i10, false);
        hf.c.l(parcel, 6, this.f38657q);
        hf.c.q(parcel, 7, this.f38658r, i10, false);
        hf.c.q(parcel, 8, this.f38659s, i10, false);
        hf.c.q(parcel, 9, this.f38660t, i10, false);
        hf.c.q(parcel, 10, this.f38661u, i10, false);
        hf.c.q(parcel, 11, this.f38662v, i10, false);
        hf.c.q(parcel, 12, this.f38663w, i10, false);
        hf.c.q(parcel, 13, this.f38664x, i10, false);
        hf.c.q(parcel, 14, this.f38665y, i10, false);
        hf.c.q(parcel, 15, this.f38666z, i10, false);
        hf.c.b(parcel, a10);
    }
}
