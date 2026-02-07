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
    private final int f25200d;

    /* renamed from: e  reason: collision with root package name */
    private List f25201e;

    public u(int i10, List list) {
        this.f25200d = i10;
        this.f25201e = list;
    }

    public final int b() {
        return this.f25200d;
    }

    public final List c() {
        return this.f25201e;
    }

    public final void d(n nVar) {
        if (this.f25201e == null) {
            this.f25201e = new ArrayList();
        }
        this.f25201e.add(nVar);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f25200d);
        hf.c.w(parcel, 2, this.f25201e, false);
        hf.c.b(parcel, a10);
    }
}
