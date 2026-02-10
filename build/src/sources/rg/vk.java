package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk extends jf.a {
    public static final Parcelable.Creator<vk> CREATOR = new wk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47223d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47224e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47225i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47226o;

    /* renamed from: p  reason: collision with root package name */
    private final List f47227p;

    /* renamed from: q  reason: collision with root package name */
    private final float f47228q;

    /* renamed from: r  reason: collision with root package name */
    private final float f47229r;

    public vk(String str, Rect rect, List list, String str2, List list2, float f10, float f11) {
        this.f47223d = str;
        this.f47224e = rect;
        this.f47225i = list;
        this.f47226o = str2;
        this.f47227p = list2;
        this.f47228q = f10;
        this.f47229r = f11;
    }

    public final float b() {
        return this.f47229r;
    }

    public final float c() {
        return this.f47228q;
    }

    public final Rect d() {
        return this.f47224e;
    }

    public final String e() {
        return this.f47226o;
    }

    public final String f() {
        return this.f47223d;
    }

    public final List g() {
        return this.f47225i;
    }

    public final List i() {
        return this.f47227p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47223d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f47224e, i10, false);
        jf.c.w(parcel, 3, this.f47225i, false);
        jf.c.s(parcel, 4, this.f47226o, false);
        jf.c.w(parcel, 5, this.f47227p, false);
        jf.c.j(parcel, 6, this.f47228q);
        jf.c.j(parcel, 7, this.f47229r);
        jf.c.b(parcel, a10);
    }
}
