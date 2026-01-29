package com.appsflyer.internal;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import android.os.Parcel;
import com.appsflyer.AFLogger;
import java.io.IOException;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFb1qSDK {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class AFa1tSDK implements ServiceConnection {
        final LinkedBlockingQueue<IBinder> getRevenue = new LinkedBlockingQueue<>(1);
        boolean getMediationNetwork = false;

        AFa1tSDK() {
        }

        @Override // android.content.ServiceConnection
        public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
            try {
                this.getRevenue.put(iBinder);
            } catch (InterruptedException e10) {
                AFLogger.afErrorLogForExcManagerOnly("onServiceConnected Interrupted", e10);
            }
        }

        @Override // android.content.ServiceConnection
        public final void onServiceDisconnected(ComponentName componentName) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AFa1uSDK {
        private final boolean AFAdRevenueData;
        public final String getCurrencyIso4217Code;

        AFa1uSDK(String str, boolean z10) {
            this.getCurrencyIso4217Code = str;
            this.AFAdRevenueData = z10;
        }

        public final boolean getRevenue() {
            return this.AFAdRevenueData;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class AFa1zSDK implements IInterface {
        private final IBinder getMediationNetwork;

        AFa1zSDK(IBinder iBinder) {
            this.getMediationNetwork = iBinder;
        }

        final boolean AFAdRevenueData() {
            Parcel obtain = Parcel.obtain();
            Parcel obtain2 = Parcel.obtain();
            try {
                obtain.writeInterfaceToken("com.google.android.gms.ads.identifier.internal.IAdvertisingIdService");
                boolean z10 = true;
                obtain.writeInt(1);
                this.getMediationNetwork.transact(2, obtain, obtain2, 0);
                obtain2.readException();
                if (obtain2.readInt() == 0) {
                    z10 = false;
                }
                return z10;
            } finally {
                obtain2.recycle();
                obtain.recycle();
            }
        }

        @Override // android.os.IInterface
        public final IBinder asBinder() {
            return this.getMediationNetwork;
        }

        public final String getMonetizationNetwork() {
            Parcel obtain = Parcel.obtain();
            Parcel obtain2 = Parcel.obtain();
            try {
                obtain.writeInterfaceToken("com.google.android.gms.ads.identifier.internal.IAdvertisingIdService");
                this.getMediationNetwork.transact(1, obtain, obtain2, 0);
                obtain2.readException();
                return obtain2.readString();
            } finally {
                obtain2.recycle();
                obtain.recycle();
            }
        }
    }

    public static AFa1uSDK AFAdRevenueData(Context context) {
        if (Looper.myLooper() != Looper.getMainLooper()) {
            context.getPackageManager().getPackageInfo("com.android.vending", 0);
            AFa1tSDK aFa1tSDK = new AFa1tSDK();
            Intent intent = new Intent("com.google.android.gms.ads.identifier.service.START");
            intent.setPackage("com.google.android.gms");
            try {
                if (context.bindService(intent, aFa1tSDK, 1)) {
                    if (!aFa1tSDK.getMediationNetwork) {
                        aFa1tSDK.getMediationNetwork = true;
                        IBinder poll = aFa1tSDK.getRevenue.poll(10L, TimeUnit.SECONDS);
                        if (poll != null) {
                            AFa1zSDK aFa1zSDK = new AFa1zSDK(poll);
                            return new AFa1uSDK(aFa1zSDK.getMonetizationNetwork(), aFa1zSDK.AFAdRevenueData());
                        }
                        throw new TimeoutException("Timed out waiting for the service connection");
                    }
                    throw new IllegalStateException("Cannot call get on this connection more than once");
                }
                context.unbindService(aFa1tSDK);
                throw new IOException("Google Play connection failed");
            } finally {
                context.unbindService(aFa1tSDK);
            }
        }
        throw new IllegalStateException("Cannot be called from the main thread");
    }
}
