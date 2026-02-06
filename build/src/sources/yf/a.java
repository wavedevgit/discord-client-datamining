package yf;

import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
import xf.i;
import xf.k;
import xf.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: yf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0750a extends kg.b implements a {
        public AbstractBinderC0750a() {
            super("com.google.android.gms.identitycredentials.internal.IIdentityCredentialCallbacks");
        }

        @Override // kg.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                return false;
                            }
                            f(parcel);
                            U((Status) kg.c.a(parcel, Status.CREATOR), (k) kg.c.a(parcel, k.CREATOR));
                        } else {
                            f(parcel);
                            m0((Status) kg.c.a(parcel, Status.CREATOR), (i) kg.c.a(parcel, i.CREATOR));
                        }
                    } else {
                        f(parcel);
                        o0((Status) kg.c.a(parcel, Status.CREATOR), (xf.a) kg.c.a(parcel, xf.a.CREATOR));
                    }
                } else {
                    f(parcel);
                    F0((Status) kg.c.a(parcel, Status.CREATOR), (m) kg.c.a(parcel, m.CREATOR));
                }
            } else {
                f(parcel);
                i((Status) kg.c.a(parcel, Status.CREATOR), (xf.g) kg.c.a(parcel, xf.g.CREATOR));
            }
            return true;
        }
    }

    void F0(Status status, m mVar);

    void U(Status status, k kVar);

    void i(Status status, xf.g gVar);

    void m0(Status status, i iVar);

    void o0(Status status, xf.a aVar);
}
