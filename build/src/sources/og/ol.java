package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ol extends jf.a {
    public static final Parcelable.Creator<ol> CREATOR = new im();

    /* renamed from: d  reason: collision with root package name */
    private final String f40130d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40131e;

    public ol(String str, String str2) {
        this.f40130d = str;
        this.f40131e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f40130d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f40131e, false);
        jf.c.b(parcel, a10);
    }
}
