package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m5 extends hf.a {
    public static final Parcelable.Creator<m5> CREATOR = new l4();

    /* renamed from: d  reason: collision with root package name */
    public int f40081d;

    /* renamed from: e  reason: collision with root package name */
    public String[] f40082e;

    public m5(int i10, String[] strArr) {
        this.f40081d = i10;
        this.f40082e = strArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f40081d);
        hf.c.t(parcel, 3, this.f40082e, false);
        hf.c.b(parcel, a10);
    }
}
