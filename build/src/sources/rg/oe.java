package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class oe extends jf.a {
    public static final Parcelable.Creator<oe> CREATOR = new qf();

    /* renamed from: d  reason: collision with root package name */
    private final String f47049d;

    public oe(String str) {
        this.f47049d = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47049d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, str, false);
        jf.c.b(parcel, a10);
    }
}
