package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hl extends hf.a {
    public static final Parcelable.Creator<hl> CREATOR = new xl();

    /* renamed from: d  reason: collision with root package name */
    private final String f39914d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39915e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39916i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39917o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39918p;

    /* renamed from: q  reason: collision with root package name */
    private final gl f39919q;

    /* renamed from: r  reason: collision with root package name */
    private final gl f39920r;

    public hl(String str, String str2, String str3, String str4, String str5, gl glVar, gl glVar2) {
        this.f39914d = str;
        this.f39915e = str2;
        this.f39916i = str3;
        this.f39917o = str4;
        this.f39918p = str5;
        this.f39919q = glVar;
        this.f39920r = glVar2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39914d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f39915e, false);
        hf.c.s(parcel, 3, this.f39916i, false);
        hf.c.s(parcel, 4, this.f39917o, false);
        hf.c.s(parcel, 5, this.f39918p, false);
        hf.c.q(parcel, 6, this.f39919q, i10, false);
        hf.c.q(parcel, 7, this.f39920r, i10, false);
        hf.c.b(parcel, a10);
    }
}
