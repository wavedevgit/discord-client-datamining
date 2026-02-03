package rf;

import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: rf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0598a extends ig.b implements a {
        public AbstractBinderC0598a() {
            super("com.google.android.gms.deviceperformance.internal.IDevicePerformanceCallbacks");
        }

        @Override // ig.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 == 1) {
                ig.c.b(parcel);
                I((Status) ig.c.a(parcel, Status.CREATOR), (qf.c) ig.c.a(parcel, qf.c.CREATOR));
                return true;
            }
            return false;
        }
    }

    void I(Status status, qf.c cVar);
}
