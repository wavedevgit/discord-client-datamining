package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class il extends hf.a {
    public static final Parcelable.Creator<il> CREATOR = new yl();

    /* renamed from: d  reason: collision with root package name */
    private final ml f37727d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37728e;

    /* renamed from: i  reason: collision with root package name */
    private final String f37729i;

    /* renamed from: o  reason: collision with root package name */
    private final nl[] f37730o;

    /* renamed from: p  reason: collision with root package name */
    private final kl[] f37731p;

    /* renamed from: q  reason: collision with root package name */
    private final String[] f37732q;

    /* renamed from: r  reason: collision with root package name */
    private final fl[] f37733r;

    public il(ml mlVar, String str, String str2, nl[] nlVarArr, kl[] klVarArr, String[] strArr, fl[] flVarArr) {
        this.f37727d = mlVar;
        this.f37728e = str;
        this.f37729i = str2;
        this.f37730o = nlVarArr;
        this.f37731p = klVarArr;
        this.f37732q = strArr;
        this.f37733r = flVarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, this.f37727d, i10, false);
        hf.c.s(parcel, 2, this.f37728e, false);
        hf.c.s(parcel, 3, this.f37729i, false);
        hf.c.v(parcel, 4, this.f37730o, i10, false);
        hf.c.v(parcel, 5, this.f37731p, i10, false);
        hf.c.t(parcel, 6, this.f37732q, false);
        hf.c.v(parcel, 7, this.f37733r, i10, false);
        hf.c.b(parcel, a10);
    }
}
