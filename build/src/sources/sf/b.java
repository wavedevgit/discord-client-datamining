package sf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends kg.b implements b {

        /* renamed from: sf.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0653a extends kg.a implements b {
            C0653a(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.deviceperformance.internal.IDevicePerformanceService");
            }

            @Override // sf.b
            public void A0(sf.a aVar) {
                Parcel e10 = e();
                int i10 = kg.c.f32304b;
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
            return new C0653a(iBinder);
        }
    }

    void A0(sf.a aVar);
}
