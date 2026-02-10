package ue;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends jf.a {
    public static final Parcelable.Creator<f> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    private final String f51552d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51553e;

    public f(String str, int i10) {
        this.f51552d = str;
        this.f51553e = i10;
    }

    public final int b() {
        return this.f51553e;
    }

    public final String c() {
        return this.f51552d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, this.f51552d, false);
        jf.c.l(parcel, 2, this.f51553e);
        jf.c.b(parcel, a10);
    }
}
