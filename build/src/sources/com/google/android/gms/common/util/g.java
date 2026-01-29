package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static Boolean f14837a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f14838b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f14839c;

    /* renamed from: d  reason: collision with root package name */
    private static Boolean f14840d;

    public static boolean a(Context context) {
        PackageManager packageManager = context.getPackageManager();
        if (f14840d == null) {
            boolean z10 = false;
            if (k.e() && packageManager.hasSystemFeature("android.hardware.type.automotive")) {
                z10 = true;
            }
            f14840d = Boolean.valueOf(z10);
        }
        return f14840d.booleanValue();
    }

    public static boolean b() {
        int i10 = com.google.android.gms.common.j.f14821a;
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
        if (f14838b == null) {
            f14838b = Boolean.valueOf(context.getPackageManager().hasSystemFeature("cn.google"));
        }
        return f14838b.booleanValue();
    }

    public static boolean f(Context context) {
        if (f14839c == null) {
            boolean z10 = true;
            if (!context.getPackageManager().hasSystemFeature("android.hardware.type.iot") && !context.getPackageManager().hasSystemFeature("android.hardware.type.embedded")) {
                z10 = false;
            }
            f14839c = Boolean.valueOf(z10);
        }
        return f14839c.booleanValue();
    }

    public static boolean g(PackageManager packageManager) {
        if (f14837a == null) {
            f14837a = Boolean.valueOf(packageManager.hasSystemFeature("android.hardware.type.watch"));
        }
        return f14837a.booleanValue();
    }
}
