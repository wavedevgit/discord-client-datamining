package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hl extends jf.a {
    public static final Parcelable.Creator<hl> CREATOR = new xl();

    /* renamed from: d  reason: collision with root package name */
    private final String f40939d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40940e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40941i;

    /* renamed from: o  reason: collision with root package name */
    private final String f40942o;

    /* renamed from: p  reason: collision with root package name */
    private final String f40943p;

    /* renamed from: q  reason: collision with root package name */
    private final gl f40944q;

    /* renamed from: r  reason: collision with root package name */
    private final gl f40945r;

    public hl(String str, String str2, String str3, String str4, String str5, gl glVar, gl glVar2) {
        this.f40939d = str;
        this.f40940e = str2;
        this.f40941i = str3;
        this.f40942o = str4;
        this.f40943p = str5;
        this.f40944q = glVar;
        this.f40945r = glVar2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f40939d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f40940e, false);
        jf.c.s(parcel, 3, this.f40941i, false);
        jf.c.s(parcel, 4, this.f40942o, false);
        jf.c.s(parcel, 5, this.f40943p, false);
        jf.c.q(parcel, 6, this.f40944q, i10, false);
        jf.c.q(parcel, 7, this.f40945r, i10, false);
        jf.c.b(parcel, a10);
    }
}
