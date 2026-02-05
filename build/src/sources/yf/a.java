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
    public static abstract class AbstractBinderC0763a extends jg.b implements a {
        public AbstractBinderC0763a() {
            super("com.google.android.gms.identitycredentials.internal.IIdentityCredentialCallbacks");
        }

        @Override // jg.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                return false;
                            }
                            f(parcel);
                            R((Status) jg.c.a(parcel, Status.CREATOR), (k) jg.c.a(parcel, k.CREATOR));
                        } else {
                            f(parcel);
                            m0((Status) jg.c.a(parcel, Status.CREATOR), (i) jg.c.a(parcel, i.CREATOR));
                        }
                    } else {
                        f(parcel);
                        o0((Status) jg.c.a(parcel, Status.CREATOR), (xf.a) jg.c.a(parcel, xf.a.CREATOR));
                    }
                } else {
                    f(parcel);
                    C0((Status) jg.c.a(parcel, Status.CREATOR), (m) jg.c.a(parcel, m.CREATOR));
                }
            } else {
                f(parcel);
                j((Status) jg.c.a(parcel, Status.CREATOR), (xf.g) jg.c.a(parcel, xf.g.CREATOR));
            }
            return true;
        }
    }

    void C0(Status status, m mVar);

    void R(Status status, k kVar);

    void j(Status status, xf.g gVar);

    void m0(Status status, i iVar);

    void o0(Status status, xf.a aVar);
}
