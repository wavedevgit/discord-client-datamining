package og;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends hf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f43036d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f43037e;

    /* renamed from: i  reason: collision with root package name */
    private final float f43038i;

    /* renamed from: o  reason: collision with root package name */
    private final float f43039o;

    /* renamed from: p  reason: collision with root package name */
    private final float f43040p;

    /* renamed from: q  reason: collision with root package name */
    private final float f43041q;

    /* renamed from: r  reason: collision with root package name */
    private final float f43042r;

    /* renamed from: s  reason: collision with root package name */
    private final float f43043s;

    /* renamed from: t  reason: collision with root package name */
    private final float f43044t;

    /* renamed from: u  reason: collision with root package name */
    private final List f43045u;

    /* renamed from: v  reason: collision with root package name */
    private final List f43046v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f43036d = i10;
        this.f43037e = rect;
        this.f43038i = f10;
        this.f43039o = f11;
        this.f43040p = f12;
        this.f43041q = f13;
        this.f43042r = f14;
        this.f43043s = f15;
        this.f43044t = f16;
        this.f43045u = list;
        this.f43046v = list2;
    }

    public final float b() {
        return this.f43041q;
    }

    public final float c() {
        return this.f43039o;
    }

    public final float d() {
        return this.f43042r;
    }

    public final float e() {
        return this.f43038i;
    }

    public final float f() {
        return this.f43043s;
    }

    public final float g() {
        return this.f43040p;
    }

    public final int i() {
        return this.f43036d;
    }

    public final Rect j() {
        return this.f43037e;
    }

    public final List l() {
        return this.f43046v;
    }

    public final List n() {
        return this.f43045u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43036d);
        hf.c.q(parcel, 2, this.f43037e, i10, false);
        hf.c.j(parcel, 3, this.f43038i);
        hf.c.j(parcel, 4, this.f43039o);
        hf.c.j(parcel, 5, this.f43040p);
        hf.c.j(parcel, 6, this.f43041q);
        hf.c.j(parcel, 7, this.f43042r);
        hf.c.j(parcel, 8, this.f43043s);
        hf.c.j(parcel, 9, this.f43044t);
        hf.c.w(parcel, 10, this.f43045u, false);
        hf.c.w(parcel, 11, this.f43046v, false);
        hf.c.b(parcel, a10);
    }
}
