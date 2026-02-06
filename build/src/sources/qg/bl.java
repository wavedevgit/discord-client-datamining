package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class bl extends hf.a {
    public static final Parcelable.Creator<bl> CREATOR = new cl();

    /* renamed from: d  reason: collision with root package name */
    private final String f46963d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f46964e;

    /* renamed from: i  reason: collision with root package name */
    private final List f46965i;

    /* renamed from: o  reason: collision with root package name */
    private final float f46966o;

    /* renamed from: p  reason: collision with root package name */
    private final float f46967p;

    public bl(String str, Rect rect, List list, float f10, float f11) {
        this.f46963d = str;
        this.f46964e = rect;
        this.f46965i = list;
        this.f46966o = f10;
        this.f46967p = f11;
    }

    public final float b() {
        return this.f46967p;
    }

    public final float c() {
        return this.f46966o;
    }

    public final Rect d() {
        return this.f46964e;
    }

    public final String e() {
        return this.f46963d;
    }

    public final List f() {
        return this.f46965i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f46963d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f46964e, i10, false);
        hf.c.w(parcel, 3, this.f46965i, false);
        hf.c.j(parcel, 4, this.f46966o);
        hf.c.j(parcel, 5, this.f46967p);
        hf.c.b(parcel, a10);
    }
}
