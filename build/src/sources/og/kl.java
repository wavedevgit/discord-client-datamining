package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kl extends jf.a {
    public static final Parcelable.Creator<kl> CREATOR = new am();

    /* renamed from: d  reason: collision with root package name */
    private final int f41106d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41107e;

    /* renamed from: i  reason: collision with root package name */
    private final String f41108i;

    /* renamed from: o  reason: collision with root package name */
    private final String f41109o;

    public kl(int i10, String str, String str2, String str3) {
        this.f41106d = i10;
        this.f41107e = str;
        this.f41108i = str2;
        this.f41109o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f41106d);
        jf.c.s(parcel, 2, this.f41107e, false);
        jf.c.s(parcel, 3, this.f41108i, false);
        jf.c.s(parcel, 4, this.f41109o, false);
        jf.c.b(parcel, a10);
    }
}
