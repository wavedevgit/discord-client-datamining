package com.google.android.gms.net;

import android.content.Context;
import android.content.Intent;
import android.os.Trace;
import android.util.Log;
import com.google.android.gms.common.g;
import com.google.android.gms.common.h;
import com.google.android.gms.common.i;
import com.google.android.gms.dynamite.DynamiteModule;
import gf.q;
import java.lang.reflect.Method;
import org.chromium.net.ApiVersion;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final String f14425a = "a";

    /* renamed from: b  reason: collision with root package name */
    private static final g f14426b = g.f();

    /* renamed from: c  reason: collision with root package name */
    private static final Object f14427c = new Object();

    /* renamed from: d  reason: collision with root package name */
    private static DynamiteModule f14428d = null;

    /* renamed from: e  reason: collision with root package name */
    private static String f14429e = "0";

    /* renamed from: f  reason: collision with root package name */
    private static boolean f14430f;

    public static boolean a() {
        synchronized (f14427c) {
            try {
                boolean z10 = true;
                if (f14430f) {
                    return true;
                }
                if (c() == null) {
                    z10 = false;
                }
                return z10;
            } finally {
            }
        }
    }

    public static void b(Context context) {
        synchronized (f14427c) {
            try {
                if (a()) {
                    return;
                }
                d dVar = new d(context, 37401, 1.0f);
                new e("PlayServices CronetProviderInstaller#installIfNeeded");
                q.m(context, "Context must not be null");
                if (HttpEngineProviderSingleton.getInstance(context).shouldUseHttpEngine()) {
                    f14430f = true;
                    dVar.a();
                    Trace.endSection();
                    dVar.close();
                    return;
                }
                try {
                    ((ClassLoader) q.l(a.class.getClassLoader())).loadClass("org.chromium.net.CronetEngine");
                    int apiLevel = ApiVersion.getApiLevel();
                    new e("PlayServices CronetProviderInstaller#installIfNeeded verifyGooglePlayServicesIsAvailable");
                    try {
                        g gVar = f14426b;
                        gVar.k(context, 11925000);
                        Trace.endSection();
                        try {
                            new e("CronetProviderInstaller#installIfNeeded DynamiteModule#load");
                            try {
                                DynamiteModule e10 = DynamiteModule.e(context, DynamiteModule.f13823b, "com.google.android.gms.cronet_dynamite");
                                Trace.endSection();
                                try {
                                    new e("PlayServices CronetProviderInstaller#installIfNeeded loading class");
                                    try {
                                        Class<?> loadClass = e10.b().getClassLoader().loadClass("org.chromium.net.impl.ImplVersion");
                                        if (loadClass.getClassLoader() != a.class.getClassLoader()) {
                                            Method method = loadClass.getMethod("getApiLevel", null);
                                            Method method2 = loadClass.getMethod("getCronetVersion", null);
                                            int intValue = ((Integer) q.l((Integer) method.invoke(null, null))).intValue();
                                            f14429e = (String) q.l((String) method2.invoke(null, null));
                                            Trace.endSection();
                                            if (apiLevel > intValue) {
                                                Intent b10 = gVar.b(context, 2, "cr");
                                                if (b10 == null) {
                                                    Log.e(f14425a, "Unable to fetch error resolution intent");
                                                    throw new h(2);
                                                }
                                                String str = f14429e;
                                                StringBuilder sb2 = new StringBuilder(String.valueOf(apiLevel).length() + 113 + String.valueOf(intValue).length() + 39 + String.valueOf(str).length());
                                                sb2.append("Google Play Services update is required. The API Level of the client is ");
                                                sb2.append(apiLevel);
                                                sb2.append(". The API Level of the implementation is ");
                                                sb2.append(intValue);
                                                sb2.append(". The Cronet implementation version is ");
                                                sb2.append(str);
                                                throw new i(2, sb2.toString(), b10);
                                            }
                                            f14428d = e10;
                                            dVar.a();
                                            Trace.endSection();
                                            dVar.close();
                                            return;
                                        }
                                        Log.e(f14425a, "ImplVersion class is missing from Cronet module.");
                                        throw new h(8);
                                    } catch (Throwable th2) {
                                        throw th2;
                                    }
                                } catch (Exception e11) {
                                    Log.e(f14425a, "Unable to read Cronet version from the Cronet module ", e11);
                                    throw ((h) new h(8).initCause(e11));
                                }
                            } finally {
                                try {
                                    Trace.endSection();
                                } catch (Throwable th3) {
                                    th2.addSuppressed(th3);
                                }
                            }
                        } catch (DynamiteModule.a e12) {
                            Log.e(f14425a, "Unable to load Cronet module", e12);
                            throw ((h) new h(8).initCause(e12));
                        }
                    } catch (Throwable th4) {
                        try {
                            Trace.endSection();
                        } catch (Throwable th5) {
                            th4.addSuppressed(th5);
                        }
                        throw th4;
                    }
                } catch (ClassNotFoundException e13) {
                    Log.e(f14425a, "Cronet API is not available. Have you included all required dependencies?");
                    throw ((h) new h(10).initCause(e13));
                }
            } catch (Throwable th6) {
                throw th6;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static DynamiteModule c() {
        DynamiteModule dynamiteModule;
        synchronized (f14427c) {
            dynamiteModule = f14428d;
        }
        return dynamiteModule;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String d() {
        String str;
        synchronized (f14427c) {
            str = f14429e;
        }
        return str;
    }
}
