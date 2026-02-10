package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n6 extends jf.a {
    public static final Parcelable.Creator<n6> CREATOR = new xj();

    /* renamed from: d  reason: collision with root package name */
    public int f41176d;

    /* renamed from: e  reason: collision with root package name */
    public int f41177e;

    /* renamed from: i  reason: collision with root package name */
    public int f41178i;

    /* renamed from: o  reason: collision with root package name */
    public int f41179o;

    /* renamed from: p  reason: collision with root package name */
    public int f41180p;

    /* renamed from: q  reason: collision with root package name */
    public int f41181q;

    /* renamed from: r  reason: collision with root package name */
    public boolean f41182r;

    /* renamed from: s  reason: collision with root package name */
    public String f41183s;

    public n6(int i10, int i11, int i12, int i13, int i14, int i15, boolean z10, String str) {
        this.f41176d = i10;
        this.f41177e = i11;
        this.f41178i = i12;
        this.f41179o = i13;
        this.f41180p = i14;
        this.f41181q = i15;
        this.f41182r = z10;
        this.f41183s = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f41176d);
        jf.c.l(parcel, 3, this.f41177e);
        jf.c.l(parcel, 4, this.f41178i);
        jf.c.l(parcel, 5, this.f41179o);
        jf.c.l(parcel, 6, this.f41180p);
        jf.c.l(parcel, 7, this.f41181q);
        jf.c.c(parcel, 8, this.f41182r);
        jf.c.s(parcel, 9, this.f41183s, false);
        jf.c.b(parcel, a10);
    }
}
