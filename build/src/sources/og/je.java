package og;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends hf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f43186d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f43187e;

    /* renamed from: i  reason: collision with root package name */
    private final float f43188i;

    /* renamed from: o  reason: collision with root package name */
    private final float f43189o;

    /* renamed from: p  reason: collision with root package name */
    private final float f43190p;

    /* renamed from: q  reason: collision with root package name */
    private final float f43191q;

    /* renamed from: r  reason: collision with root package name */
    private final float f43192r;

    /* renamed from: s  reason: collision with root package name */
    private final float f43193s;

    /* renamed from: t  reason: collision with root package name */
    private final float f43194t;

    /* renamed from: u  reason: collision with root package name */
    private final List f43195u;

    /* renamed from: v  reason: collision with root package name */
    private final List f43196v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f43186d = i10;
        this.f43187e = rect;
        this.f43188i = f10;
        this.f43189o = f11;
        this.f43190p = f12;
        this.f43191q = f13;
        this.f43192r = f14;
        this.f43193s = f15;
        this.f43194t = f16;
        this.f43195u = list;
        this.f43196v = list2;
    }

    public final float b() {
        return this.f43191q;
    }

    public final float c() {
        return this.f43189o;
    }

    public final float d() {
        return this.f43192r;
    }

    public final float e() {
        return this.f43188i;
    }

    public final float f() {
        return this.f43193s;
    }

    public final float g() {
        return this.f43190p;
    }

    public final int i() {
        return this.f43186d;
    }

    public final Rect j() {
        return this.f43187e;
    }

    public final List k() {
        return this.f43196v;
    }

    public final List m() {
        return this.f43195u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43186d);
        hf.c.q(parcel, 2, this.f43187e, i10, false);
        hf.c.j(parcel, 3, this.f43188i);
        hf.c.j(parcel, 4, this.f43189o);
        hf.c.j(parcel, 5, this.f43190p);
        hf.c.j(parcel, 6, this.f43191q);
        hf.c.j(parcel, 7, this.f43192r);
        hf.c.j(parcel, 8, this.f43193s);
        hf.c.j(parcel, 9, this.f43194t);
        hf.c.w(parcel, 10, this.f43195u, false);
        hf.c.w(parcel, 11, this.f43196v, false);
        hf.c.b(parcel, a10);
    }
}
