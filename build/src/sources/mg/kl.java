package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kl extends hf.a {
    public static final Parcelable.Creator<kl> CREATOR = new am();

    /* renamed from: d  reason: collision with root package name */
    private final int f38415d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38416e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38417i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38418o;

    public kl(int i10, String str, String str2, String str3) {
        this.f38415d = i10;
        this.f38416e = str;
        this.f38417i = str2;
        this.f38418o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38415d);
        hf.c.s(parcel, 2, this.f38416e, false);
        hf.c.s(parcel, 3, this.f38417i, false);
        hf.c.s(parcel, 4, this.f38418o, false);
        hf.c.b(parcel, a10);
    }
}
