package ei;

import android.os.Bundle;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g extends b implements h {
    public g() {
        super("com.google.android.play.core.inappreview.protocol.IInAppReviewServiceCallback");
    }

    @Override // ei.b
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 2) {
            c.b(parcel);
            H0((Bundle) c.a(parcel, Bundle.CREATOR));
            return true;
        }
        return false;
    }
}
