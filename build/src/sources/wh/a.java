package wh;

import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import sg.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a extends IInterface {

    /* renamed from: wh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractBinderC0748a extends sg.b implements a {

        /* renamed from: wh.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static class C0749a extends sg.a implements a {
            C0749a(IBinder iBinder) {
                super(iBinder, "com.google.android.play.agesignals.protocol.IAgeSignalsService");
            }

            @Override // wh.a
            public void J(String str, Bundle bundle, b bVar) {
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
            return new C0749a(iBinder);
        }
    }

    void J(String str, Bundle bundle, b bVar);
}
