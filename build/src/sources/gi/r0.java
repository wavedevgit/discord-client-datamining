package gi;

import android.os.Bundle;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r0 extends b0 implements s0 {
    public r0() {
        super("com.google.android.play.core.integrity.protocol.IIntegrityServiceCallback");
    }

    @Override // gi.b0
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 2) {
            f0.b(parcel);
            d((Bundle) f0.a(parcel, Bundle.CREATOR));
            return true;
        }
        return false;
    }
}
