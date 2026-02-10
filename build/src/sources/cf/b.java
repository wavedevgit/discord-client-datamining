package cf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends fg.c implements b {

        /* renamed from: cf.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0134a extends fg.a implements b {
            C0134a(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.auth.blockstore.restorecredential.internal.IRestoreCredentialService");
            }

            @Override // cf.b
            public void k0(bf.a aVar, cf.a aVar2) {
                Parcel e10 = e();
                fg.d.b(e10, aVar);
                fg.d.c(e10, aVar2);
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
            return new C0134a(iBinder);
        }
    }

    void k0(bf.a aVar, cf.a aVar2);
}
