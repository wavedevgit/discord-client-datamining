package com.google.android.gms.common.util;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.WorkSource;
import android.util.Log;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o {

    /* renamed from: a  reason: collision with root package name */
    private static final int f13447a;

    /* renamed from: b  reason: collision with root package name */
    private static final Method f13448b;

    /* renamed from: c  reason: collision with root package name */
    private static final Method f13449c;

    /* renamed from: d  reason: collision with root package name */
    private static final Method f13450d;

    /* renamed from: e  reason: collision with root package name */
    private static final Method f13451e;

    /* renamed from: f  reason: collision with root package name */
    private static final Method f13452f;

    /* renamed from: g  reason: collision with root package name */
    private static final Method f13453g;

    /* renamed from: h  reason: collision with root package name */
    private static final Method f13454h;

    /* renamed from: i  reason: collision with root package name */
    private static final Method f13455i;

    /* renamed from: j  reason: collision with root package name */
    private static Boolean f13456j;

    /* JADX WARN: Removed duplicated region for block: B:49:0x006b A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:61:0x008b A[EXC_TOP_SPLITTER, SYNTHETIC] */
    static {
        /*
            java.lang.Class<java.lang.String> r0 = java.lang.String.class
            java.lang.String r1 = "add"
            java.lang.Class r2 = java.lang.Integer.TYPE
            java.lang.Class<android.os.WorkSource> r3 = android.os.WorkSource.class
            int r4 = android.os.Process.myUid()
            com.google.android.gms.common.util.o.f13447a = r4
            r4 = 0
            java.lang.Class[] r5 = new java.lang.Class[]{r2}     // Catch: java.lang.Exception -> L18
            java.lang.reflect.Method r5 = r3.getMethod(r1, r5)     // Catch: java.lang.Exception -> L18
            goto L19
        L18:
            r5 = r4
        L19:
            com.google.android.gms.common.util.o.f13448b = r5
            java.lang.Class[] r5 = new java.lang.Class[]{r2, r0}     // Catch: java.lang.Exception -> L24
            java.lang.reflect.Method r1 = r3.getMethod(r1, r5)     // Catch: java.lang.Exception -> L24
            goto L25
        L24:
            r1 = r4
        L25:
            com.google.android.gms.common.util.o.f13449c = r1
            java.lang.String r1 = "size"
            java.lang.reflect.Method r1 = r3.getMethod(r1, r4)     // Catch: java.lang.Exception -> L2e
            goto L2f
        L2e:
            r1 = r4
        L2f:
            com.google.android.gms.common.util.o.f13450d = r1
            java.lang.String r1 = "get"
            java.lang.Class[] r5 = new java.lang.Class[]{r2}     // Catch: java.lang.Exception -> L3c
            java.lang.reflect.Method r1 = r3.getMethod(r1, r5)     // Catch: java.lang.Exception -> L3c
            goto L3d
        L3c:
            r1 = r4
        L3d:
            com.google.android.gms.common.util.o.f13451e = r1
            java.lang.String r1 = "getName"
            java.lang.Class[] r5 = new java.lang.Class[]{r2}     // Catch: java.lang.Exception -> L4a
            java.lang.reflect.Method r1 = r3.getMethod(r1, r5)     // Catch: java.lang.Exception -> L4a
            goto L4b
        L4a:
            r1 = r4
        L4b:
            com.google.android.gms.common.util.o.f13452f = r1
            boolean r1 = com.google.android.gms.common.util.k.f()
            java.lang.String r5 = "WorkSourceUtil"
            if (r1 == 0) goto L62
            java.lang.String r1 = "createWorkChain"
            java.lang.reflect.Method r1 = r3.getMethod(r1, r4)     // Catch: java.lang.Exception -> L5c
            goto L63
        L5c:
            r1 = move-exception
            java.lang.String r6 = "Missing WorkChain API createWorkChain"
            android.util.Log.w(r5, r6, r1)
        L62:
            r1 = r4
        L63:
            com.google.android.gms.common.util.o.f13453g = r1
            boolean r1 = com.google.android.gms.common.util.k.f()
            if (r1 == 0) goto L82
            java.lang.String r1 = "android.os.WorkSource$WorkChain"
            java.lang.Class r1 = java.lang.Class.forName(r1)     // Catch: java.lang.Exception -> L7c
            java.lang.String r6 = "addNode"
            java.lang.Class[] r0 = new java.lang.Class[]{r2, r0}     // Catch: java.lang.Exception -> L7c
            java.lang.reflect.Method r0 = r1.getMethod(r6, r0)     // Catch: java.lang.Exception -> L7c
            goto L83
        L7c:
            r0 = move-exception
            java.lang.String r1 = "Missing WorkChain class"
            android.util.Log.w(r5, r1, r0)
        L82:
            r0 = r4
        L83:
            com.google.android.gms.common.util.o.f13454h = r0
            boolean r0 = com.google.android.gms.common.util.k.f()
            if (r0 == 0) goto L96
            java.lang.String r0 = "isEmpty"
            java.lang.reflect.Method r0 = r3.getMethod(r0, r4)     // Catch: java.lang.Exception -> L96
            r1 = 1
            r0.setAccessible(r1)     // Catch: java.lang.Exception -> L97
            goto L97
        L96:
            r0 = r4
        L97:
            com.google.android.gms.common.util.o.f13455i = r0
            com.google.android.gms.common.util.o.f13456j = r4
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.common.util.o.<clinit>():void");
    }

    public static void a(WorkSource workSource, int i10, String str) {
        Method method = f13449c;
        if (method != null) {
            if (str == null) {
                str = "";
            }
            try {
                method.invoke(workSource, Integer.valueOf(i10), str);
                return;
            } catch (Exception e10) {
                Log.wtf("WorkSourceUtil", "Unable to assign blame through WorkSource", e10);
                return;
            }
        }
        Method method2 = f13448b;
        if (method2 != null) {
            try {
                method2.invoke(workSource, Integer.valueOf(i10));
            } catch (Exception e11) {
                Log.wtf("WorkSourceUtil", "Unable to assign blame through WorkSource", e11);
            }
        }
    }

    public static WorkSource b(Context context, String str) {
        if (context != null && context.getPackageManager() != null && str != null) {
            try {
                ApplicationInfo c10 = pf.c.a(context).c(str, 0);
                if (c10 == null) {
                    Log.e("WorkSourceUtil", "Could not get applicationInfo from package: ".concat(str));
                    return null;
                }
                int i10 = c10.uid;
                WorkSource workSource = new WorkSource();
                a(workSource, i10, str);
                return workSource;
            } catch (PackageManager.NameNotFoundException unused) {
                Log.e("WorkSourceUtil", "Could not find package: ".concat(str));
            }
        }
        return null;
    }

    public static synchronized boolean c(Context context) {
        synchronized (o.class) {
            Boolean bool = f13456j;
            if (bool != null) {
                return bool.booleanValue();
            }
            boolean z10 = false;
            if (context == null) {
                return false;
            }
            if (androidx.core.content.a.a(context, "android.permission.UPDATE_DEVICE_STATS") == 0) {
                z10 = true;
            }
            f13456j = Boolean.valueOf(z10);
            return z10;
        }
    }

    public static boolean d(WorkSource workSource) {
        Method method = f13455i;
        if (method != null) {
            try {
                Object invoke = method.invoke(workSource, null);
                gf.q.l(invoke);
                return ((Boolean) invoke).booleanValue();
            } catch (Exception e10) {
                Log.e("WorkSourceUtil", "Unable to check WorkSource emptiness", e10);
            }
        }
        if (e(workSource) == 0) {
            return true;
        }
        return false;
    }

    public static int e(WorkSource workSource) {
        Method method = f13450d;
        if (method != null) {
            try {
                Object invoke = method.invoke(workSource, null);
                gf.q.l(invoke);
                return ((Integer) invoke).intValue();
            } catch (Exception e10) {
                Log.wtf("WorkSourceUtil", "Unable to assign blame through WorkSource", e10);
                return 0;
            }
        }
        return 0;
    }
}
