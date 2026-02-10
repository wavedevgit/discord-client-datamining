package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rl extends jf.a {
    public static final Parcelable.Creator<rl> CREATOR = new km();

    /* renamed from: d  reason: collision with root package name */
    private final String f39637d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39638e;

    /* renamed from: i  reason: collision with root package name */
    private final int f39639i;

    public rl(String str, String str2, int i10) {
        this.f39637d = str;
        this.f39638e = str2;
        this.f39639i = i10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39637d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f39638e, false);
        jf.c.l(parcel, 3, this.f39639i);
        jf.c.b(parcel, a10);
    }
}
