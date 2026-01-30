package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk extends hf.a {
    public static final Parcelable.Creator<vk> CREATOR = new wk();

    /* renamed from: d  reason: collision with root package name */
    private final String f45811d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45812e;

    /* renamed from: i  reason: collision with root package name */
    private final List f45813i;

    /* renamed from: o  reason: collision with root package name */
    private final String f45814o;

    /* renamed from: p  reason: collision with root package name */
    private final List f45815p;

    /* renamed from: q  reason: collision with root package name */
    private final float f45816q;

    /* renamed from: r  reason: collision with root package name */
    private final float f45817r;

    public vk(String str, Rect rect, List list, String str2, List list2, float f10, float f11) {
        this.f45811d = str;
        this.f45812e = rect;
        this.f45813i = list;
        this.f45814o = str2;
        this.f45815p = list2;
        this.f45816q = f10;
        this.f45817r = f11;
    }

    public final float b() {
        return this.f45817r;
    }

    public final float c() {
        return this.f45816q;
    }

    public final Rect d() {
        return this.f45812e;
    }

    public final String e() {
        return this.f45814o;
    }

    public final String f() {
        return this.f45811d;
    }

    public final List g() {
        return this.f45813i;
    }

    public final List i() {
        return this.f45815p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45811d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f45812e, i10, false);
        hf.c.w(parcel, 3, this.f45813i, false);
        hf.c.s(parcel, 4, this.f45814o, false);
        hf.c.w(parcel, 5, this.f45815p, false);
        hf.c.j(parcel, 6, this.f45816q);
        hf.c.j(parcel, 7, this.f45817r);
        hf.c.b(parcel, a10);
    }
}
