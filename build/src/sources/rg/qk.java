package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qk extends jf.a {
    public static final Parcelable.Creator<qk> CREATOR = new sk();

    /* renamed from: d  reason: collision with root package name */
    private final String f48641d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f48642e;

    /* renamed from: i  reason: collision with root package name */
    private final List f48643i;

    /* renamed from: o  reason: collision with root package name */
    private final String f48644o;

    /* renamed from: p  reason: collision with root package name */
    private final List f48645p;

    public qk(String str, Rect rect, List list, String str2, List list2) {
        this.f48641d = str;
        this.f48642e = rect;
        this.f48643i = list;
        this.f48644o = str2;
        this.f48645p = list2;
    }

    public final Rect b() {
        return this.f48642e;
    }

    public final String c() {
        return this.f48644o;
    }

    public final String d() {
        return this.f48641d;
    }

    public final List e() {
        return this.f48643i;
    }

    public final List f() {
        return this.f48645p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f48641d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f48642e, i10, false);
        jf.c.w(parcel, 3, this.f48643i, false);
        jf.c.s(parcel, 4, this.f48644o, false);
        jf.c.w(parcel, 5, this.f48645p, false);
        jf.c.b(parcel, a10);
    }
}
