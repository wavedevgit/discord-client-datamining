package l5;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    public static boolean f36881a = false;

    /* renamed from: b  reason: collision with root package name */
    private static boolean f36882b = false;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f36883c = true;

    /* renamed from: d  reason: collision with root package name */
    private static boolean f36884d = true;

    /* renamed from: e  reason: collision with root package name */
    private static a f36885e = a.AUTOMATIC;

    /* renamed from: f  reason: collision with root package name */
    private static u5.f f36886f;

    /* renamed from: g  reason: collision with root package name */
    private static u5.e f36887g;

    /* renamed from: h  reason: collision with root package name */
    private static volatile u5.h f36888h;

    /* renamed from: i  reason: collision with root package name */
    private static volatile u5.g f36889i;

    /* renamed from: j  reason: collision with root package name */
    private static ThreadLocal f36890j;

    public static /* synthetic */ File a(Context context) {
        return new File(context.getCacheDir(), "lottie_network_cache");
    }

    public static void b(String str) {
        if (!f36882b) {
            return;
        }
        f().a(str);
    }

    public static float c(String str) {
        if (!f36882b) {
            return 0.0f;
        }
        return f().b(str);
    }

    public static a d() {
        return f36885e;
    }

    public static boolean e() {
        return f36884d;
    }

    private static x5.f f() {
        x5.f fVar = (x5.f) f36890j.get();
        if (fVar == null) {
            x5.f fVar2 = new x5.f();
            f36890j.set(fVar2);
            return fVar2;
        }
        return fVar;
    }

    public static u5.g g(Context context) {
        u5.g gVar;
        if (!f36883c) {
            return null;
        }
        final Context applicationContext = context.getApplicationContext();
        u5.g gVar2 = f36889i;
        if (gVar2 == null) {
            synchronized (u5.g.class) {
                try {
                    gVar = f36889i;
                    if (gVar == null) {
                        u5.e eVar = f36887g;
                        if (eVar == null) {
                            eVar = new u5.e() { // from class: l5.d
                                @Override // u5.e
                                public final File a() {
                                    return e.a(applicationContext);
                                }
                            };
                        }
                        gVar = new u5.g(eVar);
                        f36889i = gVar;
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
        u5.h hVar2 = f36888h;
        if (hVar2 == null) {
            synchronized (u5.h.class) {
                try {
                    hVar = f36888h;
                    if (hVar == null) {
                        u5.g g10 = g(context);
                        u5.f fVar = f36886f;
                        if (fVar == null) {
                            fVar = new u5.b();
                        }
                        hVar = new u5.h(g10, fVar);
                        f36888h = hVar;
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
