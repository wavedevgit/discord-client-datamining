package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class pl extends jf.a {
    public static final Parcelable.Creator<pl> CREATOR = new jm();

    /* renamed from: d  reason: collision with root package name */
    private final String f41260d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41261e;

    public pl(String str, String str2) {
        this.f41260d = str;
        this.f41261e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f41260d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f41261e, false);
        jf.c.b(parcel, a10);
    }
}
