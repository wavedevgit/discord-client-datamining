package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ra extends jf.a {
    public static final Parcelable.Creator<ra> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    public int f39631d;

    /* renamed from: e  reason: collision with root package name */
    public String f39632e;

    /* renamed from: i  reason: collision with root package name */
    public String f39633i;

    /* renamed from: o  reason: collision with root package name */
    public String f39634o;

    public ra(int i10, String str, String str2, String str3) {
        this.f39631d = i10;
        this.f39632e = str;
        this.f39633i = str2;
        this.f39634o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f39631d);
        jf.c.s(parcel, 3, this.f39632e, false);
        jf.c.s(parcel, 4, this.f39633i, false);
        jf.c.s(parcel, 5, this.f39634o, false);
        jf.c.b(parcel, a10);
    }
}
