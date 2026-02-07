package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tk extends hf.a {
    public static final Parcelable.Creator<tk> CREATOR = new uk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47595d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47596e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47597i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47598o;

    /* renamed from: p  reason: collision with root package name */
    private final float f47599p;

    /* renamed from: q  reason: collision with root package name */
    private final float f47600q;

    /* renamed from: r  reason: collision with root package name */
    private final List f47601r;

    public tk(String str, Rect rect, List list, String str2, float f10, float f11, List list2) {
        this.f47595d = str;
        this.f47596e = rect;
        this.f47597i = list;
        this.f47598o = str2;
        this.f47599p = f10;
        this.f47600q = f11;
        this.f47601r = list2;
    }

    public final float b() {
        return this.f47600q;
    }

    public final float c() {
        return this.f47599p;
    }

    public final Rect d() {
        return this.f47596e;
    }

    public final String e() {
        return this.f47598o;
    }

    public final String f() {
        return this.f47595d;
    }

    public final List h() {
        return this.f47597i;
    }

    public final List i() {
        return this.f47601r;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47595d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f47596e, i10, false);
        hf.c.w(parcel, 3, this.f47597i, false);
        hf.c.s(parcel, 4, this.f47598o, false);
        hf.c.j(parcel, 5, this.f47599p);
        hf.c.j(parcel, 6, this.f47600q);
        hf.c.w(parcel, 7, this.f47601r, false);
        hf.c.b(parcel, a10);
    }
}
