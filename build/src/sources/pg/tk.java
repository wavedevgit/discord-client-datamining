package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tk extends hf.a {
    public static final Parcelable.Creator<tk> CREATOR = new uk();

    /* renamed from: d  reason: collision with root package name */
    private final String f45755d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45756e;

    /* renamed from: i  reason: collision with root package name */
    private final List f45757i;

    /* renamed from: o  reason: collision with root package name */
    private final String f45758o;

    /* renamed from: p  reason: collision with root package name */
    private final float f45759p;

    /* renamed from: q  reason: collision with root package name */
    private final float f45760q;

    /* renamed from: r  reason: collision with root package name */
    private final List f45761r;

    public tk(String str, Rect rect, List list, String str2, float f10, float f11, List list2) {
        this.f45755d = str;
        this.f45756e = rect;
        this.f45757i = list;
        this.f45758o = str2;
        this.f45759p = f10;
        this.f45760q = f11;
        this.f45761r = list2;
    }

    public final float b() {
        return this.f45760q;
    }

    public final float c() {
        return this.f45759p;
    }

    public final Rect d() {
        return this.f45756e;
    }

    public final String e() {
        return this.f45758o;
    }

    public final String f() {
        return this.f45755d;
    }

    public final List g() {
        return this.f45757i;
    }

    public final List i() {
        return this.f45761r;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45755d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f45756e, i10, false);
        hf.c.w(parcel, 3, this.f45757i, false);
        hf.c.s(parcel, 4, this.f45758o, false);
        hf.c.j(parcel, 5, this.f45759p);
        hf.c.j(parcel, 6, this.f45760q);
        hf.c.w(parcel, 7, this.f45761r, false);
        hf.c.b(parcel, a10);
    }
}
