package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class bl extends hf.a {
    public static final Parcelable.Creator<bl> CREATOR = new cl();

    /* renamed from: d  reason: collision with root package name */
    private final String f45245d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45246e;

    /* renamed from: i  reason: collision with root package name */
    private final List f45247i;

    /* renamed from: o  reason: collision with root package name */
    private final float f45248o;

    /* renamed from: p  reason: collision with root package name */
    private final float f45249p;

    public bl(String str, Rect rect, List list, float f10, float f11) {
        this.f45245d = str;
        this.f45246e = rect;
        this.f45247i = list;
        this.f45248o = f10;
        this.f45249p = f11;
    }

    public final float b() {
        return this.f45249p;
    }

    public final float c() {
        return this.f45248o;
    }

    public final Rect d() {
        return this.f45246e;
    }

    public final String e() {
        return this.f45245d;
    }

    public final List f() {
        return this.f45247i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45245d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f45246e, i10, false);
        hf.c.w(parcel, 3, this.f45247i, false);
        hf.c.j(parcel, 4, this.f45248o);
        hf.c.j(parcel, 5, this.f45249p);
        hf.c.b(parcel, a10);
    }
}
