package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class bl extends jf.a {
    public static final Parcelable.Creator<bl> CREATOR = new cl();

    /* renamed from: d  reason: collision with root package name */
    private final String f46583d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f46584e;

    /* renamed from: i  reason: collision with root package name */
    private final List f46585i;

    /* renamed from: o  reason: collision with root package name */
    private final float f46586o;

    /* renamed from: p  reason: collision with root package name */
    private final float f46587p;

    public bl(String str, Rect rect, List list, float f10, float f11) {
        this.f46583d = str;
        this.f46584e = rect;
        this.f46585i = list;
        this.f46586o = f10;
        this.f46587p = f11;
    }

    public final float b() {
        return this.f46587p;
    }

    public final float c() {
        return this.f46586o;
    }

    public final Rect d() {
        return this.f46584e;
    }

    public final String e() {
        return this.f46583d;
    }

    public final List f() {
        return this.f46585i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f46583d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f46584e, i10, false);
        jf.c.w(parcel, 3, this.f46585i, false);
        jf.c.j(parcel, 4, this.f46586o);
        jf.c.j(parcel, 5, this.f46587p);
        jf.c.b(parcel, a10);
    }
}
