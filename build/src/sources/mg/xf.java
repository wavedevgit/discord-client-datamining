package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xf extends hf.a {
    public static final Parcelable.Creator<xf> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    public String f38815d;

    /* renamed from: e  reason: collision with root package name */
    public String f38816e;

    public xf(String str, String str2) {
        this.f38815d = str;
        this.f38816e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38815d, false);
        hf.c.s(parcel, 3, this.f38816e, false);
        hf.c.b(parcel, a10);
    }
}
