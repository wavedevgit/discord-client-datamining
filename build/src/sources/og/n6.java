package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n6 extends jf.a {
    public static final Parcelable.Creator<n6> CREATOR = new xj();

    /* renamed from: d  reason: collision with root package name */
    public int f39502d;

    /* renamed from: e  reason: collision with root package name */
    public int f39503e;

    /* renamed from: i  reason: collision with root package name */
    public int f39504i;

    /* renamed from: o  reason: collision with root package name */
    public int f39505o;

    /* renamed from: p  reason: collision with root package name */
    public int f39506p;

    /* renamed from: q  reason: collision with root package name */
    public int f39507q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f39508r;

    /* renamed from: s  reason: collision with root package name */
    public String f39509s;

    public n6(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f39502d = i10;
        this.f39503e = i11;
        this.f39504i = i12;
        this.f39505o = i13;
        this.f39506p = i14;
        this.f39507q = i15;
        this.f39508r = z10;
        this.f39509s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f39502d);
        jf.c.l(parcel, 3, this.f39503e);
        jf.c.l(parcel, 4, this.f39504i);
        jf.c.l(parcel, 5, this.f39505o);
        jf.c.l(parcel, 6, this.f39506p);
        jf.c.l(parcel, 7, this.f39507q);
        jf.c.c(parcel, 8, this.f39508r);
        jf.c.s(parcel, 9, this.f39509s, false);
        jf.c.b(parcel, a10);
    }
}
