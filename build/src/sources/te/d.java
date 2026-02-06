package te;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends hf.a {
    public static final Parcelable.Creator<d> CREATOR = new e();

    /* renamed from: d  reason: collision with root package name */
    private final String f50594d;

    /* renamed from: e  reason: collision with root package name */
    private final String f50595e;

    public d(String str, String str2) {
        this.f50594d = str;
        this.f50595e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, this.f50594d, false);
        hf.c.s(parcel, 2, this.f50595e, false);
        hf.c.b(parcel, a10);
    }
}
