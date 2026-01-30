package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class pl extends hf.a {
    public static final Parcelable.Creator<pl> CREATOR = new jm();

    /* renamed from: d  reason: collision with root package name */
    private final String f38585d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38586e;

    public pl(String str, String str2) {
        this.f38585d = str;
        this.f38586e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38585d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38586e, false);
        hf.c.b(parcel, a10);
    }
}
