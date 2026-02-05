package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hl extends hf.a {
    public static final Parcelable.Creator<hl> CREATOR = new xl();

    /* renamed from: d  reason: collision with root package name */
    private final String f37703d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37704e;

    /* renamed from: i  reason: collision with root package name */
    private final String f37705i;

    /* renamed from: o  reason: collision with root package name */
    private final String f37706o;

    /* renamed from: p  reason: collision with root package name */
    private final String f37707p;

    /* renamed from: q  reason: collision with root package name */
    private final gl f37708q;

    /* renamed from: r  reason: collision with root package name */
    private final gl f37709r;

    public hl(String str, String str2, String str3, String str4, String str5, gl glVar, gl glVar2) {
        this.f37703d = str;
        this.f37704e = str2;
        this.f37705i = str3;
        this.f37706o = str4;
        this.f37707p = str5;
        this.f37708q = glVar;
        this.f37709r = glVar2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f37703d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f37704e, false);
        hf.c.s(parcel, 3, this.f37705i, false);
        hf.c.s(parcel, 4, this.f37706o, false);
        hf.c.s(parcel, 5, this.f37707p, false);
        hf.c.q(parcel, 6, this.f37708q, i10, false);
        hf.c.q(parcel, 7, this.f37709r, i10, false);
        hf.c.b(parcel, a10);
    }
}
