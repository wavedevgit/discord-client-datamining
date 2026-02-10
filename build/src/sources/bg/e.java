package bg;

import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e extends b implements f {
    public e() {
        super("com.google.android.gms.appset.internal.IAppSetIdCallback");
    }

    @Override // bg.b
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            j((Status) c.a(parcel, Status.CREATOR), (ue.f) c.a(parcel, ue.f.CREATOR));
            return true;
        }
        return false;
    }
}
