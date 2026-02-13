package xg;

import android.os.Parcel;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e extends gg.b implements f {
    public e() {
        super("com.google.android.gms.signin.internal.ISignInCallbacks");
    }

    @Override // gg.b
    protected final boolean W0(int i10, Parcel parcel, Parcel parcel2, int i11) {
        switch (i10) {
            case 3:
                com.google.android.gms.common.b bVar = (com.google.android.gms.common.b) gg.c.a(parcel, com.google.android.gms.common.b.CREATOR);
                b bVar2 = (b) gg.c.a(parcel, b.CREATOR);
                gg.c.b(parcel);
                break;
            case 4:
                Status status = (Status) gg.c.a(parcel, Status.CREATOR);
                gg.c.b(parcel);
                break;
            case 5:
            default:
                return false;
            case 6:
                Status status2 = (Status) gg.c.a(parcel, Status.CREATOR);
                gg.c.b(parcel);
                break;
            case 7:
                Status status3 = (Status) gg.c.a(parcel, Status.CREATOR);
                GoogleSignInAccount googleSignInAccount = (GoogleSignInAccount) gg.c.a(parcel, GoogleSignInAccount.CREATOR);
                gg.c.b(parcel);
                break;
            case 8:
                gg.c.b(parcel);
                P((l) gg.c.a(parcel, l.CREATOR));
                break;
            case 9:
                h hVar = (h) gg.c.a(parcel, h.CREATOR);
                gg.c.b(parcel);
                break;
        }
        parcel2.writeNoException();
        return true;
    }
}
