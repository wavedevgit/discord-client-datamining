package com.swmansion.gesturehandler.react;

import android.view.MotionEvent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.swmansion.gesturehandler.react.c;
import kn.d;
import kn.r;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements r {

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f18084a;

    /* renamed from: b  reason: collision with root package name */
    private final jn.h f18085b;

    public d(ReactApplicationContext reactApplicationContext) {
        Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
        this.f18084a = reactApplicationContext;
        this.f18085b = new jn.h();
    }

    private final void d(kn.d dVar) {
        d.c a10;
        if (dVar.T() >= 0 && dVar.S() == 4 && (a10 = e.f18086a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2) {
                    if (F != 3) {
                        if (F == 4) {
                            g("onGestureHandlerEvent", c.f18079d.a(a10.c(dVar)));
                            return;
                        }
                        return;
                    }
                    g("onGestureHandlerEvent", c.f18079d.a(a10.c(dVar)));
                    return;
                }
                h(c.f18079d.b(dVar, a10.c(dVar), true));
                return;
            }
            i(c.a.c(c.f18079d, dVar, a10.c(dVar), false, 4, null));
        }
    }

    private final void e(kn.d dVar, int i10, int i11) {
        d.c a10;
        if (dVar.T() >= 0 && (a10 = e.f18086a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2 && F != 3) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerStateChange", k.f18098d.a(a10.c(dVar), i10, i11));
                    return;
                }
                g("onGestureHandlerStateChange", k.f18098d.a(a10.c(dVar), i10, i11));
                return;
            }
            i(k.f18098d.b(dVar, i10, i11, a10.c(dVar)));
        }
    }

    private final void f(kn.d dVar) {
        if (dVar.T() >= 0) {
            if (dVar.S() == 2 || dVar.S() == 4 || dVar.S() == 0 || dVar.W() != null) {
                int F = dVar.F();
                if (F != 1) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerEvent", l.f18103c.a(dVar));
                    return;
                }
                i(l.f18103c.b(dVar));
            }
        }
    }

    private final void g(String str, WritableMap writableMap) {
        a.a(this.f18084a).emit(str, writableMap);
    }

    private final void h(c cVar) {
        jn.g.a(this.f18084a, cVar);
    }

    private final void i(Event event) {
        this.f18085b.a(event, this.f18084a);
    }

    @Override // kn.r
    public void a(kn.d handler, MotionEvent event) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(event, "event");
        d(handler);
    }

    @Override // kn.r
    public void b(kn.d handler, int i10, int i11) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        e(handler, i10, i11);
    }

    @Override // kn.r
    public void c(kn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        f(handler);
    }
}
