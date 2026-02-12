package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hl extends jf.a {
    public static final Parcelable.Creator<hl> CREATOR = new xl();

    /* renamed from: d  reason: collision with root package name */
    private final String f39266d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39267e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39268i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39269o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39270p;

    /* renamed from: q  reason: collision with root package name */
    private final gl f39271q;

    /* renamed from: r  reason: collision with root package name */
    private final gl f39272r;

    public hl(String str, String str2, String str3, String str4, String str5, gl glVar, gl glVar2) {
        this.f39266d = str;
        this.f39267e = str2;
        this.f39268i = str3;
        this.f39269o = str4;
        this.f39270p = str5;
        this.f39271q = glVar;
        this.f39272r = glVar2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39266d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f39267e, false);
        jf.c.s(parcel, 3, this.f39268i, false);
        jf.c.s(parcel, 4, this.f39269o, false);
        jf.c.s(parcel, 5, this.f39270p, false);
        jf.c.q(parcel, 6, this.f39271q, i10, false);
        jf.c.q(parcel, 7, this.f39272r, i10, false);
        jf.c.b(parcel, a10);
    }
}
