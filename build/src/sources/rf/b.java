package rf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends ig.b implements b {

        /* renamed from: rf.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0624a extends ig.a implements b {
            C0624a(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.deviceperformance.internal.IDevicePerformanceService");
            }

            @Override // rf.b
            public void N(rf.a aVar) {
                Parcel e10 = e();
                int i10 = ig.c.f27380b;
                if (aVar == null) {
                    e10.writeStrongBinder(null);
                } else {
                    e10.writeStrongBinder(aVar.asBinder());
                }
                f(1, e10);
            }
        }

        public static b f(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.deviceperformance.internal.IDevicePerformanceService");
            if (queryLocalInterface instanceof b) {
                return (b) queryLocalInterface;
            }
            return new C0624a(iBinder);
        }
    }

    void N(rf.a aVar);
}
