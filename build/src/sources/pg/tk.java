package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tk extends hf.a {
    public static final Parcelable.Creator<tk> CREATOR = new uk();

    /* renamed from: d  reason: collision with root package name */
    private final String f45739d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45740e;

    /* renamed from: i  reason: collision with root package name */
    private final List f45741i;

    /* renamed from: o  reason: collision with root package name */
    private final String f45742o;

    /* renamed from: p  reason: collision with root package name */
    private final float f45743p;

    /* renamed from: q  reason: collision with root package name */
    private final float f45744q;

    /* renamed from: r  reason: collision with root package name */
    private final List f45745r;

    public tk(String str, Rect rect, List list, String str2, float f10, float f11, List list2) {
        this.f45739d = str;
        this.f45740e = rect;
        this.f45741i = list;
        this.f45742o = str2;
        this.f45743p = f10;
        this.f45744q = f11;
        this.f45745r = list2;
    }

    public final float b() {
        return this.f45744q;
    }

    public final float c() {
        return this.f45743p;
    }

    public final Rect d() {
        return this.f45740e;
    }

    public final String e() {
        return this.f45742o;
    }

    public final String f() {
        return this.f45739d;
    }

    public final List g() {
        return this.f45741i;
    }

    public final List i() {
        return this.f45745r;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45739d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f45740e, i10, false);
        hf.c.w(parcel, 3, this.f45741i, false);
        hf.c.s(parcel, 4, this.f45742o, false);
        hf.c.j(parcel, 5, this.f45743p);
        hf.c.j(parcel, 6, this.f45744q);
        hf.c.w(parcel, 7, this.f45745r, false);
        hf.c.b(parcel, a10);
    }
}
