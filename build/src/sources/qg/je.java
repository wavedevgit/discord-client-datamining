package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends jf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f44608d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f44609e;

    /* renamed from: i  reason: collision with root package name */
    private final float f44610i;

    /* renamed from: o  reason: collision with root package name */
    private final float f44611o;

    /* renamed from: p  reason: collision with root package name */
    private final float f44612p;

    /* renamed from: q  reason: collision with root package name */
    private final float f44613q;

    /* renamed from: r  reason: collision with root package name */
    private final float f44614r;

    /* renamed from: s  reason: collision with root package name */
    private final float f44615s;

    /* renamed from: t  reason: collision with root package name */
    private final float f44616t;

    /* renamed from: u  reason: collision with root package name */
    private final List f44617u;

    /* renamed from: v  reason: collision with root package name */
    private final List f44618v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f44608d = i10;
        this.f44609e = rect;
        this.f44610i = f10;
        this.f44611o = f11;
        this.f44612p = f12;
        this.f44613q = f13;
        this.f44614r = f14;
        this.f44615s = f15;
        this.f44616t = f16;
        this.f44617u = list;
        this.f44618v = list2;
    }

    public final float b() {
        return this.f44613q;
    }

    public final float c() {
        return this.f44611o;
    }

    public final float d() {
        return this.f44614r;
    }

    public final float e() {
        return this.f44610i;
    }

    public final float f() {
        return this.f44615s;
    }

    public final float g() {
        return this.f44612p;
    }

    public final int i() {
        return this.f44608d;
    }

    public final Rect j() {
        return this.f44609e;
    }

    public final List k() {
        return this.f44618v;
    }

    public final List l() {
        return this.f44617u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f44608d);
        jf.c.q(parcel, 2, this.f44609e, i10, false);
        jf.c.j(parcel, 3, this.f44610i);
        jf.c.j(parcel, 4, this.f44611o);
        jf.c.j(parcel, 5, this.f44612p);
        jf.c.j(parcel, 6, this.f44613q);
        jf.c.j(parcel, 7, this.f44614r);
        jf.c.j(parcel, 8, this.f44615s);
        jf.c.j(parcel, 9, this.f44616t);
        jf.c.w(parcel, 10, this.f44617u, false);
        jf.c.w(parcel, 11, this.f44618v, false);
        jf.c.b(parcel, a10);
    }
}
