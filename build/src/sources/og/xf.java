package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xf extends jf.a {
    public static final Parcelable.Creator<xf> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    public String f39837d;

    /* renamed from: e  reason: collision with root package name */
    public String f39838e;

    public xf(String str, String str2) {
        this.f39837d = str;
        this.f39838e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f39837d, false);
        jf.c.s(parcel, 3, this.f39838e, false);
        jf.c.b(parcel, a10);
    }
}
