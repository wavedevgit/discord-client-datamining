package com.swmansion.gesturehandler.react;

import android.view.MotionEvent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.swmansion.gesturehandler.react.c;
import kotlin.jvm.internal.Intrinsics;
import ln.d;
import ln.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements r {

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f18224a;

    /* renamed from: b  reason: collision with root package name */
    private final kn.h f18225b;

    public d(ReactApplicationContext reactApplicationContext) {
        Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
        this.f18224a = reactApplicationContext;
        this.f18225b = new kn.h();
    }

    private final void d(ln.d dVar) {
        d.c a10;
        if (dVar.T() >= 0 && dVar.S() == 4 && (a10 = e.f18226a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2) {
                    if (F != 3) {
                        if (F == 4) {
                            g("onGestureHandlerEvent", c.f18219d.a(a10.c(dVar)));
                            return;
                        }
                        return;
                    }
                    g("onGestureHandlerEvent", c.f18219d.a(a10.c(dVar)));
                    return;
                }
                h(c.f18219d.b(dVar, a10.c(dVar), true));
                return;
            }
            i(c.a.c(c.f18219d, dVar, a10.c(dVar), false, 4, null));
        }
    }

    private final void e(ln.d dVar, int i10, int i11) {
        d.c a10;
        if (dVar.T() >= 0 && (a10 = e.f18226a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2 && F != 3) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerStateChange", k.f18238d.a(a10.c(dVar), i10, i11));
                    return;
                }
                g("onGestureHandlerStateChange", k.f18238d.a(a10.c(dVar), i10, i11));
                return;
            }
            i(k.f18238d.b(dVar, i10, i11, a10.c(dVar)));
        }
    }

    private final void f(ln.d dVar) {
        if (dVar.T() >= 0) {
            if (dVar.S() == 2 || dVar.S() == 4 || dVar.S() == 0 || dVar.W() != null) {
                int F = dVar.F();
                if (F != 1) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerEvent", l.f18243c.a(dVar));
                    return;
                }
                i(l.f18243c.b(dVar));
            }
        }
    }

    private final void g(String str, WritableMap writableMap) {
        a.a(this.f18224a).emit(str, writableMap);
    }

    private final void h(c cVar) {
        kn.g.a(this.f18224a, cVar);
    }

    private final void i(Event event) {
        this.f18225b.a(event, this.f18224a);
    }

    @Override // ln.r
    public void a(ln.d handler, int i10, int i11) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        e(handler, i10, i11);
    }

    @Override // ln.r
    public void b(ln.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        f(handler);
    }

    @Override // ln.r
    public void c(ln.d handler, MotionEvent event) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(event, "event");
        d(handler);
    }
}
