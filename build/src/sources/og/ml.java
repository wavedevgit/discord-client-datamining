package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ml extends jf.a {
    public static final Parcelable.Creator<ml> CREATOR = new gm();

    /* renamed from: d  reason: collision with root package name */
    private final String f41168d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41169e;

    /* renamed from: i  reason: collision with root package name */
    private final String f41170i;

    /* renamed from: o  reason: collision with root package name */
    private final String f41171o;

    /* renamed from: p  reason: collision with root package name */
    private final String f41172p;

    /* renamed from: q  reason: collision with root package name */
    private final String f41173q;

    /* renamed from: r  reason: collision with root package name */
    private final String f41174r;

    public ml(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f41168d = str;
        this.f41169e = str2;
        this.f41170i = str3;
        this.f41171o = str4;
        this.f41172p = str5;
        this.f41173q = str6;
        this.f41174r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f41168d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f41169e, false);
        jf.c.s(parcel, 3, this.f41170i, false);
        jf.c.s(parcel, 4, this.f41171o, false);
        jf.c.s(parcel, 5, this.f41172p, false);
        jf.c.s(parcel, 6, this.f41173q, false);
        jf.c.s(parcel, 7, this.f41174r, false);
        jf.c.b(parcel, a10);
    }
}
