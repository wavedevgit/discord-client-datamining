package qg;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe extends jf.a {
    public static final Parcelable.Creator<fe> CREATOR = new ge();

    /* renamed from: d  reason: collision with root package name */
    private final int f44461d;

    /* renamed from: e  reason: collision with root package name */
    private final List f44462e;

    public fe(int i10, List list) {
        this.f44461d = i10;
        this.f44462e = list;
    }

    public final int b() {
        return this.f44461d;
    }

    public final List c() {
        return this.f44462e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f44461d);
        jf.c.w(parcel, 2, this.f44462e, false);
        jf.c.b(parcel, a10);
    }
}
