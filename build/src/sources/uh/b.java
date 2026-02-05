package uh;

import android.os.Bundle;
import android.os.IInterface;
import android.os.Parcel;
import qg.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a extends qg.b implements b {
        public a() {
            super("com.google.android.play.agesignals.protocol.IAgeSignalsServiceCallback");
        }

        @Override // qg.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 != 1) {
                if (i10 != 3) {
                    return false;
                }
                c.b(parcel);
                X((Bundle) c.a(parcel, Bundle.CREATOR));
            } else {
                c.b(parcel);
                u((Bundle) c.a(parcel, Bundle.CREATOR));
            }
            return true;
        }
    }

    void X(Bundle bundle);

    void u(Bundle bundle);
}
