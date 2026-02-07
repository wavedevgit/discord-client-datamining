package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class bl extends hf.a {
    public static final Parcelable.Creator<bl> CREATOR = new cl();

    /* renamed from: d  reason: collision with root package name */
    private final String f47011d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47012e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47013i;

    /* renamed from: o  reason: collision with root package name */
    private final float f47014o;

    /* renamed from: p  reason: collision with root package name */
    private final float f47015p;

    public bl(String str, Rect rect, List list, float f10, float f11) {
        this.f47011d = str;
        this.f47012e = rect;
        this.f47013i = list;
        this.f47014o = f10;
        this.f47015p = f11;
    }

    public final float b() {
        return this.f47015p;
    }

    public final float c() {
        return this.f47014o;
    }

    public final Rect d() {
        return this.f47012e;
    }

    public final String e() {
        return this.f47011d;
    }

    public final List f() {
        return this.f47013i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47011d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f47012e, i10, false);
        hf.c.w(parcel, 3, this.f47013i, false);
        hf.c.j(parcel, 4, this.f47014o);
        hf.c.j(parcel, 5, this.f47015p);
        hf.c.b(parcel, a10);
    }
}
