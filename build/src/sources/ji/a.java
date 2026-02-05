package ji;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f30909c;

    /* renamed from: d  reason: collision with root package name */
    private final String f30910d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f30909c = iBinder;
        this.f30910d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f30909c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f30910d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(int i10, Parcel parcel) {
        try {
            this.f30909c.transact(i10, parcel, null, 1);
        } finally {
            parcel.recycle();
        }
    }
}
