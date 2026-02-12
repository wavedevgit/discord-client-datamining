package l5;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    public static boolean f35576a = false;

    /* renamed from: b  reason: collision with root package name */
    private static boolean f35577b = false;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f35578c = true;

    /* renamed from: d  reason: collision with root package name */
    private static boolean f35579d = true;

    /* renamed from: f  reason: collision with root package name */
    private static v5.f f35581f;

    /* renamed from: g  reason: collision with root package name */
    private static v5.e f35582g;

    /* renamed from: h  reason: collision with root package name */
    private static volatile v5.h f35583h;

    /* renamed from: i  reason: collision with root package name */
    private static volatile v5.g f35584i;

    /* renamed from: j  reason: collision with root package name */
    private static ThreadLocal f35585j;

    /* renamed from: e  reason: collision with root package name */
    private static a f35580e = a.AUTOMATIC;

    /* renamed from: k  reason: collision with root package name */
    private static p5.b f35586k = new p5.c();

    public static /* synthetic */ File a(Context context) {
        return new File(context.getCacheDir(), "lottie_network_cache");
    }

    public static void b(String str) {
        if (!f35577b) {
            return;
        }
        g().a(str);
    }

    public static float c(String str) {
        if (!f35577b) {
            return 0.0f;
        }
        return g().b(str);
    }

    public static a d() {
        return f35580e;
    }

    public static boolean e() {
        return f35579d;
    }

    public static p5.b f() {
        return f35586k;
    }

    private static y5.f g() {
        y5.f fVar = (y5.f) f35585j.get();
        if (fVar == null) {
            y5.f fVar2 = new y5.f();
            f35585j.set(fVar2);
            return fVar2;
        }
        return fVar;
    }

    public static boolean h() {
        return f35577b;
    }

    public static v5.g i(Context context) {
        v5.g gVar;
        if (!f35578c) {
            return null;
        }
        final Context applicationContext = context.getApplicationContext();
        v5.g gVar2 = f35584i;
        if (gVar2 == null) {
            synchronized (v5.g.class) {
                try {
                    gVar = f35584i;
                    if (gVar == null) {
                        v5.e eVar = f35582g;
                        if (eVar == null) {
                            eVar = new v5.e() { // from class: l5.d
                                @Override // v5.e
                                public final File a() {
                                    return e.a(applicationContext);
                                }
                            };
                        }
                        gVar = new v5.g(eVar);
                        f35584i = gVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return gVar;
        }
        return gVar2;
    }

    public static v5.h j(Context context) {
        v5.h hVar;
        v5.h hVar2 = f35583h;
        if (hVar2 == null) {
            synchronized (v5.h.class) {
                try {
                    hVar = f35583h;
                    if (hVar == null) {
                        v5.g i10 = i(context);
                        v5.f fVar = f35581f;
                        if (fVar == null) {
                            fVar = new v5.b();
                        }
                        hVar = new v5.h(i10, fVar);
                        f35583h = hVar;
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
