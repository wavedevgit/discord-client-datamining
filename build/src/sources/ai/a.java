package ai;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f792c;

    /* renamed from: d  reason: collision with root package name */
    private final String f793d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f792c = iBinder;
        this.f793d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f792c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f793d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(int i10, Parcel parcel) {
        try {
            this.f792c.transact(i10, parcel, null, 1);
        } finally {
            parcel.recycle();
        }
    }
}
