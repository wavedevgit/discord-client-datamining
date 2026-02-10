package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static Boolean f13938a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f13939b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f13940c;

    /* renamed from: d  reason: collision with root package name */
    private static Boolean f13941d;

    public static boolean a(Context context) {
        return h(context.getPackageManager());
    }

    public static boolean b() {
        int i10 = com.google.android.gms.common.k.f13920a;
        return "user".equals(Build.TYPE);
    }

    public static boolean c(Context context) {
        return e(context.getPackageManager());
    }

    public static boolean d(Context context) {
        if (!c(context) || k.d()) {
            if (f(context)) {
                if (!k.e() || k.h()) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return true;
    }

    public static boolean e(PackageManager packageManager) {
        if (f13938a == null) {
            f13938a = Boolean.valueOf(packageManager.hasSystemFeature("android.hardware.type.watch"));
        }
        return f13938a.booleanValue();
    }

    public static boolean f(Context context) {
        if (f13939b == null) {
            f13939b = Boolean.valueOf(context.getPackageManager().hasSystemFeature("cn.google"));
        }
        return f13939b.booleanValue();
    }

    public static boolean g(Context context) {
        boolean hasSystemFeature;
        if (f13940c == null) {
            if (k.e()) {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.embedded");
            } else {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.iot");
            }
            f13940c = Boolean.valueOf(hasSystemFeature);
        }
        return f13940c.booleanValue();
    }

    public static boolean h(PackageManager packageManager) {
        if (f13941d == null) {
            boolean z10 = false;
            if (k.e() && packageManager.hasSystemFeature("android.hardware.type.automotive")) {
                z10 = true;
            }
            f13941d = Boolean.valueOf(z10);
        }
        return f13941d.booleanValue();
    }
}
