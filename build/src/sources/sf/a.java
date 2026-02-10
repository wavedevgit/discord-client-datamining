package sf;

import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: sf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0652a extends kg.b implements a {
        public AbstractBinderC0652a() {
            super("com.google.android.gms.deviceperformance.internal.IDevicePerformanceCallbacks");
        }

        @Override // kg.b
        protected boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 == 1) {
                kg.c.b(parcel);
                E((Status) kg.c.a(parcel, Status.CREATOR), (rf.c) kg.c.a(parcel, rf.c.CREATOR));
                return true;
            }
            return false;
        }
    }

    void E(Status status, rf.c cVar);
}
