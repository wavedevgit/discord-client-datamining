package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tk extends jf.a {
    public static final Parcelable.Creator<tk> CREATOR = new uk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47167d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47168e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47169i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47170o;

    /* renamed from: p  reason: collision with root package name */
    private final float f47171p;

    /* renamed from: q  reason: collision with root package name */
    private final float f47172q;

    /* renamed from: r  reason: collision with root package name */
    private final List f47173r;

    public tk(String str, Rect rect, List list, String str2, float f10, float f11, List list2) {
        this.f47167d = str;
        this.f47168e = rect;
        this.f47169i = list;
        this.f47170o = str2;
        this.f47171p = f10;
        this.f47172q = f11;
        this.f47173r = list2;
    }

    public final float b() {
        return this.f47172q;
    }

    public final float c() {
        return this.f47171p;
    }

    public final Rect d() {
        return this.f47168e;
    }

    public final String e() {
        return this.f47170o;
    }

    public final String f() {
        return this.f47167d;
    }

    public final List g() {
        return this.f47169i;
    }

    public final List i() {
        return this.f47173r;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47167d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f47168e, i10, false);
        jf.c.w(parcel, 3, this.f47169i, false);
        jf.c.s(parcel, 4, this.f47170o, false);
        jf.c.j(parcel, 5, this.f47171p);
        jf.c.j(parcel, 6, this.f47172q);
        jf.c.w(parcel, 7, this.f47173r, false);
        jf.c.b(parcel, a10);
    }
}
