package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yg extends jf.a {
    public static final Parcelable.Creator<yg> CREATOR = new h();

    /* renamed from: d  reason: collision with root package name */
    public String f40014d;

    /* renamed from: e  reason: collision with root package name */
    public String f40015e;

    /* renamed from: i  reason: collision with root package name */
    public int f40016i;

    public yg(String str, String str2, int i10) {
        this.f40014d = str;
        this.f40015e = str2;
        this.f40016i = i10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f40014d, false);
        jf.c.s(parcel, 3, this.f40015e, false);
        jf.c.l(parcel, 4, this.f40016i);
        jf.c.b(parcel, a10);
    }
}
