package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static Boolean f13798a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f13799b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f13800c;

    /* renamed from: d  reason: collision with root package name */
    private static Boolean f13801d;

    public static boolean a(Context context) {
        return h(context.getPackageManager());
    }

    public static boolean b() {
        int i10 = com.google.android.gms.common.k.f13780a;
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
        if (f13798a == null) {
            f13798a = Boolean.valueOf(packageManager.hasSystemFeature("android.hardware.type.watch"));
        }
        return f13798a.booleanValue();
    }

    public static boolean f(Context context) {
        if (f13799b == null) {
            f13799b = Boolean.valueOf(context.getPackageManager().hasSystemFeature("cn.google"));
        }
        return f13799b.booleanValue();
    }

    public static boolean g(Context context) {
        boolean hasSystemFeature;
        if (f13800c == null) {
            if (k.e()) {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.embedded");
            } else {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.iot");
            }
            f13800c = Boolean.valueOf(hasSystemFeature);
        }
        return f13800c.booleanValue();
    }

    public static boolean h(PackageManager packageManager) {
        if (f13801d == null) {
            boolean z10 = false;
            if (k.e() && packageManager.hasSystemFeature("android.hardware.type.automotive")) {
                z10 = true;
            }
            f13801d = Boolean.valueOf(z10);
        }
        return f13801d.booleanValue();
    }
}
