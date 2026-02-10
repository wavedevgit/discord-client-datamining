package zf;

import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
import yf.i;
import yf.k;
import yf.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: zf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0801a extends lg.b implements a {
        public AbstractBinderC0801a() {
            super("com.google.android.gms.identitycredentials.internal.IIdentityCredentialCallbacks");
        }

        @Override // lg.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                return false;
                            }
                            f(parcel);
                            x0((Status) lg.c.a(parcel, Status.CREATOR), (k) lg.c.a(parcel, k.CREATOR));
                        } else {
                            f(parcel);
                            q((Status) lg.c.a(parcel, Status.CREATOR), (i) lg.c.a(parcel, i.CREATOR));
                        }
                    } else {
                        f(parcel);
                        F0((Status) lg.c.a(parcel, Status.CREATOR), (yf.a) lg.c.a(parcel, yf.a.CREATOR));
                    }
                } else {
                    f(parcel);
                    c0((Status) lg.c.a(parcel, Status.CREATOR), (m) lg.c.a(parcel, m.CREATOR));
                }
            } else {
                f(parcel);
                F((Status) lg.c.a(parcel, Status.CREATOR), (yf.g) lg.c.a(parcel, yf.g.CREATOR));
            }
            return true;
        }
    }

    void F(Status status, yf.g gVar);

    void F0(Status status, yf.a aVar);

    void c0(Status status, m mVar);

    void q(Status status, i iVar);

    void x0(Status status, k kVar);
}
