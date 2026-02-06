package kg;

import android.os.BadParcelableException;
import android.os.Binder;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends Binder implements IInterface {
    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str) {
        attachInterface(this, "com.google.android.gms.identitycredentials.internal.IIdentityCredentialCallbacks");
    }

    private boolean h(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 > 16777215) {
            return super.onTransact(i10, parcel, parcel2, i11);
        }
        parcel.enforceInterface(getInterfaceDescriptor());
        return false;
    }

    protected abstract boolean e(int i10, Parcel parcel, Parcel parcel2, int i11);

    /* JADX INFO: Access modifiers changed from: protected */
    public void f(Parcel parcel) {
        int i10 = c.f31652a;
        int dataAvail = parcel.dataAvail();
        if (dataAvail <= 0) {
            return;
        }
        throw new BadParcelableException("Parcel data not fully consumed, unread size: " + dataAvail);
    }

    @Override // android.os.Binder
    public boolean onTransact(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (h(i10, parcel, parcel2, i11)) {
            return true;
        }
        return e(i10, parcel, parcel2, i11);
    }

    @Override // android.os.IInterface
    public IBinder asBinder() {
        return this;
    }
}
