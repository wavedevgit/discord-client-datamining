package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n6 extends jf.a {
    public static final Parcelable.Creator<n6> CREATOR = new xj();

    /* renamed from: d  reason: collision with root package name */
    public int f39503d;

    /* renamed from: e  reason: collision with root package name */
    public int f39504e;

    /* renamed from: i  reason: collision with root package name */
    public int f39505i;

    /* renamed from: o  reason: collision with root package name */
    public int f39506o;

    /* renamed from: p  reason: collision with root package name */
    public int f39507p;

    /* renamed from: q  reason: collision with root package name */
    public int f39508q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f39509r;

    /* renamed from: s  reason: collision with root package name */
    public String f39510s;

    public n6(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f39503d = i10;
        this.f39504e = i11;
        this.f39505i = i12;
        this.f39506o = i13;
        this.f39507p = i14;
        this.f39508q = i15;
        this.f39509r = z10;
        this.f39510s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f39503d);
        jf.c.l(parcel, 3, this.f39504e);
        jf.c.l(parcel, 4, this.f39505i);
        jf.c.l(parcel, 5, this.f39506o);
        jf.c.l(parcel, 6, this.f39507p);
        jf.c.l(parcel, 7, this.f39508q);
        jf.c.c(parcel, 8, this.f39509r);
        jf.c.s(parcel, 9, this.f39510s, false);
        jf.c.b(parcel, a10);
    }
}
