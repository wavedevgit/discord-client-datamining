package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g6 extends jf.a {
    public static final Parcelable.Creator<g6> CREATOR = new h7();

    /* renamed from: d  reason: collision with root package name */
    public int f45808d;

    /* renamed from: e  reason: collision with root package name */
    public int f45809e;

    /* renamed from: i  reason: collision with root package name */
    public int f45810i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f45811o;

    /* renamed from: p  reason: collision with root package name */
    public boolean f45812p;

    /* renamed from: q  reason: collision with root package name */
    public float f45813q;

    public g6(int i10, int i11, int i12, boolean z10, boolean z11, float f10) {
        this.f45808d = i10;
        this.f45809e = i11;
        this.f45810i = i12;
        this.f45811o = z10;
        this.f45812p = z11;
        this.f45813q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f45808d);
        jf.c.l(parcel, 3, this.f45809e);
        jf.c.l(parcel, 4, this.f45810i);
        jf.c.c(parcel, 5, this.f45811o);
        jf.c.c(parcel, 6, this.f45812p);
        jf.c.j(parcel, 7, this.f45813q);
        jf.c.b(parcel, a10);
    }
}
