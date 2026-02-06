package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk extends hf.a {
    public static final Parcelable.Creator<vk> CREATOR = new wk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47603d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47604e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47605i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47606o;

    /* renamed from: p  reason: collision with root package name */
    private final List f47607p;

    /* renamed from: q  reason: collision with root package name */
    private final float f47608q;

    /* renamed from: r  reason: collision with root package name */
    private final float f47609r;

    public vk(String str, Rect rect, List list, String str2, List list2, float f10, float f11) {
        this.f47603d = str;
        this.f47604e = rect;
        this.f47605i = list;
        this.f47606o = str2;
        this.f47607p = list2;
        this.f47608q = f10;
        this.f47609r = f11;
    }

    public final float b() {
        return this.f47609r;
    }

    public final float c() {
        return this.f47608q;
    }

    public final Rect d() {
        return this.f47604e;
    }

    public final String e() {
        return this.f47606o;
    }

    public final String f() {
        return this.f47603d;
    }

    public final List h() {
        return this.f47605i;
    }

    public final List i() {
        return this.f47607p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47603d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f47604e, i10, false);
        hf.c.w(parcel, 3, this.f47605i, false);
        hf.c.s(parcel, 4, this.f47606o, false);
        hf.c.w(parcel, 5, this.f47607p, false);
        hf.c.j(parcel, 6, this.f47608q);
        hf.c.j(parcel, 7, this.f47609r);
        hf.c.b(parcel, a10);
    }
}
