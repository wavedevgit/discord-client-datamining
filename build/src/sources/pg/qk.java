package pg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qk extends hf.a {
    public static final Parcelable.Creator<qk> CREATOR = new sk();

    /* renamed from: d  reason: collision with root package name */
    private final String f45683d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f45684e;

    /* renamed from: i  reason: collision with root package name */
    private final List f45685i;

    /* renamed from: o  reason: collision with root package name */
    private final String f45686o;

    /* renamed from: p  reason: collision with root package name */
    private final List f45687p;

    public qk(String str, Rect rect, List list, String str2, List list2) {
        this.f45683d = str;
        this.f45684e = rect;
        this.f45685i = list;
        this.f45686o = str2;
        this.f45687p = list2;
    }

    public final Rect b() {
        return this.f45684e;
    }

    public final String c() {
        return this.f45686o;
    }

    public final String d() {
        return this.f45683d;
    }

    public final List e() {
        return this.f45685i;
    }

    public final List f() {
        return this.f45687p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45683d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f45684e, i10, false);
        hf.c.w(parcel, 3, this.f45685i, false);
        hf.c.s(parcel, 4, this.f45686o, false);
        hf.c.w(parcel, 5, this.f45687p, false);
        hf.c.b(parcel, a10);
    }
}
