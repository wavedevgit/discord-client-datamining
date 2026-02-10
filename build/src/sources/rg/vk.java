package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk extends jf.a {
    public static final Parcelable.Creator<vk> CREATOR = new wk();

    /* renamed from: d  reason: collision with root package name */
    private final String f48769d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f48770e;

    /* renamed from: i  reason: collision with root package name */
    private final List f48771i;

    /* renamed from: o  reason: collision with root package name */
    private final String f48772o;

    /* renamed from: p  reason: collision with root package name */
    private final List f48773p;

    /* renamed from: q  reason: collision with root package name */
    private final float f48774q;

    /* renamed from: r  reason: collision with root package name */
    private final float f48775r;

    public vk(String str, Rect rect, List list, String str2, List list2, float f10, float f11) {
        this.f48769d = str;
        this.f48770e = rect;
        this.f48771i = list;
        this.f48772o = str2;
        this.f48773p = list2;
        this.f48774q = f10;
        this.f48775r = f11;
    }

    public final float b() {
        return this.f48775r;
    }

    public final float c() {
        return this.f48774q;
    }

    public final Rect d() {
        return this.f48770e;
    }

    public final String e() {
        return this.f48772o;
    }

    public final String f() {
        return this.f48769d;
    }

    public final List h() {
        return this.f48771i;
    }

    public final List i() {
        return this.f48773p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f48769d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f48770e, i10, false);
        jf.c.w(parcel, 3, this.f48771i, false);
        jf.c.s(parcel, 4, this.f48772o, false);
        jf.c.w(parcel, 5, this.f48773p, false);
        jf.c.j(parcel, 6, this.f48774q);
        jf.c.j(parcel, 7, this.f48775r);
        jf.c.b(parcel, a10);
    }
}
