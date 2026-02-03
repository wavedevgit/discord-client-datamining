package og;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends hf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f43130d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f43131e;

    /* renamed from: i  reason: collision with root package name */
    private final float f43132i;

    /* renamed from: o  reason: collision with root package name */
    private final float f43133o;

    /* renamed from: p  reason: collision with root package name */
    private final float f43134p;

    /* renamed from: q  reason: collision with root package name */
    private final float f43135q;

    /* renamed from: r  reason: collision with root package name */
    private final float f43136r;

    /* renamed from: s  reason: collision with root package name */
    private final float f43137s;

    /* renamed from: t  reason: collision with root package name */
    private final float f43138t;

    /* renamed from: u  reason: collision with root package name */
    private final List f43139u;

    /* renamed from: v  reason: collision with root package name */
    private final List f43140v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f43130d = i10;
        this.f43131e = rect;
        this.f43132i = f10;
        this.f43133o = f11;
        this.f43134p = f12;
        this.f43135q = f13;
        this.f43136r = f14;
        this.f43137s = f15;
        this.f43138t = f16;
        this.f43139u = list;
        this.f43140v = list2;
    }

    public final float b() {
        return this.f43135q;
    }

    public final float c() {
        return this.f43133o;
    }

    public final float d() {
        return this.f43136r;
    }

    public final float e() {
        return this.f43132i;
    }

    public final float f() {
        return this.f43137s;
    }

    public final float g() {
        return this.f43134p;
    }

    public final int i() {
        return this.f43130d;
    }

    public final Rect j() {
        return this.f43131e;
    }

    public final List k() {
        return this.f43140v;
    }

    public final List m() {
        return this.f43139u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43130d);
        hf.c.q(parcel, 2, this.f43131e, i10, false);
        hf.c.j(parcel, 3, this.f43132i);
        hf.c.j(parcel, 4, this.f43133o);
        hf.c.j(parcel, 5, this.f43134p);
        hf.c.j(parcel, 6, this.f43135q);
        hf.c.j(parcel, 7, this.f43136r);
        hf.c.j(parcel, 8, this.f43137s);
        hf.c.j(parcel, 9, this.f43138t);
        hf.c.w(parcel, 10, this.f43139u, false);
        hf.c.w(parcel, 11, this.f43140v, false);
        hf.c.b(parcel, a10);
    }
}
