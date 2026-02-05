package bf;

import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: bf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0100a extends eg.c implements a {
        public AbstractBinderC0100a() {
            super("com.google.android.gms.auth.blockstore.restorecredential.internal.IGetRestoreCredentialCallback");
        }

        @Override // eg.c
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 == 1) {
                f(parcel);
                e0((Status) eg.d.a(parcel, Status.CREATOR), (af.c) eg.d.a(parcel, af.c.CREATOR));
                return true;
            }
            return false;
        }
    }

    void e0(Status status, af.c cVar);
}
