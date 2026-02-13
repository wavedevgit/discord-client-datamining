package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qk extends jf.a {
    public static final Parcelable.Creator<qk> CREATOR = new sk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47664d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47665e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47666i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47667o;

    /* renamed from: p  reason: collision with root package name */
    private final List f47668p;

    public qk(String str, Rect rect, List list, String str2, List list2) {
        this.f47664d = str;
        this.f47665e = rect;
        this.f47666i = list;
        this.f47667o = str2;
        this.f47668p = list2;
    }

    public final Rect b() {
        return this.f47665e;
    }

    public final String c() {
        return this.f47667o;
    }

    public final String d() {
        return this.f47664d;
    }

    public final List e() {
        return this.f47666i;
    }

    public final List f() {
        return this.f47668p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47664d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f47665e, i10, false);
        jf.c.w(parcel, 3, this.f47666i, false);
        jf.c.s(parcel, 4, this.f47667o, false);
        jf.c.w(parcel, 5, this.f47668p, false);
        jf.c.b(parcel, a10);
    }
}
