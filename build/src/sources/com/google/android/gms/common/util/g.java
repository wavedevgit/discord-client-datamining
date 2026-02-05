package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static Boolean f13830a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f13831b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f13832c;

    /* renamed from: d  reason: collision with root package name */
    private static Boolean f13833d;

    public static boolean a(Context context) {
        return h(context.getPackageManager());
    }

    public static boolean b() {
        int i10 = com.google.android.gms.common.j.f13813a;
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
        if (f13830a == null) {
            f13830a = Boolean.valueOf(packageManager.hasSystemFeature("android.hardware.type.watch"));
        }
        return f13830a.booleanValue();
    }

    public static boolean f(Context context) {
        if (f13831b == null) {
            f13831b = Boolean.valueOf(context.getPackageManager().hasSystemFeature("cn.google"));
        }
        return f13831b.booleanValue();
    }

    public static boolean g(Context context) {
        boolean hasSystemFeature;
        if (f13832c == null) {
            if (k.e()) {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.embedded");
            } else {
                hasSystemFeature = context.getPackageManager().hasSystemFeature("android.hardware.type.iot");
            }
            f13832c = Boolean.valueOf(hasSystemFeature);
        }
        return f13832c.booleanValue();
    }

    public static boolean h(PackageManager packageManager) {
        if (f13833d == null) {
            boolean z10 = false;
            if (k.e() && packageManager.hasSystemFeature("android.hardware.type.automotive")) {
                z10 = true;
            }
            f13833d = Boolean.valueOf(z10);
        }
        return f13833d.booleanValue();
    }
}
