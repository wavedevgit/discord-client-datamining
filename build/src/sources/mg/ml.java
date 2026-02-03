package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ml extends hf.a {
    public static final Parcelable.Creator<ml> CREATOR = new gm();

    /* renamed from: d  reason: collision with root package name */
    private final String f38270d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38271e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38272i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38273o;

    /* renamed from: p  reason: collision with root package name */
    private final String f38274p;

    /* renamed from: q  reason: collision with root package name */
    private final String f38275q;

    /* renamed from: r  reason: collision with root package name */
    private final String f38276r;

    public ml(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f38270d = str;
        this.f38271e = str2;
        this.f38272i = str3;
        this.f38273o = str4;
        this.f38274p = str5;
        this.f38275q = str6;
        this.f38276r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38270d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38271e, false);
        hf.c.s(parcel, 3, this.f38272i, false);
        hf.c.s(parcel, 4, this.f38273o, false);
        hf.c.s(parcel, 5, this.f38274p, false);
        hf.c.s(parcel, 6, this.f38275q, false);
        hf.c.s(parcel, 7, this.f38276r, false);
        hf.c.b(parcel, a10);
    }
}
