package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends hf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f44426d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f44427e;

    /* renamed from: i  reason: collision with root package name */
    private final float f44428i;

    /* renamed from: o  reason: collision with root package name */
    private final float f44429o;

    /* renamed from: p  reason: collision with root package name */
    private final float f44430p;

    /* renamed from: q  reason: collision with root package name */
    private final float f44431q;

    /* renamed from: r  reason: collision with root package name */
    private final float f44432r;

    /* renamed from: s  reason: collision with root package name */
    private final float f44433s;

    /* renamed from: t  reason: collision with root package name */
    private final float f44434t;

    /* renamed from: u  reason: collision with root package name */
    private final List f44435u;

    /* renamed from: v  reason: collision with root package name */
    private final List f44436v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f44426d = i10;
        this.f44427e = rect;
        this.f44428i = f10;
        this.f44429o = f11;
        this.f44430p = f12;
        this.f44431q = f13;
        this.f44432r = f14;
        this.f44433s = f15;
        this.f44434t = f16;
        this.f44435u = list;
        this.f44436v = list2;
    }

    public final float b() {
        return this.f44431q;
    }

    public final float c() {
        return this.f44429o;
    }

    public final float d() {
        return this.f44432r;
    }

    public final float e() {
        return this.f44428i;
    }

    public final float f() {
        return this.f44433s;
    }

    public final float h() {
        return this.f44430p;
    }

    public final int i() {
        return this.f44426d;
    }

    public final Rect j() {
        return this.f44427e;
    }

    public final List l() {
        return this.f44436v;
    }

    public final List o() {
        return this.f44435u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44426d);
        hf.c.q(parcel, 2, this.f44427e, i10, false);
        hf.c.j(parcel, 3, this.f44428i);
        hf.c.j(parcel, 4, this.f44429o);
        hf.c.j(parcel, 5, this.f44430p);
        hf.c.j(parcel, 6, this.f44431q);
        hf.c.j(parcel, 7, this.f44432r);
        hf.c.j(parcel, 8, this.f44433s);
        hf.c.j(parcel, 9, this.f44434t);
        hf.c.w(parcel, 10, this.f44435u, false);
        hf.c.w(parcel, 11, this.f44436v, false);
        hf.c.b(parcel, a10);
    }
}
