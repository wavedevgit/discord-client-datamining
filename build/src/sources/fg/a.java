package fg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f23744c;

    /* renamed from: d  reason: collision with root package name */
    private final String f23745d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f23744c = iBinder;
        this.f23745d = str;
    }

    @Override // android.os.IInterface
    public IBinder asBinder() {
        return this.f23744c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f23745d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void f(int i10, Parcel parcel) {
        Parcel obtain = Parcel.obtain();
        try {
            this.f23744c.transact(i10, parcel, obtain, 0);
            obtain.readException();
        } finally {
            parcel.recycle();
            obtain.recycle();
        }
    }
}
