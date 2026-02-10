package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ra extends jf.a {
    public static final Parcelable.Creator<ra> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    public int f41305d;

    /* renamed from: e  reason: collision with root package name */
    public String f41306e;

    /* renamed from: i  reason: collision with root package name */
    public String f41307i;

    /* renamed from: o  reason: collision with root package name */
    public String f41308o;

    public ra(int i10, String str, String str2, String str3) {
        this.f41305d = i10;
        this.f41306e = str;
        this.f41307i = str2;
        this.f41308o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f41305d);
        jf.c.s(parcel, 3, this.f41306e, false);
        jf.c.s(parcel, 4, this.f41307i, false);
        jf.c.s(parcel, 5, this.f41308o, false);
        jf.c.b(parcel, a10);
    }
}
