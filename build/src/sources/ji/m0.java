package ji;

import android.os.Bundle;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m0 extends b0 implements n0 {
    public m0() {
        super("com.google.android.play.core.integrity.protocol.IExpressIntegrityServiceCallback");
    }

    @Override // ji.b0
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4) {
                    if (i10 != 5) {
                        return false;
                    }
                    f0.b(parcel);
                    d((Bundle) f0.a(parcel, Bundle.CREATOR));
                    return true;
                }
                f0.b(parcel);
                g((Bundle) f0.a(parcel, Bundle.CREATOR));
                return true;
            }
            f0.b(parcel);
            c((Bundle) f0.a(parcel, Bundle.CREATOR));
            return true;
        }
        f0.b(parcel);
        B0((Bundle) f0.a(parcel, Bundle.CREATOR));
        return true;
    }
}
