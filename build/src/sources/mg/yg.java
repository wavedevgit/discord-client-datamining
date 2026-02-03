package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yg extends hf.a {
    public static final Parcelable.Creator<yg> CREATOR = new h();

    /* renamed from: d  reason: collision with root package name */
    public String f38993d;

    /* renamed from: e  reason: collision with root package name */
    public String f38994e;

    /* renamed from: i  reason: collision with root package name */
    public int f38995i;

    public yg(String str, String str2, int i10) {
        this.f38993d = str;
        this.f38994e = str2;
        this.f38995i = i10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38993d, false);
        hf.c.s(parcel, 3, this.f38994e, false);
        hf.c.l(parcel, 4, this.f38995i);
        hf.c.b(parcel, a10);
    }
}
