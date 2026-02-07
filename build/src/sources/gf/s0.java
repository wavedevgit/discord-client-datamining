package gf;

import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s0 implements l {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f25193c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(IBinder iBinder) {
        this.f25193c = iBinder;
    }

    @Override // gf.l
    public final void N0(k kVar, f fVar) {
        IBinder iBinder;
        Parcel obtain = Parcel.obtain();
        Parcel obtain2 = Parcel.obtain();
        try {
            obtain.writeInterfaceToken("com.google.android.gms.common.internal.IGmsServiceBroker");
            if (kVar != null) {
                iBinder = kVar.asBinder();
            } else {
                iBinder = null;
            }
            obtain.writeStrongBinder(iBinder);
            if (fVar != null) {
                obtain.writeInt(1);
                g1.a(fVar, obtain, 0);
            } else {
                obtain.writeInt(0);
            }
            this.f25193c.transact(46, obtain, obtain2, 0);
            obtain2.readException();
            obtain2.recycle();
            obtain.recycle();
        } catch (Throwable th2) {
            obtain2.recycle();
            obtain.recycle();
            throw th2;
        }
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f25193c;
    }
}
