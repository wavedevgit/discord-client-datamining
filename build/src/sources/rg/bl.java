package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class bl extends jf.a {
    public static final Parcelable.Creator<bl> CREATOR = new cl();

    /* renamed from: d  reason: collision with root package name */
    private final String f46584d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f46585e;

    /* renamed from: i  reason: collision with root package name */
    private final List f46586i;

    /* renamed from: o  reason: collision with root package name */
    private final float f46587o;

    /* renamed from: p  reason: collision with root package name */
    private final float f46588p;

    public bl(String str, Rect rect, List list, float f10, float f11) {
        this.f46584d = str;
        this.f46585e = rect;
        this.f46586i = list;
        this.f46587o = f10;
        this.f46588p = f11;
    }

    public final float b() {
        return this.f46588p;
    }

    public final float c() {
        return this.f46587o;
    }

    public final Rect d() {
        return this.f46585e;
    }

    public final String e() {
        return this.f46584d;
    }

    public final List f() {
        return this.f46586i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f46584d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f46585e, i10, false);
        jf.c.w(parcel, 3, this.f46586i, false);
        jf.c.j(parcel, 4, this.f46587o);
        jf.c.j(parcel, 5, this.f46588p);
        jf.c.b(parcel, a10);
    }
}
