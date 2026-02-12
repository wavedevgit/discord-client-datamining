package ue;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends jf.a {
    public static final Parcelable.Creator<d> CREATOR = new e();

    /* renamed from: d  reason: collision with root package name */
    private final String f50730d;

    /* renamed from: e  reason: collision with root package name */
    private final String f50731e;

    public d(String str, String str2) {
        this.f50730d = str;
        this.f50731e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, this.f50730d, false);
        jf.c.s(parcel, 2, this.f50731e, false);
        jf.c.b(parcel, a10);
    }
}
