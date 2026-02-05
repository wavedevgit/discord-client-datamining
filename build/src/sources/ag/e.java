package ag;

import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e extends b implements f {
    public e() {
        super("com.google.android.gms.appset.internal.IAppSetIdCallback");
    }

    @Override // ag.b
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            o((Status) c.a(parcel, Status.CREATOR), (te.f) c.a(parcel, te.f.CREATOR));
            return true;
        }
        return false;
    }
}
