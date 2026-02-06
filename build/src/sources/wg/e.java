package wg;

import android.os.Parcel;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e extends fg.b implements f {
    public e() {
        super("com.google.android.gms.signin.internal.ISignInCallbacks");
    }

    @Override // fg.b
    protected final boolean W0(int i10, Parcel parcel, Parcel parcel2, int i11) {
        switch (i10) {
            case 3:
                com.google.android.gms.common.b bVar = (com.google.android.gms.common.b) fg.c.a(parcel, com.google.android.gms.common.b.CREATOR);
                b bVar2 = (b) fg.c.a(parcel, b.CREATOR);
                fg.c.b(parcel);
                break;
            case 4:
                Status status = (Status) fg.c.a(parcel, Status.CREATOR);
                fg.c.b(parcel);
                break;
            case 5:
            default:
                return false;
            case 6:
                Status status2 = (Status) fg.c.a(parcel, Status.CREATOR);
                fg.c.b(parcel);
                break;
            case 7:
                Status status3 = (Status) fg.c.a(parcel, Status.CREATOR);
                GoogleSignInAccount googleSignInAccount = (GoogleSignInAccount) fg.c.a(parcel, GoogleSignInAccount.CREATOR);
                fg.c.b(parcel);
                break;
            case 8:
                fg.c.b(parcel);
                B0((l) fg.c.a(parcel, l.CREATOR));
                break;
            case 9:
                h hVar = (h) fg.c.a(parcel, h.CREATOR);
                fg.c.b(parcel);
                break;
        }
        parcel2.writeNoException();
        return true;
    }
}
