package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class il extends jf.a {
    public static final Parcelable.Creator<il> CREATOR = new yl();

    /* renamed from: d  reason: collision with root package name */
    private final ml f39858d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39859e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39860i;

    /* renamed from: o  reason: collision with root package name */
    private final nl[] f39861o;

    /* renamed from: p  reason: collision with root package name */
    private final kl[] f39862p;

    /* renamed from: q  reason: collision with root package name */
    private final String[] f39863q;

    /* renamed from: r  reason: collision with root package name */
    private final fl[] f39864r;

    public il(ml mlVar, String str, String str2, nl[] nlVarArr, kl[] klVarArr, String[] strArr, fl[] flVarArr) {
        this.f39858d = mlVar;
        this.f39859e = str;
        this.f39860i = str2;
        this.f39861o = nlVarArr;
        this.f39862p = klVarArr;
        this.f39863q = strArr;
        this.f39864r = flVarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, this.f39858d, i10, false);
        jf.c.s(parcel, 2, this.f39859e, false);
        jf.c.s(parcel, 3, this.f39860i, false);
        jf.c.v(parcel, 4, this.f39861o, i10, false);
        jf.c.v(parcel, 5, this.f39862p, i10, false);
        jf.c.t(parcel, 6, this.f39863q, false);
        jf.c.v(parcel, 7, this.f39864r, i10, false);
        jf.c.b(parcel, a10);
    }
}
