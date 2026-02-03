package yf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.identitycredentials.GetCredentialRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends jg.b implements b {

        /* renamed from: yf.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0771a extends jg.a implements b {
            C0771a(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.identitycredentials.internal.IIdentityCredentialService");
            }

            @Override // yf.b
            public void r0(yf.a aVar, GetCredentialRequest getCredentialRequest) {
                Parcel e10 = e();
                jg.c.c(e10, aVar);
                jg.c.b(e10, getCredentialRequest);
                f(1, e10);
            }
        }

        public static b S0(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.identitycredentials.internal.IIdentityCredentialService");
            if (queryLocalInterface instanceof b) {
                return (b) queryLocalInterface;
            }
            return new C0771a(iBinder);
        }
    }

    void r0(yf.a aVar, GetCredentialRequest getCredentialRequest);
}
