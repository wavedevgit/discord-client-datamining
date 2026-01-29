package io.sentry.util;

import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.util.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void accept(Object obj);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(Object obj, Class cls);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        void accept(Object obj);
    }

    public static /* synthetic */ void c(Object obj, Class cls) {
    }

    public static /* synthetic */ void d(Object obj) {
    }

    public static Hint e(Object obj) {
        Hint hint = new Hint();
        p(hint, obj);
        return hint;
    }

    public static io.sentry.hints.h f(Hint hint) {
        return (io.sentry.hints.h) hint.d("sentry:eventDropReason", io.sentry.hints.h.class);
    }

    public static Object g(Hint hint) {
        return hint.c("sentry:typeCheckHint");
    }

    public static boolean h(Hint hint, Class cls) {
        return cls.isInstance(g(hint));
    }

    public static boolean i(Hint hint) {
        return Boolean.TRUE.equals(hint.d("sentry:isFromHybridSdk", Boolean.class));
    }

    public static void j(Hint hint, Class cls, final c cVar) {
        l(hint, cls, new a() { // from class: io.sentry.util.l
            @Override // io.sentry.util.n.a
            public final void accept(Object obj) {
                n.d(obj);
            }
        }, new b() { // from class: io.sentry.util.m
            @Override // io.sentry.util.n.b
            public final void a(Object obj, Class cls2) {
                n.c.this.accept(obj);
            }
        });
    }

    public static void k(Hint hint, Class cls, a aVar) {
        l(hint, cls, aVar, new b() { // from class: io.sentry.util.j
            @Override // io.sentry.util.n.b
            public final void a(Object obj, Class cls2) {
                n.c(obj, cls2);
            }
        });
    }

    public static void l(Hint hint, Class cls, a aVar, b bVar) {
        Object g10 = g(hint);
        if (h(hint, cls) && g10 != null) {
            aVar.accept(g10);
        } else {
            bVar.a(g10, cls);
        }
    }

    public static void m(Hint hint, Class cls, final ILogger iLogger, a aVar) {
        l(hint, cls, aVar, new b() { // from class: io.sentry.util.k
            @Override // io.sentry.util.n.b
            public final void a(Object obj, Class cls2) {
                v.a(cls2, obj, ILogger.this);
            }
        });
    }

    public static void n(Hint hint, io.sentry.hints.h hVar) {
        hint.k("sentry:eventDropReason", hVar);
    }

    public static void o(Hint hint, String str) {
        if (!str.startsWith("sentry.javascript") && !str.startsWith("sentry.dart") && !str.startsWith("sentry.dotnet")) {
            return;
        }
        hint.k("sentry:isFromHybridSdk", Boolean.TRUE);
    }

    public static void p(Hint hint, Object obj) {
        hint.k("sentry:typeCheckHint", obj);
    }

    public static boolean q(Hint hint) {
        if ((!h(hint, io.sentry.hints.e.class) && !h(hint, io.sentry.hints.c.class)) || h(hint, io.sentry.hints.b.class)) {
            return true;
        }
        return false;
    }
}
