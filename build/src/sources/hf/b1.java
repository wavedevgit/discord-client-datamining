package hf;

import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.RemoteException;
import android.util.Log;
import hf.c;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b1 extends r0 {

    /* renamed from: g  reason: collision with root package name */
    public final IBinder f27183g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ c f27184h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b1(c cVar, int i10, IBinder iBinder, Bundle bundle) {
        super(cVar, i10, bundle);
        Objects.requireNonNull(cVar);
        this.f27184h = cVar;
        this.f27183g = iBinder;
    }

    @Override // hf.r0
    protected final boolean e() {
        try {
            IBinder iBinder = this.f27183g;
            q.l(iBinder);
            String interfaceDescriptor = iBinder.getInterfaceDescriptor();
            c cVar = this.f27184h;
            if (!cVar.D().equals(interfaceDescriptor)) {
                String D = cVar.D();
                StringBuilder sb2 = new StringBuilder(String.valueOf(D).length() + 34 + String.valueOf(interfaceDescriptor).length());
                sb2.append("service descriptor mismatch: ");
                sb2.append(D);
                sb2.append(" vs. ");
                sb2.append(interfaceDescriptor);
                Log.w("GmsClient", sb2.toString());
                return false;
            }
            IInterface r10 = cVar.r(this.f27183g);
            if (r10 == null || (!cVar.V(2, 4, r10) && !cVar.V(3, 4, r10))) {
                return false;
            }
            cVar.e0(null);
            c.a b02 = cVar.b0();
            Bundle w10 = cVar.w();
            if (b02 != null) {
                cVar.b0().e(w10);
                return true;
            }
            return true;
        } catch (RemoteException unused) {
            Log.w("GmsClient", "service probably died");
            return false;
        }
    }

    @Override // hf.r0
    protected final void f(com.google.android.gms.common.b bVar) {
        c cVar = this.f27184h;
        if (cVar.c0() != null) {
            cVar.c0().i(bVar);
        }
        cVar.K(bVar);
    }
}
