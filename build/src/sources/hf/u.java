package hf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends jf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new y();

    /* renamed from: d  reason: collision with root package name */
    private final int f27329d;

    /* renamed from: e  reason: collision with root package name */
    private List f27330e;

    public u(int i10, List list) {
        this.f27329d = i10;
        this.f27330e = list;
    }

    public final int b() {
        return this.f27329d;
    }

    public final List c() {
        return this.f27330e;
    }

    public final void d(n nVar) {
        if (this.f27330e == null) {
            this.f27330e = new ArrayList();
        }
        this.f27330e.add(nVar);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f27329d);
        jf.c.w(parcel, 2, this.f27330e, false);
        jf.c.b(parcel, a10);
    }
}
