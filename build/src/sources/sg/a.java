package sg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f49773c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49774d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f49773c = iBinder;
        this.f49774d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f49773c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f49774d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(int i10, Parcel parcel) {
        try {
            this.f49773c.transact(i10, parcel, null, 1);
        } finally {
            parcel.recycle();
        }
    }
}
