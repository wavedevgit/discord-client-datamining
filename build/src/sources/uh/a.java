package uh;

import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import qg.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a extends IInterface {

    /* renamed from: uh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractBinderC0664a extends qg.b implements a {

        /* renamed from: uh.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static class C0665a extends qg.a implements a {
            C0665a(IBinder iBinder) {
                super(iBinder, "com.google.android.play.agesignals.protocol.IAgeSignalsService");
            }

            @Override // uh.a
            public void T(String str, Bundle bundle, b bVar) {
                Parcel e10 = e();
                e10.writeString(str);
                c.c(e10, bundle);
                if (bVar == null) {
                    e10.writeStrongBinder(null);
                } else {
                    e10.writeStrongBinder(bVar.asBinder());
                }
                f(1, e10);
            }
        }

        public static a f(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.play.agesignals.protocol.IAgeSignalsService");
            if (queryLocalInterface instanceof a) {
                return (a) queryLocalInterface;
            }
            return new C0665a(iBinder);
        }
    }

    void T(String str, Bundle bundle, b bVar);
}
