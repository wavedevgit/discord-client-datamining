package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ml extends hf.a {
    public static final Parcelable.Creator<ml> CREATOR = new gm();

    /* renamed from: d  reason: collision with root package name */
    private final String f40095d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40096e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40097i;

    /* renamed from: o  reason: collision with root package name */
    private final String f40098o;

    /* renamed from: p  reason: collision with root package name */
    private final String f40099p;

    /* renamed from: q  reason: collision with root package name */
    private final String f40100q;

    /* renamed from: r  reason: collision with root package name */
    private final String f40101r;

    public ml(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f40095d = str;
        this.f40096e = str2;
        this.f40097i = str3;
        this.f40098o = str4;
        this.f40099p = str5;
        this.f40100q = str6;
        this.f40101r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f40095d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f40096e, false);
        hf.c.s(parcel, 3, this.f40097i, false);
        hf.c.s(parcel, 4, this.f40098o, false);
        hf.c.s(parcel, 5, this.f40099p, false);
        hf.c.s(parcel, 6, this.f40100q, false);
        hf.c.s(parcel, 7, this.f40101r, false);
        hf.c.b(parcel, a10);
    }
}
