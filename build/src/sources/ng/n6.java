package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n6 extends hf.a {
    public static final Parcelable.Creator<n6> CREATOR = new xj();

    /* renamed from: d  reason: collision with root package name */
    public int f40151d;

    /* renamed from: e  reason: collision with root package name */
    public int f40152e;

    /* renamed from: i  reason: collision with root package name */
    public int f40153i;

    /* renamed from: o  reason: collision with root package name */
    public int f40154o;

    /* renamed from: p  reason: collision with root package name */
    public int f40155p;

    /* renamed from: q  reason: collision with root package name */
    public int f40156q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f40157r;

    /* renamed from: s  reason: collision with root package name */
    public String f40158s;

    public n6(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f40151d = i10;
        this.f40152e = i11;
        this.f40153i = i12;
        this.f40154o = i13;
        this.f40155p = i14;
        this.f40156q = i15;
        this.f40157r = z10;
        this.f40158s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f40151d);
        hf.c.l(parcel, 3, this.f40152e);
        hf.c.l(parcel, 4, this.f40153i);
        hf.c.l(parcel, 5, this.f40154o);
        hf.c.l(parcel, 6, this.f40155p);
        hf.c.l(parcel, 7, this.f40156q);
        hf.c.c(parcel, 8, this.f40157r);
        hf.c.s(parcel, 9, this.f40158s, false);
        hf.c.b(parcel, a10);
    }
}
