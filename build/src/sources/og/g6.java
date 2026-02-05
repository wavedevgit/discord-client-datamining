package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g6 extends hf.a {
    public static final Parcelable.Creator<g6> CREATOR = new h7();

    /* renamed from: d  reason: collision with root package name */
    public int f42904d;

    /* renamed from: e  reason: collision with root package name */
    public int f42905e;

    /* renamed from: i  reason: collision with root package name */
    public int f42906i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f42907o;

    /* renamed from: p  reason: collision with root package name */
    public boolean f42908p;

    /* renamed from: q  reason: collision with root package name */
    public float f42909q;

    public g6(int i10, int i11, int i12, boolean z10, boolean z11, float f10) {
        this.f42904d = i10;
        this.f42905e = i11;
        this.f42906i = i12;
        this.f42907o = z10;
        this.f42908p = z11;
        this.f42909q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f42904d);
        hf.c.l(parcel, 3, this.f42905e);
        hf.c.l(parcel, 4, this.f42906i);
        hf.c.c(parcel, 5, this.f42907o);
        hf.c.c(parcel, 6, this.f42908p);
        hf.c.j(parcel, 7, this.f42909q);
        hf.c.b(parcel, a10);
    }
}
