package com.google.android.gms.common;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageInstaller;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.os.Build;
import android.os.Bundle;
import android.os.UserManager;
import android.util.Log;
import gf.t0;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    public static final int f13780a = 12451000;

    /* renamed from: c  reason: collision with root package name */
    public static boolean f13782c = false;

    /* renamed from: d  reason: collision with root package name */
    public static boolean f13783d = false;

    /* renamed from: b  reason: collision with root package name */
    static final AtomicBoolean f13781b = new AtomicBoolean();

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicBoolean f13784e = new AtomicBoolean();

    public static void a(Context context, int i10) {
        int h10 = g.f().h(context, i10);
        if (h10 != 0) {
            Intent b10 = g.f().b(context, h10, "e");
            StringBuilder sb2 = new StringBuilder(String.valueOf(h10).length() + 46);
            sb2.append("GooglePlayServices not available due to error ");
            sb2.append(h10);
            Log.e("GooglePlayServicesUtil", sb2.toString());
            if (b10 == null) {
                throw new h(h10);
            }
            throw new i(h10, "Google Play Services not available", b10);
        }
    }

    public static int b(Context context) {
        try {
            return context.getPackageManager().getPackageInfo("com.google.android.gms", 0).versionCode;
        } catch (PackageManager.NameNotFoundException unused) {
            Log.w("GooglePlayServicesUtil", "Google Play services is missing.");
            return 0;
        }
    }

    public static String c(int i10) {
        return b.i(i10);
    }

    public static Resources d(Context context) {
        try {
            return context.getPackageManager().getResourcesForApplication("com.google.android.gms");
        } catch (PackageManager.NameNotFoundException unused) {
            return null;
        }
    }

    public static boolean e(Context context) {
        int i10;
        try {
            if (!f13783d) {
                try {
                    pf.b a10 = pf.c.a(context);
                    if (Build.VERSION.SDK_INT >= 28) {
                        i10 = 134217792;
                    } else {
                        i10 = 64;
                    }
                    PackageInfo e10 = a10.e("com.google.android.gms", i10);
                    l.a(context);
                    if (e10 != null && !l.c(e10, false) && l.c(e10, true)) {
                        f13782c = true;
                    } else {
                        f13782c = false;
                    }
                    f13783d = true;
                } catch (PackageManager.NameNotFoundException e11) {
                    Log.w("GooglePlayServicesUtil", "Cannot find Google Play services package name.", e11);
                    f13783d = true;
                }
            }
            if (!f13782c && com.google.android.gms.common.util.g.b()) {
                return false;
            }
            return true;
        } catch (Throwable th2) {
            f13783d = true;
            throw th2;
        }
    }

    public static int f(Context context, int i10) {
        boolean z10;
        boolean z11;
        int i11;
        PackageInfo packageInfo;
        int i12;
        try {
            context.getResources().getString(m.f13787a);
        } catch (Throwable unused) {
            Log.e("GooglePlayServicesUtil", "The Google Play services resources were not found. Check your project configuration to ensure that the resources are included.");
        }
        if (!"com.google.android.gms".equals(context.getPackageName()) && !f13784e.get()) {
            int a10 = t0.a(context);
            if (a10 != 0) {
                if (a10 != f13780a) {
                    throw new GooglePlayServicesIncorrectManifestValueException(a10);
                }
            } else {
                throw new GooglePlayServicesMissingManifestValueException();
            }
        }
        if (!com.google.android.gms.common.util.g.d(context) && !com.google.android.gms.common.util.g.g(context)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i10 >= 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        gf.q.a(z11);
        String packageName = context.getPackageName();
        PackageManager packageManager = context.getPackageManager();
        if (z10) {
            try {
                if (Build.VERSION.SDK_INT >= 28) {
                    i11 = 134225984;
                } else {
                    i11 = 8256;
                }
                packageInfo = packageManager.getPackageInfo("com.android.vending", i11);
            } catch (PackageManager.NameNotFoundException unused2) {
                Log.w("GooglePlayServicesUtil", String.valueOf(packageName).concat(" requires the Google Play Store, but it is missing."));
            }
        } else {
            packageInfo = null;
        }
        try {
            if (Build.VERSION.SDK_INT >= 28) {
                i12 = 134217792;
            } else {
                i12 = 64;
            }
            PackageInfo packageInfo2 = packageManager.getPackageInfo("com.google.android.gms", i12);
            l.a(context);
            if (!l.c(packageInfo2, true)) {
                Log.w("GooglePlayServicesUtil", String.valueOf(packageName).concat(" requires Google Play services, but their signature is invalid."));
            } else {
                if (z10) {
                    gf.q.l(packageInfo);
                    if (!l.c(packageInfo, true)) {
                        Log.w("GooglePlayServicesUtil", String.valueOf(packageName).concat(" requires Google Play Store, but its signature is invalid."));
                    }
                }
                if (z10 && packageInfo != null && !packageInfo.signatures[0].equals(packageInfo2.signatures[0])) {
                    Log.w("GooglePlayServicesUtil", String.valueOf(packageName).concat(" requires Google Play Store, but its signature doesn't match that of Google Play services."));
                } else if (com.google.android.gms.common.util.p.a(packageInfo2.versionCode) < com.google.android.gms.common.util.p.a(i10)) {
                    int i13 = packageInfo2.versionCode;
                    StringBuilder sb2 = new StringBuilder(String.valueOf(packageName).length() + 49 + String.valueOf(i10).length() + 11 + String.valueOf(i13).length());
                    sb2.append("Google Play services out of date for ");
                    sb2.append(packageName);
                    sb2.append(".  Requires ");
                    sb2.append(i10);
                    sb2.append(" but found ");
                    sb2.append(i13);
                    Log.w("GooglePlayServicesUtil", sb2.toString());
                    return 2;
                } else {
                    ApplicationInfo applicationInfo = packageInfo2.applicationInfo;
                    if (applicationInfo == null) {
                        try {
                            applicationInfo = packageManager.getApplicationInfo("com.google.android.gms", 0);
                        } catch (PackageManager.NameNotFoundException e10) {
                            Log.wtf("GooglePlayServicesUtil", String.valueOf(packageName).concat(" requires Google Play services, but they're missing when getting application info."), e10);
                            return 1;
                        }
                    }
                    if (applicationInfo.enabled) {
                        return 0;
                    }
                    return 3;
                }
            }
            return 9;
        } catch (PackageManager.NameNotFoundException unused3) {
            Log.w("GooglePlayServicesUtil", String.valueOf(packageName).concat(" requires Google Play services, but they are missing."));
            return 1;
        }
    }

    public static boolean g(Context context, int i10) {
        if (i10 == 18) {
            return true;
        }
        if (i10 == 1) {
            return j(context, "com.google.android.gms");
        }
        return false;
    }

    public static boolean h(Context context) {
        Object systemService = context.getSystemService("user");
        gf.q.l(systemService);
        Bundle applicationRestrictions = ((UserManager) systemService).getApplicationRestrictions(context.getPackageName());
        if (applicationRestrictions != null && "true".equals(applicationRestrictions.getString("restricted_profile"))) {
            return true;
        }
        return false;
    }

    public static boolean i(int i10) {
        return i10 == 1 || i10 == 2 || i10 == 3 || i10 == 9;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean j(Context context, String str) {
        ApplicationInfo applicationInfo;
        boolean equals = str.equals("com.google.android.gms");
        try {
            for (PackageInstaller.SessionInfo sessionInfo : context.getPackageManager().getPackageInstaller().getAllSessions()) {
                if (str.equals(sessionInfo.getAppPackageName())) {
                    return true;
                }
            }
            applicationInfo = context.getPackageManager().getApplicationInfo(str, 8192);
        } catch (PackageManager.NameNotFoundException | Exception unused) {
        }
        if (equals) {
            return applicationInfo.enabled;
        }
        if (!applicationInfo.enabled || h(context)) {
            return false;
        }
        return true;
    }
}
