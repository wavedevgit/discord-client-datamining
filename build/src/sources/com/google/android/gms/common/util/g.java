package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static Boolean f14516a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f14517b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f14518c;

    /* renamed from: d  reason: collision with root package name */
    private static Boolean f14519d;

    public static boolean a(Context context) {
        return h(context.getPackageManager());
    }

    public static boolean b() {
        int i10 = com.google.android.gms.common.k.f14498a;
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
        if (f14516a == null) {
            f14516a = Boolean.valueOf(packageManager.hasSystemFeature("android.hardware.type.watch"));
        }
        return f14516a.booleanValue();
    }

    public static boolean f(Context context) {
        if (f14517b == null) {
            f14517b = Boolean.valueOf(context.getPackageManager().hasSystemFeature("cn.google"));
        }
        return f14517b.booleanValue();
    }

    public static boolean g(Context context) {
        boolean hasSystemFeature;
        if (f14518c == null) {
            if (k.e()) {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.embedded");
            } else {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.iot");
            }
            f14518c = Boolean.valueOf(hasSystemFeature);
        }
        return f14518c.booleanValue();
    }

    public static boolean h(PackageManager packageManager) {
        if (f14519d == null) {
            boolean z10 = false;
            if (k.e() && packageManager.hasSystemFeature("android.hardware.type.automotive")) {
                z10 = true;
            }
            f14519d = Boolean.valueOf(z10);
        }
        return f14519d.booleanValue();
    }
}
