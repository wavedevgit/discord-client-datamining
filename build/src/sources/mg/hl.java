package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hl extends hf.a {
    public static final Parcelable.Creator<hl> CREATOR = new xl();

    /* renamed from: d  reason: collision with root package name */
    private final String f38264d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38265e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38266i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38267o;

    /* renamed from: p  reason: collision with root package name */
    private final String f38268p;

    /* renamed from: q  reason: collision with root package name */
    private final gl f38269q;

    /* renamed from: r  reason: collision with root package name */
    private final gl f38270r;

    public hl(String str, String str2, String str3, String str4, String str5, gl glVar, gl glVar2) {
        this.f38264d = str;
        this.f38265e = str2;
        this.f38266i = str3;
        this.f38267o = str4;
        this.f38268p = str5;
        this.f38269q = glVar;
        this.f38270r = glVar2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38264d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38265e, false);
        hf.c.s(parcel, 3, this.f38266i, false);
        hf.c.s(parcel, 4, this.f38267o, false);
        hf.c.s(parcel, 5, this.f38268p, false);
        hf.c.q(parcel, 6, this.f38269q, i10, false);
        hf.c.q(parcel, 7, this.f38270r, i10, false);
        hf.c.b(parcel, a10);
    }
}
