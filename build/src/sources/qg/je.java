package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends jf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f45940d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45941e;

    /* renamed from: i  reason: collision with root package name */
    private final float f45942i;

    /* renamed from: o  reason: collision with root package name */
    private final float f45943o;

    /* renamed from: p  reason: collision with root package name */
    private final float f45944p;

    /* renamed from: q  reason: collision with root package name */
    private final float f45945q;

    /* renamed from: r  reason: collision with root package name */
    private final float f45946r;

    /* renamed from: s  reason: collision with root package name */
    private final float f45947s;

    /* renamed from: t  reason: collision with root package name */
    private final float f45948t;

    /* renamed from: u  reason: collision with root package name */
    private final List f45949u;

    /* renamed from: v  reason: collision with root package name */
    private final List f45950v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f45940d = i10;
        this.f45941e = rect;
        this.f45942i = f10;
        this.f45943o = f11;
        this.f45944p = f12;
        this.f45945q = f13;
        this.f45946r = f14;
        this.f45947s = f15;
        this.f45948t = f16;
        this.f45949u = list;
        this.f45950v = list2;
    }

    public final float b() {
        return this.f45945q;
    }

    public final float c() {
        return this.f45943o;
    }

    public final float d() {
        return this.f45946r;
    }

    public final float e() {
        return this.f45942i;
    }

    public final float f() {
        return this.f45947s;
    }

    public final float h() {
        return this.f45944p;
    }

    public final int i() {
        return this.f45940d;
    }

    public final Rect j() {
        return this.f45941e;
    }

    public final List l() {
        return this.f45950v;
    }

    public final List o() {
        return this.f45949u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f45940d);
        jf.c.q(parcel, 2, this.f45941e, i10, false);
        jf.c.j(parcel, 3, this.f45942i);
        jf.c.j(parcel, 4, this.f45943o);
        jf.c.j(parcel, 5, this.f45944p);
        jf.c.j(parcel, 6, this.f45945q);
        jf.c.j(parcel, 7, this.f45946r);
        jf.c.j(parcel, 8, this.f45947s);
        jf.c.j(parcel, 9, this.f45948t);
        jf.c.w(parcel, 10, this.f45949u, false);
        jf.c.w(parcel, 11, this.f45950v, false);
        jf.c.b(parcel, a10);
    }
}
