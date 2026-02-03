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
    private final int f26204d;

    /* renamed from: e  reason: collision with root package name */
    private List f26205e;

    public u(int i10, List list) {
        this.f26204d = i10;
        this.f26205e = list;
    }

    public final int b() {
        return this.f26204d;
    }

    public final List c() {
        return this.f26205e;
    }

    public final void d(n nVar) {
        if (this.f26205e == null) {
            this.f26205e = new ArrayList();
        }
        this.f26205e.add(nVar);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f26204d);
        hf.c.w(parcel, 2, this.f26205e, false);
        hf.c.b(parcel, a10);
    }
}
