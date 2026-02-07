package xh;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f54698c;

    /* renamed from: d  reason: collision with root package name */
    private final String f54699d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f54698c = iBinder;
        this.f54699d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f54698c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f54699d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(int i10, Parcel parcel) {
        try {
            this.f54698c.transact(i10, parcel, null, 1);
        } finally {
            parcel.recycle();
        }
    }
}
