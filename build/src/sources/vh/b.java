package vh;

import android.os.Bundle;
import android.os.IInterface;
import android.os.Parcel;
import rg.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a extends rg.b implements b {
        public a() {
            super("com.google.android.play.agesignals.protocol.IAgeSignalsServiceCallback");
        }

        @Override // rg.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 != 1) {
                if (i10 != 3) {
                    return false;
                }
                c.b(parcel);
                Z((Bundle) c.a(parcel, Bundle.CREATOR));
            } else {
                c.b(parcel);
                t((Bundle) c.a(parcel, Bundle.CREATOR));
            }
            return true;
        }
    }

    void Z(Bundle bundle);

    void t(Bundle bundle);
}
