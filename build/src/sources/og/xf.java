package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xf extends jf.a {
    public static final Parcelable.Creator<xf> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    public String f40405d;

    /* renamed from: e  reason: collision with root package name */
    public String f40406e;

    public xf(String str, String str2) {
        this.f40405d = str;
        this.f40406e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f40405d, false);
        jf.c.s(parcel, 3, this.f40406e, false);
        jf.c.b(parcel, a10);
    }
}
