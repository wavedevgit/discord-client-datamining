package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n6 extends jf.a {
    public static final Parcelable.Creator<n6> CREATOR = new xj();

    /* renamed from: d  reason: collision with root package name */
    public int f40071d;

    /* renamed from: e  reason: collision with root package name */
    public int f40072e;

    /* renamed from: i  reason: collision with root package name */
    public int f40073i;

    /* renamed from: o  reason: collision with root package name */
    public int f40074o;

    /* renamed from: p  reason: collision with root package name */
    public int f40075p;

    /* renamed from: q  reason: collision with root package name */
    public int f40076q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f40077r;

    /* renamed from: s  reason: collision with root package name */
    public String f40078s;

    public n6(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f40071d = i10;
        this.f40072e = i11;
        this.f40073i = i12;
        this.f40074o = i13;
        this.f40075p = i14;
        this.f40076q = i15;
        this.f40077r = z10;
        this.f40078s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f40071d);
        jf.c.l(parcel, 3, this.f40072e);
        jf.c.l(parcel, 4, this.f40073i);
        jf.c.l(parcel, 5, this.f40074o);
        jf.c.l(parcel, 6, this.f40075p);
        jf.c.l(parcel, 7, this.f40076q);
        jf.c.c(parcel, 8, this.f40077r);
        jf.c.s(parcel, 9, this.f40078s, false);
        jf.c.b(parcel, a10);
    }
}
