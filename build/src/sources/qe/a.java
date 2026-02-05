package qe;

import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import wb.b;
import wb.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: qe.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0599a extends b implements a {

        /* renamed from: qe.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0600a extends wb.a implements a {
            C0600a(IBinder iBinder) {
                super(iBinder);
            }

            @Override // qe.a
            public final Bundle c(Bundle bundle) {
                Parcel e10 = e();
                c.b(e10, bundle);
                Parcel f10 = f(e10);
                Bundle bundle2 = (Bundle) c.a(f10, Bundle.CREATOR);
                f10.recycle();
                return bundle2;
            }
        }

        public static a e(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.finsky.externalreferrer.IGetInstallReferrerService");
            if (queryLocalInterface instanceof a) {
                return (a) queryLocalInterface;
            }
            return new C0600a(iBinder);
        }
    }

    Bundle c(Bundle bundle);
}
