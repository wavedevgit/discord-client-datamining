package ze;

import android.os.IInterface;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface t extends IInterface {
    void A0(Status status);

    void C(GoogleSignInAccount googleSignInAccount, Status status);

    void u0(Status status);
}
