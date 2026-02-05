package com.google.android.gms.internal.play_billing;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l6 implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f14301c;

    /* renamed from: d  reason: collision with root package name */
    private final String f14302d = "com.android.vending.billing.IInAppBillingService";

    /* JADX INFO: Access modifiers changed from: protected */
    public l6(IBinder iBinder, String str) {
        this.f14301c = iBinder;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f14301c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel e() {
        Parcel obtain = Parcel.obtain();
        obtain.writeInterfaceToken(this.f14302d);
        return obtain;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Parcel f(int i10, Parcel parcel) {
        Parcel obtain = Parcel.obtain();
        try {
            try {
                this.f14301c.transact(i10, parcel, obtain, 0);
                obtain.readException();
                return obtain;
            } catch (RuntimeException e10) {
                obtain.recycle();
                throw e10;
            }
        } finally {
            parcel.recycle();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h(int i10, Parcel parcel) {
        Parcel obtain = Parcel.obtain();
        try {
            this.f14301c.transact(i10, parcel, obtain, 0);
            obtain.readException();
        } finally {
            parcel.recycle();
            obtain.recycle();
        }
    }
}
