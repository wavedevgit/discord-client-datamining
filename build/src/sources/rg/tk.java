package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tk extends jf.a {
    public static final Parcelable.Creator<tk> CREATOR = new uk();

    /* renamed from: d  reason: collision with root package name */
    private final String f48713d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f48714e;

    /* renamed from: i  reason: collision with root package name */
    private final List f48715i;

    /* renamed from: o  reason: collision with root package name */
    private final String f48716o;

    /* renamed from: p  reason: collision with root package name */
    private final float f48717p;

    /* renamed from: q  reason: collision with root package name */
    private final float f48718q;

    /* renamed from: r  reason: collision with root package name */
    private final List f48719r;

    public tk(String str, Rect rect, List list, String str2, float f10, float f11, List list2) {
        this.f48713d = str;
        this.f48714e = rect;
        this.f48715i = list;
        this.f48716o = str2;
        this.f48717p = f10;
        this.f48718q = f11;
        this.f48719r = list2;
    }

    public final float b() {
        return this.f48718q;
    }

    public final float c() {
        return this.f48717p;
    }

    public final Rect d() {
        return this.f48714e;
    }

    public final String e() {
        return this.f48716o;
    }

    public final String f() {
        return this.f48713d;
    }

    public final List h() {
        return this.f48715i;
    }

    public final List i() {
        return this.f48719r;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f48713d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f48714e, i10, false);
        jf.c.w(parcel, 3, this.f48715i, false);
        jf.c.s(parcel, 4, this.f48716o, false);
        jf.c.j(parcel, 5, this.f48717p);
        jf.c.j(parcel, 6, this.f48718q);
        jf.c.w(parcel, 7, this.f48719r, false);
        jf.c.b(parcel, a10);
    }
}
