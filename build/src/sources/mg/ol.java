package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ol extends hf.a {
    public static final Parcelable.Creator<ol> CREATOR = new im();

    /* renamed from: d  reason: collision with root package name */
    private final String f38337d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38338e;

    public ol(String str, String str2) {
        this.f38337d = str;
        this.f38338e = str2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38337d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38338e, false);
        hf.c.b(parcel, a10);
    }
}
