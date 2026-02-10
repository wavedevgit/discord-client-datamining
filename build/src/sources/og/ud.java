package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ud extends jf.a {
    public static final Parcelable.Creator<ud> CREATOR = new e();

    /* renamed from: d  reason: collision with root package name */
    public int f41393d;

    /* renamed from: e  reason: collision with root package name */
    public String f41394e;

    public ud(int i10, String str) {
        this.f41393d = i10;
        this.f41394e = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f41393d);
        jf.c.s(parcel, 3, this.f41394e, false);
        jf.c.b(parcel, a10);
    }
}
