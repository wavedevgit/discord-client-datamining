package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk extends hf.a {
    public static final Parcelable.Creator<vk> CREATOR = new wk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47651d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47652e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47653i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47654o;

    /* renamed from: p  reason: collision with root package name */
    private final List f47655p;

    /* renamed from: q  reason: collision with root package name */
    private final float f47656q;

    /* renamed from: r  reason: collision with root package name */
    private final float f47657r;

    public vk(String str, Rect rect, List list, String str2, List list2, float f10, float f11) {
        this.f47651d = str;
        this.f47652e = rect;
        this.f47653i = list;
        this.f47654o = str2;
        this.f47655p = list2;
        this.f47656q = f10;
        this.f47657r = f11;
    }

    public final float b() {
        return this.f47657r;
    }

    public final float c() {
        return this.f47656q;
    }

    public final Rect d() {
        return this.f47652e;
    }

    public final String e() {
        return this.f47654o;
    }

    public final String f() {
        return this.f47651d;
    }

    public final List h() {
        return this.f47653i;
    }

    public final List i() {
        return this.f47655p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47651d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f47652e, i10, false);
        hf.c.w(parcel, 3, this.f47653i, false);
        hf.c.s(parcel, 4, this.f47654o, false);
        hf.c.w(parcel, 5, this.f47655p, false);
        hf.c.j(parcel, 6, this.f47656q);
        hf.c.j(parcel, 7, this.f47657r);
        hf.c.b(parcel, a10);
    }
}
