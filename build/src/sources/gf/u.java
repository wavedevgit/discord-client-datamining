package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u extends hf.a {
    @NonNull
    public static final Parcelable.Creator<u> CREATOR = new y();

    /* renamed from: d  reason: collision with root package name */
    private final int f26991d;

    /* renamed from: e  reason: collision with root package name */
    private List f26992e;

    public u(int i10, List list) {
        this.f26991d = i10;
        this.f26992e = list;
    }

    public final int b() {
        return this.f26991d;
    }

    public final List c() {
        return this.f26992e;
    }

    public final void d(n nVar) {
        if (this.f26992e == null) {
            this.f26992e = new ArrayList();
        }
        this.f26992e.add(nVar);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f26991d);
        hf.c.w(parcel, 2, this.f26992e, false);
        hf.c.b(parcel, a10);
    }
}
