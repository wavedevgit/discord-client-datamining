package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ve extends hf.a {
    public static final Parcelable.Creator<ve> CREATOR = new f();

    /* renamed from: d  reason: collision with root package name */
    public String f38725d;

    /* renamed from: e  reason: collision with root package name */
    public String f38726e;

    public ve(String str, String str2) {
        this.f38725d = str;
        this.f38726e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38725d, false);
        hf.c.s(parcel, 3, this.f38726e, false);
        hf.c.b(parcel, a10);
    }
}
