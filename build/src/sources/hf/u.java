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
    private final int f27330d;

    /* renamed from: e  reason: collision with root package name */
    private List f27331e;

    public u(int i10, List list) {
        this.f27330d = i10;
        this.f27331e = list;
    }

    public final int b() {
        return this.f27330d;
    }

    public final List c() {
        return this.f27331e;
    }

    public final void d(n nVar) {
        if (this.f27331e == null) {
            this.f27331e = new ArrayList();
        }
        this.f27331e.add(nVar);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f27330d);
        jf.c.w(parcel, 2, this.f27331e, false);
        jf.c.b(parcel, a10);
    }
}
