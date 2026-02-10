package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static Boolean f14515a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f14516b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f14517c;

    /* renamed from: d  reason: collision with root package name */
    private static Boolean f14518d;

    public static boolean a(Context context) {
        return h(context.getPackageManager());
    }

    public static boolean b() {
        int i10 = com.google.android.gms.common.k.f14497a;
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
        if (f14515a == null) {
            f14515a = Boolean.valueOf(packageManager.hasSystemFeature("android.hardware.type.watch"));
        }
        return f14515a.booleanValue();
    }

    public static boolean f(Context context) {
        if (f14516b == null) {
            f14516b = Boolean.valueOf(context.getPackageManager().hasSystemFeature("cn.google"));
        }
        return f14516b.booleanValue();
    }

    public static boolean g(Context context) {
        boolean hasSystemFeature;
        if (f14517c == null) {
            if (k.e()) {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.embedded");
            } else {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.iot");
            }
            f14517c = Boolean.valueOf(hasSystemFeature);
        }
        return f14517c.booleanValue();
    }

    public static boolean h(PackageManager packageManager) {
        if (f14518d == null) {
            boolean z10 = false;
            if (k.e() && packageManager.hasSystemFeature("android.hardware.type.automotive")) {
                z10 = true;
            }
            f14518d = Boolean.valueOf(z10);
        }
        return f14518d.booleanValue();
    }
}
