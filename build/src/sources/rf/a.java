package rf;

import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: rf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0621a extends jg.b implements a {
        public AbstractBinderC0621a() {
            super("com.google.android.gms.deviceperformance.internal.IDevicePerformanceCallbacks");
        }

        @Override // jg.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 == 1) {
                jg.c.b(parcel);
                L((Status) jg.c.a(parcel, Status.CREATOR), (qf.c) jg.c.a(parcel, qf.c.CREATOR));
                return true;
            }
            return false;
        }
    }

    void L(Status status, qf.c cVar);
}
