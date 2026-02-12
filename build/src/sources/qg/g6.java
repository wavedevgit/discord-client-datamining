package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g6 extends jf.a {
    public static final Parcelable.Creator<g6> CREATOR = new h7();

    /* renamed from: d  reason: collision with root package name */
    public int f44477d;

    /* renamed from: e  reason: collision with root package name */
    public int f44478e;

    /* renamed from: i  reason: collision with root package name */
    public int f44479i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f44480o;

    /* renamed from: p  reason: collision with root package name */
    public boolean f44481p;

    /* renamed from: q  reason: collision with root package name */
    public float f44482q;

    public g6(int i10, int i11, int i12, boolean z10, boolean z11, float f10) {
        this.f44477d = i10;
        this.f44478e = i11;
        this.f44479i = i12;
        this.f44480o = z10;
        this.f44481p = z11;
        this.f44482q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f44477d);
        jf.c.l(parcel, 3, this.f44478e);
        jf.c.l(parcel, 4, this.f44479i);
        jf.c.c(parcel, 5, this.f44480o);
        jf.c.c(parcel, 6, this.f44481p);
        jf.c.j(parcel, 7, this.f44482q);
        jf.c.b(parcel, a10);
    }
}
