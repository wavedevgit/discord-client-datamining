package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ra extends jf.a {
    public static final Parcelable.Creator<ra> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    public int f39632d;

    /* renamed from: e  reason: collision with root package name */
    public String f39633e;

    /* renamed from: i  reason: collision with root package name */
    public String f39634i;

    /* renamed from: o  reason: collision with root package name */
    public String f39635o;

    public ra(int i10, String str, String str2, String str3) {
        this.f39632d = i10;
        this.f39633e = str;
        this.f39634i = str2;
        this.f39635o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f39632d);
        jf.c.s(parcel, 3, this.f39633e, false);
        jf.c.s(parcel, 4, this.f39634i, false);
        jf.c.s(parcel, 5, this.f39635o, false);
        jf.c.b(parcel, a10);
    }
}
