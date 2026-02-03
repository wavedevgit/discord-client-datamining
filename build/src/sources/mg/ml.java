package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ml extends hf.a {
    public static final Parcelable.Creator<ml> CREATOR = new gm();

    /* renamed from: d  reason: collision with root package name */
    private final String f38473d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38474e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38475i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38476o;

    /* renamed from: p  reason: collision with root package name */
    private final String f38477p;

    /* renamed from: q  reason: collision with root package name */
    private final String f38478q;

    /* renamed from: r  reason: collision with root package name */
    private final String f38479r;

    public ml(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f38473d = str;
        this.f38474e = str2;
        this.f38475i = str3;
        this.f38476o = str4;
        this.f38477p = str5;
        this.f38478q = str6;
        this.f38479r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38473d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38474e, false);
        hf.c.s(parcel, 3, this.f38475i, false);
        hf.c.s(parcel, 4, this.f38476o, false);
        hf.c.s(parcel, 5, this.f38477p, false);
        hf.c.s(parcel, 6, this.f38478q, false);
        hf.c.s(parcel, 7, this.f38479r, false);
        hf.c.b(parcel, a10);
    }
}
