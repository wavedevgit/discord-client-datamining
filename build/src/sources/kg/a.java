package kg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f31806c;

    /* renamed from: d  reason: collision with root package name */
    private final String f31807d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f31806c = iBinder;
        this.f31807d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f31806c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f31807d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(int i10, Parcel parcel) {
        Parcel obtain = Parcel.obtain();
        try {
            this.f31806c.transact(i10, parcel, obtain, 0);
            obtain.readException();
        } finally {
            parcel.recycle();
            obtain.recycle();
        }
    }
}
