package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o7 extends hf.a {
    public static final Parcelable.Creator<o7> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    public String f40143d;

    /* renamed from: e  reason: collision with root package name */
    public String f40144e;

    /* renamed from: i  reason: collision with root package name */
    public String f40145i;

    /* renamed from: o  reason: collision with root package name */
    public String f40146o;

    /* renamed from: p  reason: collision with root package name */
    public String f40147p;

    /* renamed from: q  reason: collision with root package name */
    public n6 f40148q;

    /* renamed from: r  reason: collision with root package name */
    public n6 f40149r;

    public o7(String str, String str2, String str3, String str4, String str5, n6 n6Var, n6 n6Var2) {
        this.f40143d = str;
        this.f40144e = str2;
        this.f40145i = str3;
        this.f40146o = str4;
        this.f40147p = str5;
        this.f40148q = n6Var;
        this.f40149r = n6Var2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f40143d, false);
        hf.c.s(parcel, 3, this.f40144e, false);
        hf.c.s(parcel, 4, this.f40145i, false);
        hf.c.s(parcel, 5, this.f40146o, false);
        hf.c.s(parcel, 6, this.f40147p, false);
        hf.c.q(parcel, 7, this.f40148q, i10, false);
        hf.c.q(parcel, 8, this.f40149r, i10, false);
        hf.c.b(parcel, a10);
    }
}
