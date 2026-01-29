package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ml extends hf.a {
    public static final Parcelable.Creator<ml> CREATOR = new gm();

    /* renamed from: d  reason: collision with root package name */
    private final String f38477d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38478e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38479i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38480o;

    /* renamed from: p  reason: collision with root package name */
    private final String f38481p;

    /* renamed from: q  reason: collision with root package name */
    private final String f38482q;

    /* renamed from: r  reason: collision with root package name */
    private final String f38483r;

    public ml(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f38477d = str;
        this.f38478e = str2;
        this.f38479i = str3;
        this.f38480o = str4;
        this.f38481p = str5;
        this.f38482q = str6;
        this.f38483r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38477d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38478e, false);
        hf.c.s(parcel, 3, this.f38479i, false);
        hf.c.s(parcel, 4, this.f38480o, false);
        hf.c.s(parcel, 5, this.f38481p, false);
        hf.c.s(parcel, 6, this.f38482q, false);
        hf.c.s(parcel, 7, this.f38483r, false);
        hf.c.b(parcel, a10);
    }
}
