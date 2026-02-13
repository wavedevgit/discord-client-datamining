package l5;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    public static boolean f36144a = false;

    /* renamed from: b  reason: collision with root package name */
    private static boolean f36145b = false;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f36146c = true;

    /* renamed from: d  reason: collision with root package name */
    private static boolean f36147d = true;

    /* renamed from: f  reason: collision with root package name */
    private static v5.f f36149f;

    /* renamed from: g  reason: collision with root package name */
    private static v5.e f36150g;

    /* renamed from: h  reason: collision with root package name */
    private static volatile v5.h f36151h;

    /* renamed from: i  reason: collision with root package name */
    private static volatile v5.g f36152i;

    /* renamed from: j  reason: collision with root package name */
    private static ThreadLocal f36153j;

    /* renamed from: e  reason: collision with root package name */
    private static a f36148e = a.AUTOMATIC;

    /* renamed from: k  reason: collision with root package name */
    private static p5.b f36154k = new p5.c();

    public static /* synthetic */ File a(Context context) {
        return new File(context.getCacheDir(), "lottie_network_cache");
    }

    public static void b(String str) {
        if (!f36145b) {
            return;
        }
        g().a(str);
    }

    public static float c(String str) {
        if (!f36145b) {
            return 0.0f;
        }
        return g().b(str);
    }

    public static a d() {
        return f36148e;
    }

    public static boolean e() {
        return f36147d;
    }

    public static p5.b f() {
        return f36154k;
    }

    private static y5.f g() {
        y5.f fVar = (y5.f) f36153j.get();
        if (fVar == null) {
            y5.f fVar2 = new y5.f();
            f36153j.set(fVar2);
            return fVar2;
        }
        return fVar;
    }

    public static boolean h() {
        return f36145b;
    }

    public static v5.g i(Context context) {
        v5.g gVar;
        if (!f36146c) {
            return null;
        }
        final Context applicationContext = context.getApplicationContext();
        v5.g gVar2 = f36152i;
        if (gVar2 == null) {
            synchronized (v5.g.class) {
                try {
                    gVar = f36152i;
                    if (gVar == null) {
                        v5.e eVar = f36150g;
                        if (eVar == null) {
                            eVar = new v5.e() { // from class: l5.d
                                @Override // v5.e
                                public final File a() {
                                    return e.a(applicationContext);
                                }
                            };
                        }
                        gVar = new v5.g(eVar);
                        f36152i = gVar;
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
        v5.h hVar2 = f36151h;
        if (hVar2 == null) {
            synchronized (v5.h.class) {
                try {
                    hVar = f36151h;
                    if (hVar == null) {
                        v5.g i10 = i(context);
                        v5.f fVar = f36149f;
                        if (fVar == null) {
                            fVar = new v5.b();
                        }
                        hVar = new v5.h(i10, fVar);
                        f36151h = hVar;
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
