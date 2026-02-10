package ue;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends jf.a {
    public static final Parcelable.Creator<d> CREATOR = new e();

    /* renamed from: d  reason: collision with root package name */
    private final String f51550d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51551e;

    public d(String str, String str2) {
        this.f51550d = str;
        this.f51551e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, this.f51550d, false);
        jf.c.s(parcel, 2, this.f51551e, false);
        jf.c.b(parcel, a10);
    }
}
