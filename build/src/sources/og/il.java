package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class il extends jf.a {
    public static final Parcelable.Creator<il> CREATOR = new yl();

    /* renamed from: d  reason: collision with root package name */
    private final ml f39289d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39290e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39291i;

    /* renamed from: o  reason: collision with root package name */
    private final nl[] f39292o;

    /* renamed from: p  reason: collision with root package name */
    private final kl[] f39293p;

    /* renamed from: q  reason: collision with root package name */
    private final String[] f39294q;

    /* renamed from: r  reason: collision with root package name */
    private final fl[] f39295r;

    public il(ml mlVar, String str, String str2, nl[] nlVarArr, kl[] klVarArr, String[] strArr, fl[] flVarArr) {
        this.f39289d = mlVar;
        this.f39290e = str;
        this.f39291i = str2;
        this.f39292o = nlVarArr;
        this.f39293p = klVarArr;
        this.f39294q = strArr;
        this.f39295r = flVarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, this.f39289d, i10, false);
        jf.c.s(parcel, 2, this.f39290e, false);
        jf.c.s(parcel, 3, this.f39291i, false);
        jf.c.v(parcel, 4, this.f39292o, i10, false);
        jf.c.v(parcel, 5, this.f39293p, i10, false);
        jf.c.t(parcel, 6, this.f39294q, false);
        jf.c.v(parcel, 7, this.f39295r, i10, false);
        jf.c.b(parcel, a10);
    }
}
