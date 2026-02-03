package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk extends hf.a {
    public static final Parcelable.Creator<vk> CREATOR = new wk();

    /* renamed from: d  reason: collision with root package name */
    private final String f45843d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45844e;

    /* renamed from: i  reason: collision with root package name */
    private final List f45845i;

    /* renamed from: o  reason: collision with root package name */
    private final String f45846o;

    /* renamed from: p  reason: collision with root package name */
    private final List f45847p;

    /* renamed from: q  reason: collision with root package name */
    private final float f45848q;

    /* renamed from: r  reason: collision with root package name */
    private final float f45849r;

    public vk(String str, Rect rect, List list, String str2, List list2, float f10, float f11) {
        this.f45843d = str;
        this.f45844e = rect;
        this.f45845i = list;
        this.f45846o = str2;
        this.f45847p = list2;
        this.f45848q = f10;
        this.f45849r = f11;
    }

    public final float b() {
        return this.f45849r;
    }

    public final float c() {
        return this.f45848q;
    }

    public final Rect d() {
        return this.f45844e;
    }

    public final String e() {
        return this.f45846o;
    }

    public final String f() {
        return this.f45843d;
    }

    public final List g() {
        return this.f45845i;
    }

    public final List i() {
        return this.f45847p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45843d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f45844e, i10, false);
        hf.c.w(parcel, 3, this.f45845i, false);
        hf.c.s(parcel, 4, this.f45846o, false);
        hf.c.w(parcel, 5, this.f45847p, false);
        hf.c.j(parcel, 6, this.f45848q);
        hf.c.j(parcel, 7, this.f45849r);
        hf.c.b(parcel, a10);
    }
}
