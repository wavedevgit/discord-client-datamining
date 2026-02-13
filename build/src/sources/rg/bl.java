package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class bl extends jf.a {
    public static final Parcelable.Creator<bl> CREATOR = new cl();

    /* renamed from: d  reason: collision with root package name */
    private final String f47152d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47153e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47154i;

    /* renamed from: o  reason: collision with root package name */
    private final float f47155o;

    /* renamed from: p  reason: collision with root package name */
    private final float f47156p;

    public bl(String str, Rect rect, List list, float f10, float f11) {
        this.f47152d = str;
        this.f47153e = rect;
        this.f47154i = list;
        this.f47155o = f10;
        this.f47156p = f11;
    }

    public final float b() {
        return this.f47156p;
    }

    public final float c() {
        return this.f47155o;
    }

    public final Rect d() {
        return this.f47153e;
    }

    public final String e() {
        return this.f47152d;
    }

    public final List f() {
        return this.f47154i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47152d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f47153e, i10, false);
        jf.c.w(parcel, 3, this.f47154i, false);
        jf.c.j(parcel, 4, this.f47155o);
        jf.c.j(parcel, 5, this.f47156p);
        jf.c.b(parcel, a10);
    }
}
