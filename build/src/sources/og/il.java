package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class il extends jf.a {
    public static final Parcelable.Creator<il> CREATOR = new yl();

    /* renamed from: d  reason: collision with root package name */
    private final ml f39290d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39291e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39292i;

    /* renamed from: o  reason: collision with root package name */
    private final nl[] f39293o;

    /* renamed from: p  reason: collision with root package name */
    private final kl[] f39294p;

    /* renamed from: q  reason: collision with root package name */
    private final String[] f39295q;

    /* renamed from: r  reason: collision with root package name */
    private final fl[] f39296r;

    public il(ml mlVar, String str, String str2, nl[] nlVarArr, kl[] klVarArr, String[] strArr, fl[] flVarArr) {
        this.f39290d = mlVar;
        this.f39291e = str;
        this.f39292i = str2;
        this.f39293o = nlVarArr;
        this.f39294p = klVarArr;
        this.f39295q = strArr;
        this.f39296r = flVarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, this.f39290d, i10, false);
        jf.c.s(parcel, 2, this.f39291e, false);
        jf.c.s(parcel, 3, this.f39292i, false);
        jf.c.v(parcel, 4, this.f39293o, i10, false);
        jf.c.v(parcel, 5, this.f39294p, i10, false);
        jf.c.t(parcel, 6, this.f39295q, false);
        jf.c.v(parcel, 7, this.f39296r, i10, false);
        jf.c.b(parcel, a10);
    }
}
