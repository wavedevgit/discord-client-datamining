package io.sentry.android.core;

import android.app.ActivityManager;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.util.DisplayMetrics;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.util.a;
import io.sentry.k7;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e1 {

    /* renamed from: a  reason: collision with root package name */
    private static final io.sentry.android.core.util.a f27025a = new io.sentry.android.core.util.a(new a.InterfaceC0383a() { // from class: io.sentry.android.core.z0
        @Override // io.sentry.android.core.util.a.InterfaceC0383a
        public final Object a(Context context) {
            return e1.d(context);
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private static final io.sentry.android.core.util.a f27026b = new io.sentry.android.core.util.a(new a.InterfaceC0383a() { // from class: io.sentry.android.core.a1
        @Override // io.sentry.android.core.util.a.InterfaceC0383a
        public final Object a(Context context) {
            return e1.b(context);
        }
    });

    /* renamed from: c  reason: collision with root package name */
    private static final io.sentry.android.core.util.a f27027c = new io.sentry.android.core.util.a(new a.InterfaceC0383a() { // from class: io.sentry.android.core.b1
        @Override // io.sentry.android.core.util.a.InterfaceC0383a
        public final Object a(Context context) {
            return e1.a(context);
        }
    });

    /* renamed from: d  reason: collision with root package name */
    private static final io.sentry.android.core.util.a f27028d = new io.sentry.android.core.util.a(new a.InterfaceC0383a() { // from class: io.sentry.android.core.c1
        @Override // io.sentry.android.core.util.a.InterfaceC0383a
        public final Object a(Context context) {
            return e1.c(context);
        }
    });

    /* renamed from: e  reason: collision with root package name */
    private static final io.sentry.android.core.util.a f27029e = new io.sentry.android.core.util.a(new a.InterfaceC0383a() { // from class: io.sentry.android.core.d1
        @Override // io.sentry.android.core.util.a.InterfaceC0383a
        public final Object a(Context context) {
            return e1.e(context);
        }
    });

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f27030a;

        /* renamed from: b  reason: collision with root package name */
        private final String f27031b;

        public a(boolean z10, String str) {
            this.f27030a = z10;
            this.f27031b = str;
        }

        public Map a() {
            HashMap hashMap = new HashMap();
            hashMap.put("isSideLoaded", String.valueOf(this.f27030a));
            String str = this.f27031b;
            if (str != null) {
                hashMap.put("installerStore", str);
            }
            return hashMap;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f27032a;

        /* renamed from: b  reason: collision with root package name */
        private final String[] f27033b;

        public b(boolean z10, String[] strArr) {
            this.f27032a = z10;
            this.f27033b = strArr;
        }

        public String[] a() {
            return this.f27033b;
        }

        public boolean b() {
            return this.f27032a;
        }
    }

    public static /* synthetic */ String a(Context context) {
        try {
            ApplicationInfo applicationInfo = context.getApplicationInfo();
            int i10 = applicationInfo.labelRes;
            if (i10 == 0) {
                CharSequence charSequence = applicationInfo.nonLocalizedLabel;
                if (charSequence != null) {
                    return charSequence.toString();
                }
                return context.getPackageManager().getApplicationLabel(applicationInfo).toString();
            }
            return context.getString(i10);
        } catch (Throwable unused) {
            return null;
        }
    }

    public static /* synthetic */ PackageInfo b(Context context) {
        try {
            return context.getPackageManager().getPackageInfo(context.getPackageName(), 0);
        } catch (Throwable unused) {
            return null;
        }
    }

    public static /* synthetic */ ApplicationInfo c(Context context) {
        try {
            return context.getPackageManager().getApplicationInfo(context.getPackageName(), PackageManager.ApplicationInfoFlags.of(128L));
        } catch (Throwable unused) {
            return null;
        }
    }

    public static /* synthetic */ PackageInfo d(Context context) {
        try {
            return context.getPackageManager().getPackageInfo(context.getPackageName(), PackageManager.PackageInfoFlags.of(0L));
        } catch (Throwable unused) {
            return null;
        }
    }

    public static /* synthetic */ ApplicationInfo e(Context context) {
        try {
            return context.getPackageManager().getApplicationInfo(context.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        } catch (Throwable unused) {
            return null;
        }
    }

    public static boolean f(Context context) {
        Intent intent;
        if (context.getPackageName().endsWith(".test")) {
            try {
                for (ActivityManager.AppTask appTask : ((ActivityManager) context.getSystemService("activity")).getAppTasks()) {
                    intent = appTask.getTaskInfo().baseIntent;
                    ComponentName component = intent.getComponent();
                    if (component != null && component.getClassName().equals("androidx.compose.ui.tooling.PreviewActivity")) {
                        return true;
                    }
                }
                return false;
            } catch (Throwable unused) {
                return false;
            }
        }
        return false;
    }

    public static Context g(Context context) {
        Context applicationContext = context.getApplicationContext();
        if (applicationContext != null) {
            return applicationContext;
        }
        return context;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ApplicationInfo h(Context context, x0 x0Var) {
        if (x0Var.d() >= 33) {
            return (ApplicationInfo) f27028d.a(context);
        }
        return (ApplicationInfo) f27029e.a(context);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String i(Context context) {
        return (String) f27027c.a(context);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String[] j() {
        return Build.SUPPORTED_ABIS;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static DisplayMetrics k(Context context, ILogger iLogger) {
        try {
            return context.getResources().getDisplayMetrics();
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Error getting DisplayMetrics.", th2);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String l(ILogger iLogger) {
        try {
            return Build.MODEL.split(" ", -1)[0];
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Error getting device family.", th2);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String m(ILogger iLogger) {
        String property = System.getProperty("os.version");
        File file = new File("/proc/version");
        if (!file.canRead()) {
            return property;
        }
        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
            String readLine = bufferedReader.readLine();
            bufferedReader.close();
            return readLine;
        } catch (IOException e10) {
            iLogger.b(SentryLevel.ERROR, "Exception while attempting to read kernel information", e10);
            return property;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ActivityManager.MemoryInfo n(Context context, ILogger iLogger) {
        try {
            ActivityManager activityManager = (ActivityManager) context.getSystemService("activity");
            ActivityManager.MemoryInfo memoryInfo = new ActivityManager.MemoryInfo();
            if (activityManager != null) {
                activityManager.getMemoryInfo(memoryInfo);
                return memoryInfo;
            }
            iLogger.c(SentryLevel.INFO, "Error getting MemoryInfo.", new Object[0]);
            return null;
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Error getting MemoryInfo.", th2);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static PackageInfo o(Context context, int i10, ILogger iLogger, x0 x0Var) {
        try {
            if (x0Var.d() >= 33) {
                return context.getPackageManager().getPackageInfo(context.getPackageName(), PackageManager.PackageInfoFlags.of(i10));
            }
            return context.getPackageManager().getPackageInfo(context.getPackageName(), i10);
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Error getting package info.", th2);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static PackageInfo p(Context context, x0 x0Var) {
        if (x0Var.d() >= 33) {
            return (PackageInfo) f27025a.a(context);
        }
        return (PackageInfo) f27026b.a(context);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String q(PackageInfo packageInfo, x0 x0Var) {
        if (x0Var.d() >= 28) {
            return Long.toString(packageInfo.getLongVersionCode());
        }
        return r(packageInfo);
    }

    private static String r(PackageInfo packageInfo) {
        return Integer.toString(packageInfo.versionCode);
    }

    public static boolean s() {
        try {
            ActivityManager.RunningAppProcessInfo runningAppProcessInfo = new ActivityManager.RunningAppProcessInfo();
            ActivityManager.getMyMemoryState(runningAppProcessInfo);
            if (runningAppProcessInfo.importance != 100) {
                return false;
            }
            return true;
        } catch (Throwable unused) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Intent t(Context context, k7 k7Var, BroadcastReceiver broadcastReceiver, IntentFilter intentFilter, Handler handler) {
        return u(context, new x0(k7Var.getLogger()), broadcastReceiver, intentFilter, handler);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Intent u(Context context, x0 x0Var, BroadcastReceiver broadcastReceiver, IntentFilter intentFilter, Handler handler) {
        if (x0Var.d() >= 33) {
            return context.registerReceiver(broadcastReceiver, intentFilter, null, handler, 4);
        }
        return context.registerReceiver(broadcastReceiver, intentFilter, null, handler);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a v(Context context, ILogger iLogger, x0 x0Var) {
        String str;
        boolean z10;
        try {
            PackageInfo p10 = p(context, x0Var);
            PackageManager packageManager = context.getPackageManager();
            if (p10 != null && packageManager != null) {
                str = p10.packageName;
                try {
                    String installerPackageName = packageManager.getInstallerPackageName(str);
                    if (installerPackageName == null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new a(z10, installerPackageName);
                } catch (IllegalArgumentException unused) {
                    iLogger.c(SentryLevel.DEBUG, "%s package isn't installed.", str);
                    return null;
                }
            }
        } catch (IllegalArgumentException unused2) {
            str = null;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b w(Context context, x0 x0Var) {
        boolean z10;
        Bundle bundle;
        ApplicationInfo h10 = h(context, x0Var);
        PackageInfo p10 = p(context, x0Var);
        if (p10 != null) {
            String[] strArr = p10.splitNames;
            if (h10 != null && (bundle = h10.metaData) != null) {
                z10 = bundle.getBoolean("com.android.vending.splits.required");
            } else {
                z10 = false;
            }
            return new b(z10, strArr);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void x(PackageInfo packageInfo, x0 x0Var, m1 m1Var, io.sentry.protocol.a aVar) {
        String str;
        aVar.n(packageInfo.packageName);
        aVar.q(packageInfo.versionName);
        aVar.m(q(packageInfo, x0Var));
        HashMap hashMap = new HashMap();
        String[] strArr = packageInfo.requestedPermissions;
        int[] iArr = packageInfo.requestedPermissionsFlags;
        if (strArr != null && strArr.length > 0 && iArr != null && iArr.length > 0) {
            for (int i10 = 0; i10 < strArr.length; i10++) {
                String str2 = strArr[i10];
                String substring = str2.substring(str2.lastIndexOf(46) + 1);
                if ((iArr[i10] & 2) == 2) {
                    str = "granted";
                } else {
                    str = "not_granted";
                }
                hashMap.put(substring, str);
            }
        }
        aVar.s(hashMap);
        if (m1Var != null) {
            try {
                b o10 = m1Var.o();
                if (o10 != null) {
                    aVar.t(Boolean.valueOf(o10.b()));
                    if (o10.a() != null) {
                        aVar.u(Arrays.asList(o10.a()));
                    }
                }
            } catch (Throwable unused) {
            }
        }
    }
}
