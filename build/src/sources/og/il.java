package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class il extends jf.a {
    public static final Parcelable.Creator<il> CREATOR = new yl();

    /* renamed from: d  reason: collision with root package name */
    private final ml f40963d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40964e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40965i;

    /* renamed from: o  reason: collision with root package name */
    private final nl[] f40966o;

    /* renamed from: p  reason: collision with root package name */
    private final kl[] f40967p;

    /* renamed from: q  reason: collision with root package name */
    private final String[] f40968q;

    /* renamed from: r  reason: collision with root package name */
    private final fl[] f40969r;

    public il(ml mlVar, String str, String str2, nl[] nlVarArr, kl[] klVarArr, String[] strArr, fl[] flVarArr) {
        this.f40963d = mlVar;
        this.f40964e = str;
        this.f40965i = str2;
        this.f40966o = nlVarArr;
        this.f40967p = klVarArr;
        this.f40968q = strArr;
        this.f40969r = flVarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, this.f40963d, i10, false);
        jf.c.s(parcel, 2, this.f40964e, false);
        jf.c.s(parcel, 3, this.f40965i, false);
        jf.c.v(parcel, 4, this.f40966o, i10, false);
        jf.c.v(parcel, 5, this.f40967p, i10, false);
        jf.c.t(parcel, 6, this.f40968q, false);
        jf.c.v(parcel, 7, this.f40969r, i10, false);
        jf.c.b(parcel, a10);
    }
}
