package te;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends hf.a {
    public static final Parcelable.Creator<f> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    private final String f50644d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50645e;

    public f(String str, int i10) {
        this.f50644d = str;
        this.f50645e = i10;
    }

    public final int b() {
        return this.f50645e;
    }

    public final String c() {
        return this.f50644d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, this.f50644d, false);
        hf.c.l(parcel, 2, this.f50645e);
        hf.c.b(parcel, a10);
    }
}
