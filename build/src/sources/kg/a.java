package kg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f30874c;

    /* renamed from: d  reason: collision with root package name */
    private final String f30875d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f30874c = iBinder;
        this.f30875d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f30874c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f30875d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(int i10, Parcel parcel) {
        Parcel obtain = Parcel.obtain();
        try {
            this.f30874c.transact(1, parcel, obtain, 0);
            obtain.readException();
        } finally {
            parcel.recycle();
            obtain.recycle();
        }
    }
}
