package ng;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sl extends hf.a {
    public static final Parcelable.Creator<sl> CREATOR = new tl();

    /* renamed from: d  reason: collision with root package name */
    private final int f40254d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40255e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40256i;

    /* renamed from: o  reason: collision with root package name */
    private final byte[] f40257o;

    /* renamed from: p  reason: collision with root package name */
    private final Point[] f40258p;

    /* renamed from: q  reason: collision with root package name */
    private final int f40259q;

    /* renamed from: r  reason: collision with root package name */
    private final kl f40260r;

    /* renamed from: s  reason: collision with root package name */
    private final nl f40261s;

    /* renamed from: t  reason: collision with root package name */
    private final ol f40262t;

    /* renamed from: u  reason: collision with root package name */
    private final rl f40263u;

    /* renamed from: v  reason: collision with root package name */
    private final pl f40264v;

    /* renamed from: w  reason: collision with root package name */
    private final ll f40265w;

    /* renamed from: x  reason: collision with root package name */
    private final hl f40266x;

    /* renamed from: y  reason: collision with root package name */
    private final il f40267y;

    /* renamed from: z  reason: collision with root package name */
    private final jl f40268z;

    public sl(int i10, String str, String str2, byte[] bArr, Point[] pointArr, int i11, kl klVar, nl nlVar, ol olVar, rl rlVar, pl plVar, ll llVar, hl hlVar, il ilVar, jl jlVar) {
        this.f40254d = i10;
        this.f40255e = str;
        this.f40256i = str2;
        this.f40257o = bArr;
        this.f40258p = pointArr;
        this.f40259q = i11;
        this.f40260r = klVar;
        this.f40261s = nlVar;
        this.f40262t = olVar;
        this.f40263u = rlVar;
        this.f40264v = plVar;
        this.f40265w = llVar;
        this.f40266x = hlVar;
        this.f40267y = ilVar;
        this.f40268z = jlVar;
    }

    public final int b() {
        return this.f40254d;
    }

    public final int c() {
        return this.f40259q;
    }

    public final String d() {
        return this.f40256i;
    }

    public final Point[] e() {
        return this.f40258p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f40254d);
        hf.c.s(parcel, 2, this.f40255e, false);
        hf.c.s(parcel, 3, this.f40256i, false);
        hf.c.f(parcel, 4, this.f40257o, false);
        hf.c.v(parcel, 5, this.f40258p, i10, false);
        hf.c.l(parcel, 6, this.f40259q);
        hf.c.q(parcel, 7, this.f40260r, i10, false);
        hf.c.q(parcel, 8, this.f40261s, i10, false);
        hf.c.q(parcel, 9, this.f40262t, i10, false);
        hf.c.q(parcel, 10, this.f40263u, i10, false);
        hf.c.q(parcel, 11, this.f40264v, i10, false);
        hf.c.q(parcel, 12, this.f40265w, i10, false);
        hf.c.q(parcel, 13, this.f40266x, i10, false);
        hf.c.q(parcel, 14, this.f40267y, i10, false);
        hf.c.q(parcel, 15, this.f40268z, i10, false);
        hf.c.b(parcel, a10);
    }
}
