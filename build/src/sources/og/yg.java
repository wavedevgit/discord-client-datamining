package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yg extends jf.a {
    public static final Parcelable.Creator<yg> CREATOR = new h();

    /* renamed from: d  reason: collision with root package name */
    public String f41688d;

    /* renamed from: e  reason: collision with root package name */
    public String f41689e;

    /* renamed from: i  reason: collision with root package name */
    public int f41690i;

    public yg(String str, String str2, int i10) {
        this.f41688d = str;
        this.f41689e = str2;
        this.f41690i = i10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f41688d, false);
        jf.c.s(parcel, 3, this.f41689e, false);
        jf.c.l(parcel, 4, this.f41690i);
        jf.c.b(parcel, a10);
    }
}
