package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g6 extends jf.a {
    public static final Parcelable.Creator<g6> CREATOR = new h7();

    /* renamed from: d  reason: collision with root package name */
    public int f45045d;

    /* renamed from: e  reason: collision with root package name */
    public int f45046e;

    /* renamed from: i  reason: collision with root package name */
    public int f45047i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f45048o;

    /* renamed from: p  reason: collision with root package name */
    public boolean f45049p;

    /* renamed from: q  reason: collision with root package name */
    public float f45050q;

    public g6(int i10, int i11, int i12, boolean z10, boolean z11, float f10) {
        this.f45045d = i10;
        this.f45046e = i11;
        this.f45047i = i12;
        this.f45048o = z10;
        this.f45049p = z11;
        this.f45050q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f45045d);
        jf.c.l(parcel, 3, this.f45046e);
        jf.c.l(parcel, 4, this.f45047i);
        jf.c.c(parcel, 5, this.f45048o);
        jf.c.c(parcel, 6, this.f45049p);
        jf.c.j(parcel, 7, this.f45050q);
        jf.c.b(parcel, a10);
    }
}
