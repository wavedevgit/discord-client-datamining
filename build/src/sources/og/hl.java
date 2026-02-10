package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hl extends jf.a {
    public static final Parcelable.Creator<hl> CREATOR = new xl();

    /* renamed from: d  reason: collision with root package name */
    private final String f39265d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39266e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39267i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39268o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39269p;

    /* renamed from: q  reason: collision with root package name */
    private final gl f39270q;

    /* renamed from: r  reason: collision with root package name */
    private final gl f39271r;

    public hl(String str, String str2, String str3, String str4, String str5, gl glVar, gl glVar2) {
        this.f39265d = str;
        this.f39266e = str2;
        this.f39267i = str3;
        this.f39268o = str4;
        this.f39269p = str5;
        this.f39270q = glVar;
        this.f39271r = glVar2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39265d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f39266e, false);
        jf.c.s(parcel, 3, this.f39267i, false);
        jf.c.s(parcel, 4, this.f39268o, false);
        jf.c.s(parcel, 5, this.f39269p, false);
        jf.c.q(parcel, 6, this.f39270q, i10, false);
        jf.c.q(parcel, 7, this.f39271r, i10, false);
        jf.c.b(parcel, a10);
    }
}
