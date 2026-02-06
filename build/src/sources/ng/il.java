package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class il extends hf.a {
    public static final Parcelable.Creator<il> CREATOR = new yl();

    /* renamed from: d  reason: collision with root package name */
    private final ml f39890d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39891e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39892i;

    /* renamed from: o  reason: collision with root package name */
    private final nl[] f39893o;

    /* renamed from: p  reason: collision with root package name */
    private final kl[] f39894p;

    /* renamed from: q  reason: collision with root package name */
    private final String[] f39895q;

    /* renamed from: r  reason: collision with root package name */
    private final fl[] f39896r;

    public il(ml mlVar, String str, String str2, nl[] nlVarArr, kl[] klVarArr, String[] strArr, fl[] flVarArr) {
        this.f39890d = mlVar;
        this.f39891e = str;
        this.f39892i = str2;
        this.f39893o = nlVarArr;
        this.f39894p = klVarArr;
        this.f39895q = strArr;
        this.f39896r = flVarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, this.f39890d, i10, false);
        hf.c.s(parcel, 2, this.f39891e, false);
        hf.c.s(parcel, 3, this.f39892i, false);
        hf.c.v(parcel, 4, this.f39893o, i10, false);
        hf.c.v(parcel, 5, this.f39894p, i10, false);
        hf.c.t(parcel, 6, this.f39895q, false);
        hf.c.v(parcel, 7, this.f39896r, i10, false);
        hf.c.b(parcel, a10);
    }
}
