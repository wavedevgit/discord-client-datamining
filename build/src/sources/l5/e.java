package l5;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    public static boolean f35848a = false;

    /* renamed from: b  reason: collision with root package name */
    private static boolean f35849b = false;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f35850c = true;

    /* renamed from: d  reason: collision with root package name */
    private static boolean f35851d = true;

    /* renamed from: e  reason: collision with root package name */
    private static a f35852e = a.AUTOMATIC;

    /* renamed from: f  reason: collision with root package name */
    private static u5.f f35853f;

    /* renamed from: g  reason: collision with root package name */
    private static u5.e f35854g;

    /* renamed from: h  reason: collision with root package name */
    private static volatile u5.h f35855h;

    /* renamed from: i  reason: collision with root package name */
    private static volatile u5.g f35856i;

    /* renamed from: j  reason: collision with root package name */
    private static ThreadLocal f35857j;

    public static /* synthetic */ File a(Context context) {
        return new File(context.getCacheDir(), "lottie_network_cache");
    }

    public static void b(String str) {
        if (!f35849b) {
            return;
        }
        f().a(str);
    }

    public static float c(String str) {
        if (!f35849b) {
            return 0.0f;
        }
        return f().b(str);
    }

    public static a d() {
        return f35852e;
    }

    public static boolean e() {
        return f35851d;
    }

    private static x5.f f() {
        x5.f fVar = (x5.f) f35857j.get();
        if (fVar == null) {
            x5.f fVar2 = new x5.f();
            f35857j.set(fVar2);
            return fVar2;
        }
        return fVar;
    }

    public static u5.g g(Context context) {
        u5.g gVar;
        if (!f35850c) {
            return null;
        }
        final Context applicationContext = context.getApplicationContext();
        u5.g gVar2 = f35856i;
        if (gVar2 == null) {
            synchronized (u5.g.class) {
                try {
                    gVar = f35856i;
                    if (gVar == null) {
                        u5.e eVar = f35854g;
                        if (eVar == null) {
                            eVar = new u5.e() { // from class: l5.d
                                @Override // u5.e
                                public final File a() {
                                    return e.a(applicationContext);
                                }
                            };
                        }
                        gVar = new u5.g(eVar);
                        f35856i = gVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return gVar;
        }
        return gVar2;
    }

    public static u5.h h(Context context) {
        u5.h hVar;
        u5.h hVar2 = f35855h;
        if (hVar2 == null) {
            synchronized (u5.h.class) {
                try {
                    hVar = f35855h;
                    if (hVar == null) {
                        u5.g g10 = g(context);
                        u5.f fVar = f35853f;
                        if (fVar == null) {
                            fVar = new u5.b();
                        }
                        hVar = new u5.h(g10, fVar);
                        f35855h = hVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return hVar;
        }
        return hVar2;
    }
}
