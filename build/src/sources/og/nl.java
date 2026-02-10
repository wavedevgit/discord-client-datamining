package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class nl extends jf.a {
    public static final Parcelable.Creator<nl> CREATOR = new hm();

    /* renamed from: d  reason: collision with root package name */
    private final int f41202d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41203e;

    public nl(int i10, String str) {
        this.f41202d = i10;
        this.f41203e = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f41202d);
        jf.c.s(parcel, 2, this.f41203e, false);
        jf.c.b(parcel, a10);
    }
}
