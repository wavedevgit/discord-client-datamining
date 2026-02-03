package og;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class je extends hf.a {
    public static final Parcelable.Creator<je> CREATOR = new ke();

    /* renamed from: d  reason: collision with root package name */
    private final int f43330d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f43331e;

    /* renamed from: i  reason: collision with root package name */
    private final float f43332i;

    /* renamed from: o  reason: collision with root package name */
    private final float f43333o;

    /* renamed from: p  reason: collision with root package name */
    private final float f43334p;

    /* renamed from: q  reason: collision with root package name */
    private final float f43335q;

    /* renamed from: r  reason: collision with root package name */
    private final float f43336r;

    /* renamed from: s  reason: collision with root package name */
    private final float f43337s;

    /* renamed from: t  reason: collision with root package name */
    private final float f43338t;

    /* renamed from: u  reason: collision with root package name */
    private final List f43339u;

    /* renamed from: v  reason: collision with root package name */
    private final List f43340v;

    public je(int i10, Rect rect, float f10, float f11, float f12, float f13, float f14, float f15, float f16, List list, List list2) {
        this.f43330d = i10;
        this.f43331e = rect;
        this.f43332i = f10;
        this.f43333o = f11;
        this.f43334p = f12;
        this.f43335q = f13;
        this.f43336r = f14;
        this.f43337s = f15;
        this.f43338t = f16;
        this.f43339u = list;
        this.f43340v = list2;
    }

    public final float b() {
        return this.f43335q;
    }

    public final float c() {
        return this.f43333o;
    }

    public final float d() {
        return this.f43336r;
    }

    public final float e() {
        return this.f43332i;
    }

    public final float f() {
        return this.f43337s;
    }

    public final float g() {
        return this.f43334p;
    }

    public final int i() {
        return this.f43330d;
    }

    public final Rect j() {
        return this.f43331e;
    }

    public final List k() {
        return this.f43340v;
    }

    public final List m() {
        return this.f43339u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43330d);
        hf.c.q(parcel, 2, this.f43331e, i10, false);
        hf.c.j(parcel, 3, this.f43332i);
        hf.c.j(parcel, 4, this.f43333o);
        hf.c.j(parcel, 5, this.f43334p);
        hf.c.j(parcel, 6, this.f43335q);
        hf.c.j(parcel, 7, this.f43336r);
        hf.c.j(parcel, 8, this.f43337s);
        hf.c.j(parcel, 9, this.f43338t);
        hf.c.w(parcel, 10, this.f43339u, false);
        hf.c.w(parcel, 11, this.f43340v, false);
        hf.c.b(parcel, a10);
    }
}
