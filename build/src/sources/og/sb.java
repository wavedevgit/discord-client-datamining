package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sb extends jf.a {
    public static final Parcelable.Creator<sb> CREATOR = new c();

    /* renamed from: d  reason: collision with root package name */
    public double f41324d;

    /* renamed from: e  reason: collision with root package name */
    public double f41325e;

    public sb(double d10, double d11) {
        this.f41324d = d10;
        this.f41325e = d11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.h(parcel, 2, this.f41324d);
        jf.c.h(parcel, 3, this.f41325e);
        jf.c.b(parcel, a10);
    }
}
