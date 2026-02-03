package lc;

import android.os.Binder;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.RemoteException;
import ji.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c extends Binder {

    /* renamed from: c  reason: collision with root package name */
    private static final int f36651c;

    static {
        int i10;
        if (ne.w0.f40197a >= 30) {
            i10 = IBinder.getSuggestedMaxIpcSizeBytes();
        } else {
            i10 = 65536;
        }
        f36651c = i10;
    }

    public static ji.s a(IBinder iBinder) {
        int readInt;
        s.a j10 = ji.s.j();
        int i10 = 0;
        int i11 = 1;
        while (i11 != 0) {
            Parcel obtain = Parcel.obtain();
            Parcel obtain2 = Parcel.obtain();
            try {
                obtain.writeInt(i10);
                try {
                    iBinder.transact(1, obtain, obtain2, 0);
                    while (true) {
                        readInt = obtain2.readInt();
                        if (readInt == 1) {
                            j10.a((Bundle) ne.a.e(obtain2.readBundle()));
                            i10++;
                        }
                    }
                    obtain2.recycle();
                    obtain.recycle();
                    i11 = readInt;
                } catch (RemoteException e10) {
                    throw new RuntimeException(e10);
                }
            } catch (Throwable th2) {
                obtain2.recycle();
                obtain.recycle();
                throw th2;
            }
        }
        return j10.k();
    }
}
