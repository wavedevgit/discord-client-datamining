package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class pl extends hf.a {
    public static final Parcelable.Creator<pl> CREATOR = new jm();

    /* renamed from: d  reason: collision with root package name */
    private final String f38362d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38363e;

    public pl(String str, String str2) {
        this.f38362d = str;
        this.f38363e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38362d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38363e, false);
        hf.c.b(parcel, a10);
    }
}
