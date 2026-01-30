package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class il extends hf.a {
    public static final Parcelable.Creator<il> CREATOR = new yl();

    /* renamed from: d  reason: collision with root package name */
    private final ml f38288d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38289e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38290i;

    /* renamed from: o  reason: collision with root package name */
    private final nl[] f38291o;

    /* renamed from: p  reason: collision with root package name */
    private final kl[] f38292p;

    /* renamed from: q  reason: collision with root package name */
    private final String[] f38293q;

    /* renamed from: r  reason: collision with root package name */
    private final fl[] f38294r;

    public il(ml mlVar, String str, String str2, nl[] nlVarArr, kl[] klVarArr, String[] strArr, fl[] flVarArr) {
        this.f38288d = mlVar;
        this.f38289e = str;
        this.f38290i = str2;
        this.f38291o = nlVarArr;
        this.f38292p = klVarArr;
        this.f38293q = strArr;
        this.f38294r = flVarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, this.f38288d, i10, false);
        hf.c.s(parcel, 2, this.f38289e, false);
        hf.c.s(parcel, 3, this.f38290i, false);
        hf.c.v(parcel, 4, this.f38291o, i10, false);
        hf.c.v(parcel, 5, this.f38292p, i10, false);
        hf.c.t(parcel, 6, this.f38293q, false);
        hf.c.v(parcel, 7, this.f38294r, i10, false);
        hf.c.b(parcel, a10);
    }
}
