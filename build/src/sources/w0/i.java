package w0;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final h f52021a = new h();

    public static final void a(Object obj, Function1 function1, a aVar, int i10) {
        if (c.c()) {
            c.e(-1371986847, i10, -1, "androidx.compose.runtime.DisposableEffect (Effects.kt:153)");
        }
        boolean h10 = aVar.h(obj);
        Object d10 = aVar.d();
        if (h10 || d10 == a.f52001a.a()) {
            d10 = new f(function1);
            aVar.c(d10);
        }
        f fVar = (f) d10;
        if (c.c()) {
            c.d();
        }
    }

    public static final void b(Object obj, Object obj2, Object obj3, Function2 function2, a aVar, int i10) {
        if (c.c()) {
            c.e(-54093371, i10, -1, "androidx.compose.runtime.LaunchedEffect (Effects.kt:384)");
        }
        CoroutineContext b10 = aVar.b();
        boolean h10 = aVar.h(obj) | aVar.h(obj2) | aVar.h(obj3);
        Object d10 = aVar.d();
        if (h10 || d10 == a.f52001a.a()) {
            d10 = new l(b10, function2);
            aVar.c(d10);
        }
        l lVar = (l) d10;
        if (c.c()) {
            c.d();
        }
    }

    public static final void c(Object obj, Object obj2, Function2 function2, a aVar, int i10) {
        if (c.c()) {
            c.e(590241125, i10, -1, "androidx.compose.runtime.LaunchedEffect (Effects.kt:360)");
        }
        CoroutineContext b10 = aVar.b();
        boolean h10 = aVar.h(obj) | aVar.h(obj2);
        Object d10 = aVar.d();
        if (h10 || d10 == a.f52001a.a()) {
            d10 = new l(b10, function2);
            aVar.c(d10);
        }
        l lVar = (l) d10;
        if (c.c()) {
            c.d();
        }
    }

    public static final void d(Object obj, Function2 function2, a aVar, int i10) {
        if (c.c()) {
            c.e(1179185413, i10, -1, "androidx.compose.runtime.LaunchedEffect (Effects.kt:341)");
        }
        CoroutineContext b10 = aVar.b();
        boolean h10 = aVar.h(obj);
        Object d10 = aVar.d();
        if (h10 || d10 == a.f52001a.a()) {
            d10 = new l(b10, function2);
            aVar.c(d10);
        }
        l lVar = (l) d10;
        if (c.c()) {
            c.d();
        }
    }
}
