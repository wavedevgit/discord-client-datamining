package xb;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f54725c;

    /* renamed from: d  reason: collision with root package name */
    private final String f54726d = "com.google.android.finsky.externalreferrer.IGetInstallReferrerService";

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder) {
        this.f54725c = iBinder;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f54725c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f54726d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel f(Parcel parcel) {
        Parcel obtain = Parcel.obtain();
        try {
            try {
                this.f54725c.transact(1, parcel, obtain, 0);
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
