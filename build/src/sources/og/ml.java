package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ml extends jf.a {
    public static final Parcelable.Creator<ml> CREATOR = new gm();

    /* renamed from: d  reason: collision with root package name */
    private final String f40063d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40064e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40065i;

    /* renamed from: o  reason: collision with root package name */
    private final String f40066o;

    /* renamed from: p  reason: collision with root package name */
    private final String f40067p;

    /* renamed from: q  reason: collision with root package name */
    private final String f40068q;

    /* renamed from: r  reason: collision with root package name */
    private final String f40069r;

    public ml(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f40063d = str;
        this.f40064e = str2;
        this.f40065i = str3;
        this.f40066o = str4;
        this.f40067p = str5;
        this.f40068q = str6;
        this.f40069r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f40063d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f40064e, false);
        jf.c.s(parcel, 3, this.f40065i, false);
        jf.c.s(parcel, 4, this.f40066o, false);
        jf.c.s(parcel, 5, this.f40067p, false);
        jf.c.s(parcel, 6, this.f40068q, false);
        jf.c.s(parcel, 7, this.f40069r, false);
        jf.c.b(parcel, a10);
    }
}
