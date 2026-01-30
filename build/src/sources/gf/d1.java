package gf;

import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.RemoteException;
import android.util.Log;
import gf.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d1 extends r0 {

    /* renamed from: g  reason: collision with root package name */
    public final IBinder f26787g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ c f26788h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d1(c cVar, int i10, IBinder iBinder, Bundle bundle) {
        super(cVar, i10, bundle);
        this.f26788h = cVar;
        this.f26787g = iBinder;
    }

    @Override // gf.r0
    protected final void f(com.google.android.gms.common.b bVar) {
        if (this.f26788h.G != null) {
            this.f26788h.G.h(bVar);
        }
        this.f26788h.K(bVar);
    }

    @Override // gf.r0
    protected final boolean g() {
        c.a aVar;
        c.a aVar2;
        try {
            IBinder iBinder = this.f26787g;
            q.l(iBinder);
            String interfaceDescriptor = iBinder.getInterfaceDescriptor();
            if (!this.f26788h.D().equals(interfaceDescriptor)) {
                String D = this.f26788h.D();
                Log.w("GmsClient", "service descriptor mismatch: " + D + " vs. " + interfaceDescriptor);
                return false;
            }
            IInterface r10 = this.f26788h.r(this.f26787g);
            if (r10 != null && (c.e0(this.f26788h, 2, 4, r10) || c.e0(this.f26788h, 3, 4, r10))) {
                this.f26788h.K = null;
                c cVar = this.f26788h;
                Bundle w10 = cVar.w();
                aVar = cVar.F;
                if (aVar != null) {
                    aVar2 = this.f26788h.F;
                    aVar2.e(w10);
                    return true;
                }
                return true;
            }
            return false;
        } catch (RemoteException unused) {
            Log.w("GmsClient", "service probably died");
            return false;
        }
    }
}
