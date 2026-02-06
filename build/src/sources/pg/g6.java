package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g6 extends hf.a {
    public static final Parcelable.Creator<g6> CREATOR = new h7();

    /* renamed from: d  reason: collision with root package name */
    public int f44246d;

    /* renamed from: e  reason: collision with root package name */
    public int f44247e;

    /* renamed from: i  reason: collision with root package name */
    public int f44248i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f44249o;

    /* renamed from: p  reason: collision with root package name */
    public boolean f44250p;

    /* renamed from: q  reason: collision with root package name */
    public float f44251q;

    public g6(int i10, int i11, int i12, boolean z10, boolean z11, float f10) {
        this.f44246d = i10;
        this.f44247e = i11;
        this.f44248i = i12;
        this.f44249o = z10;
        this.f44250p = z11;
        this.f44251q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f44246d);
        hf.c.l(parcel, 3, this.f44247e);
        hf.c.l(parcel, 4, this.f44248i);
        hf.c.c(parcel, 5, this.f44249o);
        hf.c.c(parcel, 6, this.f44250p);
        hf.c.j(parcel, 7, this.f44251q);
        hf.c.b(parcel, a10);
    }
}
