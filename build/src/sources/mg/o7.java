package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o7 extends hf.a {
    public static final Parcelable.Creator<o7> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    public String f38525d;

    /* renamed from: e  reason: collision with root package name */
    public String f38526e;

    /* renamed from: i  reason: collision with root package name */
    public String f38527i;

    /* renamed from: o  reason: collision with root package name */
    public String f38528o;

    /* renamed from: p  reason: collision with root package name */
    public String f38529p;

    /* renamed from: q  reason: collision with root package name */
    public n6 f38530q;

    /* renamed from: r  reason: collision with root package name */
    public n6 f38531r;

    public o7(String str, String str2, String str3, String str4, String str5, n6 n6Var, n6 n6Var2) {
        this.f38525d = str;
        this.f38526e = str2;
        this.f38527i = str3;
        this.f38528o = str4;
        this.f38529p = str5;
        this.f38530q = n6Var;
        this.f38531r = n6Var2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38525d, false);
        hf.c.s(parcel, 3, this.f38526e, false);
        hf.c.s(parcel, 4, this.f38527i, false);
        hf.c.s(parcel, 5, this.f38528o, false);
        hf.c.s(parcel, 6, this.f38529p, false);
        hf.c.q(parcel, 7, this.f38530q, i10, false);
        hf.c.q(parcel, 8, this.f38531r, i10, false);
        hf.c.b(parcel, a10);
    }
}
