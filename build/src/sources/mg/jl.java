package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends hf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f38087d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38088e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38089i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38090o;

    /* renamed from: p  reason: collision with root package name */
    private final String f38091p;

    /* renamed from: q  reason: collision with root package name */
    private final String f38092q;

    /* renamed from: r  reason: collision with root package name */
    private final String f38093r;

    /* renamed from: s  reason: collision with root package name */
    private final String f38094s;

    /* renamed from: t  reason: collision with root package name */
    private final String f38095t;

    /* renamed from: u  reason: collision with root package name */
    private final String f38096u;

    /* renamed from: v  reason: collision with root package name */
    private final String f38097v;

    /* renamed from: w  reason: collision with root package name */
    private final String f38098w;

    /* renamed from: x  reason: collision with root package name */
    private final String f38099x;

    /* renamed from: y  reason: collision with root package name */
    private final String f38100y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f38087d = str;
        this.f38088e = str2;
        this.f38089i = str3;
        this.f38090o = str4;
        this.f38091p = str5;
        this.f38092q = str6;
        this.f38093r = str7;
        this.f38094s = str8;
        this.f38095t = str9;
        this.f38096u = str10;
        this.f38097v = str11;
        this.f38098w = str12;
        this.f38099x = str13;
        this.f38100y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38087d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38088e, false);
        hf.c.s(parcel, 3, this.f38089i, false);
        hf.c.s(parcel, 4, this.f38090o, false);
        hf.c.s(parcel, 5, this.f38091p, false);
        hf.c.s(parcel, 6, this.f38092q, false);
        hf.c.s(parcel, 7, this.f38093r, false);
        hf.c.s(parcel, 8, this.f38094s, false);
        hf.c.s(parcel, 9, this.f38095t, false);
        hf.c.s(parcel, 10, this.f38096u, false);
        hf.c.s(parcel, 11, this.f38097v, false);
        hf.c.s(parcel, 12, this.f38098w, false);
        hf.c.s(parcel, 13, this.f38099x, false);
        hf.c.s(parcel, 14, this.f38100y, false);
        hf.c.b(parcel, a10);
    }
}
