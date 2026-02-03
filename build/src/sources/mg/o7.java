package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o7 extends hf.a {
    public static final Parcelable.Creator<o7> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    public String f38318d;

    /* renamed from: e  reason: collision with root package name */
    public String f38319e;

    /* renamed from: i  reason: collision with root package name */
    public String f38320i;

    /* renamed from: o  reason: collision with root package name */
    public String f38321o;

    /* renamed from: p  reason: collision with root package name */
    public String f38322p;

    /* renamed from: q  reason: collision with root package name */
    public n6 f38323q;

    /* renamed from: r  reason: collision with root package name */
    public n6 f38324r;

    public o7(String str, String str2, String str3, String str4, String str5, n6 n6Var, n6 n6Var2) {
        this.f38318d = str;
        this.f38319e = str2;
        this.f38320i = str3;
        this.f38321o = str4;
        this.f38322p = str5;
        this.f38323q = n6Var;
        this.f38324r = n6Var2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38318d, false);
        hf.c.s(parcel, 3, this.f38319e, false);
        hf.c.s(parcel, 4, this.f38320i, false);
        hf.c.s(parcel, 5, this.f38321o, false);
        hf.c.s(parcel, 6, this.f38322p, false);
        hf.c.q(parcel, 7, this.f38323q, i10, false);
        hf.c.q(parcel, 8, this.f38324r, i10, false);
        hf.c.b(parcel, a10);
    }
}
