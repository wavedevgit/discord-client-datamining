package ze;

import android.os.Parcel;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s extends cg.o implements t {
    public s() {
        super("com.google.android.gms.auth.api.signin.internal.ISignInCallbacks");
    }

    @Override // cg.o
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        switch (i10) {
            case 101:
                cg.p.b(parcel);
                A((GoogleSignInAccount) cg.p.a(parcel, GoogleSignInAccount.CREATOR), (Status) cg.p.a(parcel, Status.CREATOR));
                break;
            case 102:
                cg.p.b(parcel);
                C0((Status) cg.p.a(parcel, Status.CREATOR));
                break;
            case 103:
                cg.p.b(parcel);
                v0((Status) cg.p.a(parcel, Status.CREATOR));
                break;
            default:
                return false;
        }
        parcel2.writeNoException();
        return true;
    }
}
