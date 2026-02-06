package qg;

import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qk extends hf.a {
    public static final Parcelable.Creator<qk> CREATOR = new sk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47475d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f47476e;

    /* renamed from: i  reason: collision with root package name */
    private final List f47477i;

    /* renamed from: o  reason: collision with root package name */
    private final String f47478o;

    /* renamed from: p  reason: collision with root package name */
    private final List f47479p;

    public qk(String str, Rect rect, List list, String str2, List list2) {
        this.f47475d = str;
        this.f47476e = rect;
        this.f47477i = list;
        this.f47478o = str2;
        this.f47479p = list2;
    }

    public final Rect b() {
        return this.f47476e;
    }

    public final String c() {
        return this.f47478o;
    }

    public final String d() {
        return this.f47475d;
    }

    public final List e() {
        return this.f47477i;
    }

    public final List f() {
        return this.f47479p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47475d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.q(parcel, 2, this.f47476e, i10, false);
        hf.c.w(parcel, 3, this.f47477i, false);
        hf.c.s(parcel, 4, this.f47478o, false);
        hf.c.w(parcel, 5, this.f47479p, false);
        hf.c.b(parcel, a10);
    }
}
