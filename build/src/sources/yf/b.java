package yf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.identitycredentials.GetCredentialRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends kg.b implements b {

        /* renamed from: yf.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0751a extends kg.a implements b {
            C0751a(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.identitycredentials.internal.IIdentityCredentialService");
            }

            @Override // yf.b
            public void A0(yf.a aVar, GetCredentialRequest getCredentialRequest) {
                Parcel e10 = e();
                kg.c.c(e10, aVar);
                kg.c.b(e10, getCredentialRequest);
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
            return new C0751a(iBinder);
        }
    }

    void A0(yf.a aVar, GetCredentialRequest getCredentialRequest);
}
