package zf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.identitycredentials.GetCredentialRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends lg.b implements b {

        /* renamed from: zf.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0802a extends lg.a implements b {
            C0802a(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.identitycredentials.internal.IIdentityCredentialService");
            }

            @Override // zf.b
            public void L0(zf.a aVar, GetCredentialRequest getCredentialRequest) {
                Parcel e10 = e();
                lg.c.c(e10, aVar);
                lg.c.b(e10, getCredentialRequest);
                f(1, e10);
            }
        }

        public static b W0(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.identitycredentials.internal.IIdentityCredentialService");
            if (queryLocalInterface instanceof b) {
                return (b) queryLocalInterface;
            }
            return new C0802a(iBinder);
        }
    }

    void L0(zf.a aVar, GetCredentialRequest getCredentialRequest);
}
