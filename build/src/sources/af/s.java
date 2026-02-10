package af;

import android.os.Parcel;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s extends dg.o implements t {
    public s() {
        super("com.google.android.gms.auth.api.signin.internal.ISignInCallbacks");
    }

    @Override // dg.o
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        switch (i10) {
            case 101:
                dg.p.b(parcel);
                G((GoogleSignInAccount) dg.p.a(parcel, GoogleSignInAccount.CREATOR), (Status) dg.p.a(parcel, Status.CREATOR));
                break;
            case 102:
                dg.p.b(parcel);
                E0((Status) dg.p.a(parcel, Status.CREATOR));
                break;
            case 103:
                dg.p.b(parcel);
                z0((Status) dg.p.a(parcel, Status.CREATOR));
                break;
            default:
                return false;
        }
        parcel2.writeNoException();
        return true;
    }
}
