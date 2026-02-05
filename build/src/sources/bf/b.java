package bf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends eg.c implements b {

        /* renamed from: bf.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0101a extends eg.a implements b {
            C0101a(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.auth.blockstore.restorecredential.internal.IRestoreCredentialService");
            }

            @Override // bf.b
            public void Z(af.a aVar, bf.a aVar2) {
                Parcel e10 = e();
                eg.d.b(e10, aVar);
                eg.d.c(e10, aVar2);
                f(2, e10);
            }
        }

        public static b W0(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.blockstore.restorecredential.internal.IRestoreCredentialService");
            if (queryLocalInterface instanceof b) {
                return (b) queryLocalInterface;
            }
            return new C0101a(iBinder);
        }
    }

    void Z(af.a aVar, bf.a aVar2);
}
