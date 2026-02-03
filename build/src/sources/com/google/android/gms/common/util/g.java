package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static Boolean f14466a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f14467b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f14468c;

    /* renamed from: d  reason: collision with root package name */
    private static Boolean f14469d;

    public static boolean a(Context context) {
        PackageManager packageManager = context.getPackageManager();
        if (f14469d == null) {
            boolean z10 = false;
            if (k.e() && packageManager.hasSystemFeature("android.hardware.type.automotive")) {
                z10 = true;
            }
            f14469d = Boolean.valueOf(z10);
        }
        return f14469d.booleanValue();
    }

    public static boolean b() {
        int i10 = com.google.android.gms.common.j.f14450a;
        return "user".equals(Build.TYPE);
    }

    public static boolean c(Context context) {
        return g(context.getPackageManager());
    }

    public static boolean d(Context context) {
        if (!c(context) || k.d()) {
            if (e(context)) {
                if (!k.e() || k.h()) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return true;
    }

    public static boolean e(Context context) {
        if (f14467b == null) {
            f14467b = Boolean.valueOf(context.getPackageManager().hasSystemFeature("cn.google"));
        }
        return f14467b.booleanValue();
    }

    public static boolean f(Context context) {
        if (f14468c == null) {
            boolean z10 = true;
            if (!context.getPackageManager().hasSystemFeature("android.hardware.type.iot") && !context.getPackageManager().hasSystemFeature("android.hardware.type.embedded")) {
                z10 = false;
            }
            f14468c = Boolean.valueOf(z10);
        }
        return f14468c.booleanValue();
    }

    public static boolean g(PackageManager packageManager) {
        if (f14466a == null) {
            f14466a = Boolean.valueOf(packageManager.hasSystemFeature("android.hardware.type.watch"));
        }
        return f14466a.booleanValue();
    }
}
