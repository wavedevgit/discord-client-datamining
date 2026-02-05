package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ml extends hf.a {
    public static final Parcelable.Creator<ml> CREATOR = new gm();

    /* renamed from: d  reason: collision with root package name */
    private final String f37932d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37933e;

    /* renamed from: i  reason: collision with root package name */
    private final String f37934i;

    /* renamed from: o  reason: collision with root package name */
    private final String f37935o;

    /* renamed from: p  reason: collision with root package name */
    private final String f37936p;

    /* renamed from: q  reason: collision with root package name */
    private final String f37937q;

    /* renamed from: r  reason: collision with root package name */
    private final String f37938r;

    public ml(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f37932d = str;
        this.f37933e = str2;
        this.f37934i = str3;
        this.f37935o = str4;
        this.f37936p = str5;
        this.f37937q = str6;
        this.f37938r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f37932d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f37933e, false);
        hf.c.s(parcel, 3, this.f37934i, false);
        hf.c.s(parcel, 4, this.f37935o, false);
        hf.c.s(parcel, 5, this.f37936p, false);
        hf.c.s(parcel, 6, this.f37937q, false);
        hf.c.s(parcel, 7, this.f37938r, false);
        hf.c.b(parcel, a10);
    }
}
