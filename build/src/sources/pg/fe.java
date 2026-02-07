package pg;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe extends hf.a {
    public static final Parcelable.Creator<fe> CREATOR = new ge();

    /* renamed from: d  reason: collision with root package name */
    private final int f44278d;

    /* renamed from: e  reason: collision with root package name */
    private final List f44279e;

    public fe(int i10, List list) {
        this.f44278d = i10;
        this.f44279e = list;
    }

    public final int b() {
        return this.f44278d;
    }

    public final List c() {
        return this.f44279e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44278d);
        hf.c.w(parcel, 2, this.f44279e, false);
        hf.c.b(parcel, a10);
    }
}
