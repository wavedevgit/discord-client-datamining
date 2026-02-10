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
    private final int f26111d;

    /* renamed from: e  reason: collision with root package name */
    private List f26112e;

    public u(int i10, List list) {
        this.f26111d = i10;
        this.f26112e = list;
    }

    public final int b() {
        return this.f26111d;
    }

    public final List c() {
        return this.f26112e;
    }

    public final void d(n nVar) {
        if (this.f26112e == null) {
            this.f26112e = new ArrayList();
        }
        this.f26112e.add(nVar);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f26111d);
        jf.c.w(parcel, 2, this.f26112e, false);
        jf.c.b(parcel, a10);
    }
}
