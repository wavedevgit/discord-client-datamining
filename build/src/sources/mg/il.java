package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class il extends hf.a {
    public static final Parcelable.Creator<il> CREATOR = new yl();

    /* renamed from: d  reason: collision with root package name */
    private final ml f38272d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38273e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38274i;

    /* renamed from: o  reason: collision with root package name */
    private final nl[] f38275o;

    /* renamed from: p  reason: collision with root package name */
    private final kl[] f38276p;

    /* renamed from: q  reason: collision with root package name */
    private final String[] f38277q;

    /* renamed from: r  reason: collision with root package name */
    private final fl[] f38278r;

    public il(ml mlVar, String str, String str2, nl[] nlVarArr, kl[] klVarArr, String[] strArr, fl[] flVarArr) {
        this.f38272d = mlVar;
        this.f38273e = str;
        this.f38274i = str2;
        this.f38275o = nlVarArr;
        this.f38276p = klVarArr;
        this.f38277q = strArr;
        this.f38278r = flVarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, this.f38272d, i10, false);
        hf.c.s(parcel, 2, this.f38273e, false);
        hf.c.s(parcel, 3, this.f38274i, false);
        hf.c.v(parcel, 4, this.f38275o, i10, false);
        hf.c.v(parcel, 5, this.f38276p, i10, false);
        hf.c.t(parcel, 6, this.f38277q, false);
        hf.c.v(parcel, 7, this.f38278r, i10, false);
        hf.c.b(parcel, a10);
    }
}
