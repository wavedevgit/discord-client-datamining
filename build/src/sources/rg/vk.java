package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk extends jf.a {
    public static final Parcelable.Creator<vk> CREATOR = new wk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47224d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47225e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47226i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47227o;

    /* renamed from: p  reason: collision with root package name */
    private final List f47228p;

    /* renamed from: q  reason: collision with root package name */
    private final float f47229q;

    /* renamed from: r  reason: collision with root package name */
    private final float f47230r;

    public vk(String str, Rect rect, List list, String str2, List list2, float f10, float f11) {
        this.f47224d = str;
        this.f47225e = rect;
        this.f47226i = list;
        this.f47227o = str2;
        this.f47228p = list2;
        this.f47229q = f10;
        this.f47230r = f11;
    }

    public final float b() {
        return this.f47230r;
    }

    public final float c() {
        return this.f47229q;
    }

    public final Rect d() {
        return this.f47225e;
    }

    public final String e() {
        return this.f47227o;
    }

    public final String f() {
        return this.f47224d;
    }

    public final List g() {
        return this.f47226i;
    }

    public final List i() {
        return this.f47228p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47224d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f47225e, i10, false);
        jf.c.w(parcel, 3, this.f47226i, false);
        jf.c.s(parcel, 4, this.f47227o, false);
        jf.c.w(parcel, 5, this.f47228p, false);
        jf.c.j(parcel, 6, this.f47229q);
        jf.c.j(parcel, 7, this.f47230r);
        jf.c.b(parcel, a10);
    }
}
