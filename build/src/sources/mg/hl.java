package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hl extends hf.a {
    public static final Parcelable.Creator<hl> CREATOR = new xl();

    /* renamed from: d  reason: collision with root package name */
    private final String f38041d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38042e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38043i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38044o;

    /* renamed from: p  reason: collision with root package name */
    private final String f38045p;

    /* renamed from: q  reason: collision with root package name */
    private final gl f38046q;

    /* renamed from: r  reason: collision with root package name */
    private final gl f38047r;

    public hl(String str, String str2, String str3, String str4, String str5, gl glVar, gl glVar2) {
        this.f38041d = str;
        this.f38042e = str2;
        this.f38043i = str3;
        this.f38044o = str4;
        this.f38045p = str5;
        this.f38046q = glVar;
        this.f38047r = glVar2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38041d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38042e, false);
        hf.c.s(parcel, 3, this.f38043i, false);
        hf.c.s(parcel, 4, this.f38044o, false);
        hf.c.s(parcel, 5, this.f38045p, false);
        hf.c.q(parcel, 6, this.f38046q, i10, false);
        hf.c.q(parcel, 7, this.f38047r, i10, false);
        hf.c.b(parcel, a10);
    }
}
