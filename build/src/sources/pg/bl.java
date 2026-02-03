package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class bl extends hf.a {
    public static final Parcelable.Creator<bl> CREATOR = new cl();

    /* renamed from: d  reason: collision with root package name */
    private final String f45203d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45204e;

    /* renamed from: i  reason: collision with root package name */
    private final List f45205i;

    /* renamed from: o  reason: collision with root package name */
    private final float f45206o;

    /* renamed from: p  reason: collision with root package name */
    private final float f45207p;

    public bl(String str, Rect rect, List list, float f10, float f11) {
        this.f45203d = str;
        this.f45204e = rect;
        this.f45205i = list;
        this.f45206o = f10;
        this.f45207p = f11;
    }

    public final float b() {
        return this.f45207p;
    }

    public final float c() {
        return this.f45206o;
    }

    public final Rect d() {
        return this.f45204e;
    }

    public final String e() {
        return this.f45203d;
    }

    public final List f() {
        return this.f45205i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45203d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f45204e, i10, false);
        hf.c.w(parcel, 3, this.f45205i, false);
        hf.c.j(parcel, 4, this.f45206o);
        hf.c.j(parcel, 5, this.f45207p);
        hf.c.b(parcel, a10);
    }
}
