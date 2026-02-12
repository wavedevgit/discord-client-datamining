package sg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f48090c;

    /* renamed from: d  reason: collision with root package name */
    private final String f48091d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f48090c = iBinder;
        this.f48091d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f48090c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f48091d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(int i10, Parcel parcel) {
        try {
            this.f48090c.transact(i10, parcel, null, 1);
        } finally {
            parcel.recycle();
        }
    }
}
