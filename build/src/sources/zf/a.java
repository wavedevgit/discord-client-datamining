package zf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f55670c;

    /* renamed from: d  reason: collision with root package name */
    private final String f55671d = "com.google.android.gms.ads.identifier.internal.IAdvertisingIdService";

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f55670c = iBinder;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f55670c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f55671d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel f(int i10, Parcel parcel) {
        Parcel obtain = Parcel.obtain();
        try {
            try {
                this.f55670c.transact(i10, parcel, obtain, 0);
                obtain.readException();
                return obtain;
            } catch (RuntimeException e10) {
                obtain.recycle();
                throw e10;
            }
        } finally {
            parcel.recycle();
        }
    }
}
