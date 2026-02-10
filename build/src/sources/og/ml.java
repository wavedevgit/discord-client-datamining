package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ml extends jf.a {
    public static final Parcelable.Creator<ml> CREATOR = new gm();

    /* renamed from: d  reason: collision with root package name */
    private final String f39494d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39495e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39496i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39497o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39498p;

    /* renamed from: q  reason: collision with root package name */
    private final String f39499q;

    /* renamed from: r  reason: collision with root package name */
    private final String f39500r;

    public ml(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f39494d = str;
        this.f39495e = str2;
        this.f39496i = str3;
        this.f39497o = str4;
        this.f39498p = str5;
        this.f39499q = str6;
        this.f39500r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39494d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f39495e, false);
        jf.c.s(parcel, 3, this.f39496i, false);
        jf.c.s(parcel, 4, this.f39497o, false);
        jf.c.s(parcel, 5, this.f39498p, false);
        jf.c.s(parcel, 6, this.f39499q, false);
        jf.c.s(parcel, 7, this.f39500r, false);
        jf.c.b(parcel, a10);
    }
}
