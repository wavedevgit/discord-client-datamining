package rg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class bl extends jf.a {
    public static final Parcelable.Creator<bl> CREATOR = new cl();

    /* renamed from: d  reason: collision with root package name */
    private final String f48129d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f48130e;

    /* renamed from: i  reason: collision with root package name */
    private final List f48131i;

    /* renamed from: o  reason: collision with root package name */
    private final float f48132o;

    /* renamed from: p  reason: collision with root package name */
    private final float f48133p;

    public bl(String str, Rect rect, List list, float f10, float f11) {
        this.f48129d = str;
        this.f48130e = rect;
        this.f48131i = list;
        this.f48132o = f10;
        this.f48133p = f11;
    }

    public final float b() {
        return this.f48133p;
    }

    public final float c() {
        return this.f48132o;
    }

    public final Rect d() {
        return this.f48130e;
    }

    public final String e() {
        return this.f48129d;
    }

    public final List f() {
        return this.f48131i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f48129d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.q(parcel, 2, this.f48130e, i10, false);
        jf.c.w(parcel, 3, this.f48131i, false);
        jf.c.j(parcel, 4, this.f48132o);
        jf.c.j(parcel, 5, this.f48133p);
        jf.c.b(parcel, a10);
    }
}
