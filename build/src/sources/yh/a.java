package yh;

import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import sg.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a extends IInterface {

    /* renamed from: yh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractBinderC0776a extends sg.b implements a {

        /* renamed from: yh.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static class C0777a extends sg.a implements a {
            C0777a(IBinder iBinder) {
                super(iBinder, "com.google.android.play.agesignals.protocol.IAgeSignalsService");
            }

            @Override // yh.a
            public void Q(String str, Bundle bundle, b bVar) {
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
            return new C0777a(iBinder);
        }
    }

    void Q(String str, Bundle bundle, b bVar);
}
