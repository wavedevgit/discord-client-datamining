package cf;

import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: cf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0150a extends fg.c implements a {
        public AbstractBinderC0150a() {
            super("com.google.android.gms.auth.blockstore.restorecredential.internal.IGetRestoreCredentialCallback");
        }

        @Override // fg.c
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 == 1) {
                f(parcel);
                u0((Status) fg.d.a(parcel, Status.CREATOR), (bf.c) fg.d.a(parcel, bf.c.CREATOR));
                return true;
            }
            return false;
        }
    }

    void u0(Status status, bf.c cVar);
}
