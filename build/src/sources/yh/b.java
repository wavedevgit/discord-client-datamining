package yh;

import android.os.Bundle;
import android.os.IInterface;
import android.os.Parcel;
import sg.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a extends sg.b implements b {
        public a() {
            super("com.google.android.play.agesignals.protocol.IAgeSignalsServiceCallback");
        }

        @Override // sg.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 != 1) {
                if (i10 != 3) {
                    return false;
                }
                c.b(parcel);
                d0((Bundle) c.a(parcel, Bundle.CREATOR));
            } else {
                c.b(parcel);
                y((Bundle) c.a(parcel, Bundle.CREATOR));
            }
            return true;
        }
    }

    void d0(Bundle bundle);

    void y(Bundle bundle);
}
