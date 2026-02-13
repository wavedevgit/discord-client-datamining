package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends jf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f45177d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45178e;

    /* renamed from: i  reason: collision with root package name */
    private final float f45179i;

    /* renamed from: o  reason: collision with root package name */
    private final float f45180o;

    /* renamed from: p  reason: collision with root package name */
    private final float f45181p;

    /* renamed from: q  reason: collision with root package name */
    private final float f45182q;

    /* renamed from: r  reason: collision with root package name */
    private final float f45183r;

    /* renamed from: s  reason: collision with root package name */
    private final float f45184s;

    /* renamed from: t  reason: collision with root package name */
    private final float f45185t;

    /* renamed from: u  reason: collision with root package name */
    private final List f45186u;

    /* renamed from: v  reason: collision with root package name */
    private final List f45187v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f45177d = i10;
        this.f45178e = rect;
        this.f45179i = f10;
        this.f45180o = f11;
        this.f45181p = f12;
        this.f45182q = f13;
        this.f45183r = f14;
        this.f45184s = f15;
        this.f45185t = f16;
        this.f45186u = list;
        this.f45187v = list2;
    }

    public final float b() {
        return this.f45182q;
    }

    public final float c() {
        return this.f45180o;
    }

    public final float d() {
        return this.f45183r;
    }

    public final float e() {
        return this.f45179i;
    }

    public final float f() {
        return this.f45184s;
    }

    public final float g() {
        return this.f45181p;
    }

    public final int i() {
        return this.f45177d;
    }

    public final Rect j() {
        return this.f45178e;
    }

    public final List k() {
        return this.f45187v;
    }

    public final List l() {
        return this.f45186u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f45177d);
        jf.c.q(parcel, 2, this.f45178e, i10, false);
        jf.c.j(parcel, 3, this.f45179i);
        jf.c.j(parcel, 4, this.f45180o);
        jf.c.j(parcel, 5, this.f45181p);
        jf.c.j(parcel, 6, this.f45182q);
        jf.c.j(parcel, 7, this.f45183r);
        jf.c.j(parcel, 8, this.f45184s);
        jf.c.j(parcel, 9, this.f45185t);
        jf.c.w(parcel, 10, this.f45186u, false);
        jf.c.w(parcel, 11, this.f45187v, false);
        jf.c.b(parcel, a10);
    }
}
