package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g6 extends jf.a {
    public static final Parcelable.Creator<g6> CREATOR = new h7();

    /* renamed from: d  reason: collision with root package name */
    public int f44476d;

    /* renamed from: e  reason: collision with root package name */
    public int f44477e;

    /* renamed from: i  reason: collision with root package name */
    public int f44478i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f44479o;

    /* renamed from: p  reason: collision with root package name */
    public boolean f44480p;

    /* renamed from: q  reason: collision with root package name */
    public float f44481q;

    public g6(int i10, int i11, int i12, boolean z10, boolean z11, float f10) {
        this.f44476d = i10;
        this.f44477e = i11;
        this.f44478i = i12;
        this.f44479o = z10;
        this.f44480p = z11;
        this.f44481q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f44476d);
        jf.c.l(parcel, 3, this.f44477e);
        jf.c.l(parcel, 4, this.f44478i);
        jf.c.c(parcel, 5, this.f44479o);
        jf.c.c(parcel, 6, this.f44480p);
        jf.c.j(parcel, 7, this.f44481q);
        jf.c.b(parcel, a10);
    }
}
