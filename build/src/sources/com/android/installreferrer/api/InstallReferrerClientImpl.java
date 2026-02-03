package com.android.installreferrer.api;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.ResolveInfo;
import android.content.pm.ServiceInfo;
import android.os.Bundle;
import android.os.IBinder;
import android.os.RemoteException;
import com.android.installreferrer.commons.InstallReferrerCommons;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.List;
import qe.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class InstallReferrerClientImpl extends InstallReferrerClient {

    /* renamed from: a  reason: collision with root package name */
    private int f7748a = 0;

    /* renamed from: b  reason: collision with root package name */
    private final Context f7749b;

    /* renamed from: c  reason: collision with root package name */
    private qe.a f7750c;

    /* renamed from: d  reason: collision with root package name */
    private ServiceConnection f7751d;

    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public @interface ClientState {
        public static final int CLOSED = 3;
        public static final int CONNECTED = 2;
        public static final int CONNECTING = 1;
        public static final int DISCONNECTED = 0;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class b implements ServiceConnection {

        /* renamed from: d  reason: collision with root package name */
        private final InstallReferrerStateListener f7752d;

        @Override // android.content.ServiceConnection
        public void onServiceConnected(ComponentName componentName, IBinder iBinder) {
            InstallReferrerCommons.logVerbose("InstallReferrerClient", "Install Referrer service connected.");
            InstallReferrerClientImpl.this.f7750c = a.AbstractBinderC0575a.e(iBinder);
            InstallReferrerClientImpl.this.f7748a = 2;
            this.f7752d.onInstallReferrerSetupFinished(0);
        }

        @Override // android.content.ServiceConnection
        public void onServiceDisconnected(ComponentName componentName) {
            InstallReferrerCommons.logWarn("InstallReferrerClient", "Install Referrer service disconnected.");
            InstallReferrerClientImpl.this.f7750c = null;
            InstallReferrerClientImpl.this.f7748a = 0;
            this.f7752d.onInstallReferrerServiceDisconnected();
        }

        private b(InstallReferrerStateListener installReferrerStateListener) {
            if (installReferrerStateListener != null) {
                this.f7752d = installReferrerStateListener;
                return;
            }
            throw new RuntimeException("Please specify a listener to know when setup is done.");
        }
    }

    public InstallReferrerClientImpl(Context context) {
        this.f7749b = context.getApplicationContext();
    }

    private boolean c() {
        if (this.f7749b.getPackageManager().getPackageInfo("com.android.vending", IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT).versionCode < 80837300) {
            return false;
        }
        return true;
    }

    @Override // com.android.installreferrer.api.InstallReferrerClient
    public void endConnection() {
        this.f7748a = 3;
        if (this.f7751d != null) {
            InstallReferrerCommons.logVerbose("InstallReferrerClient", "Unbinding from service.");
            this.f7749b.unbindService(this.f7751d);
            this.f7751d = null;
        }
        this.f7750c = null;
    }

    @Override // com.android.installreferrer.api.InstallReferrerClient
    public ReferrerDetails getInstallReferrer() {
        if (isReady()) {
            Bundle bundle = new Bundle();
            bundle.putString("package_name", this.f7749b.getPackageName());
            try {
                return new ReferrerDetails(this.f7750c.c(bundle));
            } catch (RemoteException e10) {
                InstallReferrerCommons.logWarn("InstallReferrerClient", "RemoteException getting install referrer information");
                this.f7748a = 0;
                throw e10;
            }
        }
        throw new IllegalStateException("Service not connected. Please start a connection before using the service.");
    }

    @Override // com.android.installreferrer.api.InstallReferrerClient
    public boolean isReady() {
        return (this.f7748a != 2 || this.f7750c == null || this.f7751d == null) ? false : true;
    }

    @Override // com.android.installreferrer.api.InstallReferrerClient
    public void startConnection(InstallReferrerStateListener installReferrerStateListener) {
        ServiceInfo serviceInfo;
        if (isReady()) {
            InstallReferrerCommons.logVerbose("InstallReferrerClient", "Service connection is valid. No need to re-initialize.");
            installReferrerStateListener.onInstallReferrerSetupFinished(0);
            return;
        }
        int i10 = this.f7748a;
        if (i10 == 1) {
            InstallReferrerCommons.logWarn("InstallReferrerClient", "Client is already in the process of connecting to the service.");
            installReferrerStateListener.onInstallReferrerSetupFinished(3);
        } else if (i10 == 3) {
            InstallReferrerCommons.logWarn("InstallReferrerClient", "Client was already closed and can't be reused. Please create another instance.");
            installReferrerStateListener.onInstallReferrerSetupFinished(3);
        } else {
            InstallReferrerCommons.logVerbose("InstallReferrerClient", "Starting install referrer service setup.");
            Intent intent = new Intent("com.google.android.finsky.BIND_GET_INSTALL_REFERRER_SERVICE");
            intent.setComponent(new ComponentName("com.android.vending", "com.google.android.finsky.externalreferrer.GetInstallReferrerService"));
            List<ResolveInfo> queryIntentServices = this.f7749b.getPackageManager().queryIntentServices(intent, 0);
            if (queryIntentServices != null && !queryIntentServices.isEmpty() && (serviceInfo = queryIntentServices.get(0).serviceInfo) != null) {
                String str = serviceInfo.packageName;
                String str2 = serviceInfo.name;
                if ("com.android.vending".equals(str) && str2 != null && c()) {
                    Intent intent2 = new Intent(intent);
                    b bVar = new b(installReferrerStateListener);
                    this.f7751d = bVar;
                    try {
                        if (this.f7749b.bindService(intent2, bVar, 1)) {
                            InstallReferrerCommons.logVerbose("InstallReferrerClient", "Service was bonded successfully.");
                            return;
                        }
                        InstallReferrerCommons.logWarn("InstallReferrerClient", "Connection to service is blocked.");
                        this.f7748a = 0;
                        installReferrerStateListener.onInstallReferrerSetupFinished(1);
                        return;
                    } catch (SecurityException unused) {
                        InstallReferrerCommons.logWarn("InstallReferrerClient", "No permission to connect to service.");
                        this.f7748a = 0;
                        installReferrerStateListener.onInstallReferrerSetupFinished(4);
                        return;
                    }
                }
                InstallReferrerCommons.logWarn("InstallReferrerClient", "Play Store missing or incompatible. Version 8.3.73 or later required.");
                this.f7748a = 0;
                installReferrerStateListener.onInstallReferrerSetupFinished(2);
                return;
            }
            this.f7748a = 0;
            InstallReferrerCommons.logVerbose("InstallReferrerClient", "Install Referrer service unavailable on device.");
            installReferrerStateListener.onInstallReferrerSetupFinished(2);
        }
    }
}
