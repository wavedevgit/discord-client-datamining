package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends hf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f44378d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f44379e;

    /* renamed from: i  reason: collision with root package name */
    private final float f44380i;

    /* renamed from: o  reason: collision with root package name */
    private final float f44381o;

    /* renamed from: p  reason: collision with root package name */
    private final float f44382p;

    /* renamed from: q  reason: collision with root package name */
    private final float f44383q;

    /* renamed from: r  reason: collision with root package name */
    private final float f44384r;

    /* renamed from: s  reason: collision with root package name */
    private final float f44385s;

    /* renamed from: t  reason: collision with root package name */
    private final float f44386t;

    /* renamed from: u  reason: collision with root package name */
    private final List f44387u;

    /* renamed from: v  reason: collision with root package name */
    private final List f44388v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f44378d = i10;
        this.f44379e = rect;
        this.f44380i = f10;
        this.f44381o = f11;
        this.f44382p = f12;
        this.f44383q = f13;
        this.f44384r = f14;
        this.f44385s = f15;
        this.f44386t = f16;
        this.f44387u = list;
        this.f44388v = list2;
    }

    public final float b() {
        return this.f44383q;
    }

    public final float c() {
        return this.f44381o;
    }

    public final float d() {
        return this.f44384r;
    }

    public final float e() {
        return this.f44380i;
    }

    public final float f() {
        return this.f44385s;
    }

    public final float h() {
        return this.f44382p;
    }

    public final int i() {
        return this.f44378d;
    }

    public final Rect j() {
        return this.f44379e;
    }

    public final List l() {
        return this.f44388v;
    }

    public final List o() {
        return this.f44387u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44378d);
        hf.c.q(parcel, 2, this.f44379e, i10, false);
        hf.c.j(parcel, 3, this.f44380i);
        hf.c.j(parcel, 4, this.f44381o);
        hf.c.j(parcel, 5, this.f44382p);
        hf.c.j(parcel, 6, this.f44383q);
        hf.c.j(parcel, 7, this.f44384r);
        hf.c.j(parcel, 8, this.f44385s);
        hf.c.j(parcel, 9, this.f44386t);
        hf.c.w(parcel, 10, this.f44387u, false);
        hf.c.w(parcel, 11, this.f44388v, false);
        hf.c.b(parcel, a10);
    }
}
