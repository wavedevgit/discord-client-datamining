package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n6 extends hf.a {
    public static final Parcelable.Creator<n6> CREATOR = new xj();

    /* renamed from: d  reason: collision with root package name */
    public int f38481d;

    /* renamed from: e  reason: collision with root package name */
    public int f38482e;

    /* renamed from: i  reason: collision with root package name */
    public int f38483i;

    /* renamed from: o  reason: collision with root package name */
    public int f38484o;

    /* renamed from: p  reason: collision with root package name */
    public int f38485p;

    /* renamed from: q  reason: collision with root package name */
    public int f38486q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f38487r;

    /* renamed from: s  reason: collision with root package name */
    public String f38488s;

    public n6(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f38481d = i10;
        this.f38482e = i11;
        this.f38483i = i12;
        this.f38484o = i13;
        this.f38485p = i14;
        this.f38486q = i15;
        this.f38487r = z10;
        this.f38488s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38481d);
        hf.c.l(parcel, 3, this.f38482e);
        hf.c.l(parcel, 4, this.f38483i);
        hf.c.l(parcel, 5, this.f38484o);
        hf.c.l(parcel, 6, this.f38485p);
        hf.c.l(parcel, 7, this.f38486q);
        hf.c.c(parcel, 8, this.f38487r);
        hf.c.s(parcel, 9, this.f38488s, false);
        hf.c.b(parcel, a10);
    }
}
