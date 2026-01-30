package og;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends hf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f43202d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f43203e;

    /* renamed from: i  reason: collision with root package name */
    private final float f43204i;

    /* renamed from: o  reason: collision with root package name */
    private final float f43205o;

    /* renamed from: p  reason: collision with root package name */
    private final float f43206p;

    /* renamed from: q  reason: collision with root package name */
    private final float f43207q;

    /* renamed from: r  reason: collision with root package name */
    private final float f43208r;

    /* renamed from: s  reason: collision with root package name */
    private final float f43209s;

    /* renamed from: t  reason: collision with root package name */
    private final float f43210t;

    /* renamed from: u  reason: collision with root package name */
    private final List f43211u;

    /* renamed from: v  reason: collision with root package name */
    private final List f43212v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f43202d = i10;
        this.f43203e = rect;
        this.f43204i = f10;
        this.f43205o = f11;
        this.f43206p = f12;
        this.f43207q = f13;
        this.f43208r = f14;
        this.f43209s = f15;
        this.f43210t = f16;
        this.f43211u = list;
        this.f43212v = list2;
    }

    public final float b() {
        return this.f43207q;
    }

    public final float c() {
        return this.f43205o;
    }

    public final float d() {
        return this.f43208r;
    }

    public final float e() {
        return this.f43204i;
    }

    public final float f() {
        return this.f43209s;
    }

    public final float g() {
        return this.f43206p;
    }

    public final int i() {
        return this.f43202d;
    }

    public final Rect j() {
        return this.f43203e;
    }

    public final List k() {
        return this.f43212v;
    }

    public final List m() {
        return this.f43211u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43202d);
        hf.c.q(parcel, 2, this.f43203e, i10, false);
        hf.c.j(parcel, 3, this.f43204i);
        hf.c.j(parcel, 4, this.f43205o);
        hf.c.j(parcel, 5, this.f43206p);
        hf.c.j(parcel, 6, this.f43207q);
        hf.c.j(parcel, 7, this.f43208r);
        hf.c.j(parcel, 8, this.f43209s);
        hf.c.j(parcel, 9, this.f43210t);
        hf.c.w(parcel, 10, this.f43211u, false);
        hf.c.w(parcel, 11, this.f43212v, false);
        hf.c.b(parcel, a10);
    }
}
