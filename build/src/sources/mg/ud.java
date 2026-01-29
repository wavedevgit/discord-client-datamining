package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ud extends hf.a {
    public static final Parcelable.Creator<ud> CREATOR = new e();

    /* renamed from: d  reason: collision with root package name */
    public int f38702d;

    /* renamed from: e  reason: collision with root package name */
    public String f38703e;

    public ud(int i10, String str) {
        this.f38702d = i10;
        this.f38703e = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38702d);
        hf.c.s(parcel, 3, this.f38703e, false);
        hf.c.b(parcel, a10);
    }
}
