package yh;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f55633c;

    /* renamed from: d  reason: collision with root package name */
    private final String f55634d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f55633c = iBinder;
        this.f55634d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f55633c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f55634d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(int i10, Parcel parcel) {
        try {
            this.f55633c.transact(i10, parcel, null, 1);
        } finally {
            parcel.recycle();
        }
    }
}
