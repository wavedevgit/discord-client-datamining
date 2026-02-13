package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sb extends jf.a {
    public static final Parcelable.Creator<sb> CREATOR = new c();

    /* renamed from: d  reason: collision with root package name */
    public double f40219d;

    /* renamed from: e  reason: collision with root package name */
    public double f40220e;

    public sb(double d10, double d11) {
        this.f40219d = d10;
        this.f40220e = d11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.h(parcel, 2, this.f40219d);
        jf.c.h(parcel, 3, this.f40220e);
        jf.c.b(parcel, a10);
    }
}
