package com.google.firebase.messaging;

import android.content.Context;
import android.content.SharedPreferences;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n0 {
    private static SharedPreferences b(Context context) {
        Context applicationContext = context.getApplicationContext();
        if (applicationContext != null) {
            context = applicationContext;
        }
        return context.getSharedPreferences("com.google.firebase.messaging", 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(Context context) {
        return b(context).getBoolean("proxy_notification_initialized", false);
    }

    static boolean d(SharedPreferences sharedPreferences, boolean z10) {
        if (!sharedPreferences.contains("proxy_retention") || sharedPreferences.getBoolean("proxy_retention", false) != z10) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(Context context, boolean z10) {
        SharedPreferences.Editor edit = b(context).edit();
        edit.putBoolean("proxy_notification_initialized", z10);
        edit.apply();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(final Context context, c0 c0Var, final boolean z10) {
        if (com.google.android.gms.common.util.k.g() && !d(b(context), z10)) {
            c0Var.j(z10).f(new g2.i(), new xg.g() { // from class: com.google.firebase.messaging.m0
                @Override // xg.g
                public final void onSuccess(Object obj) {
                    Void r32 = (Void) obj;
                    n0.g(context, z10);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void g(Context context, boolean z10) {
        SharedPreferences.Editor edit = b(context).edit();
        edit.putBoolean("proxy_retention", z10);
        edit.apply();
    }
}
