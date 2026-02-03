package com.swmansion.gesturehandler.react;

import android.view.MotionEvent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.swmansion.gesturehandler.react.c;
import fn.d;
import fn.r;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements r {

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f17698a;

    /* renamed from: b  reason: collision with root package name */
    private final en.h f17699b;

    public d(ReactApplicationContext reactApplicationContext) {
        Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
        this.f17698a = reactApplicationContext;
        this.f17699b = new en.h();
    }

    private final void d(fn.d dVar) {
        d.c a10;
        if (dVar.T() >= 0 && dVar.S() == 4 && (a10 = e.f17700a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2) {
                    if (F != 3) {
                        if (F == 4) {
                            g("onGestureHandlerEvent", c.f17693d.a(a10.c(dVar)));
                            return;
                        }
                        return;
                    }
                    g("onGestureHandlerEvent", c.f17693d.a(a10.c(dVar)));
                    return;
                }
                h(c.f17693d.b(dVar, a10.c(dVar), true));
                return;
            }
            i(c.a.c(c.f17693d, dVar, a10.c(dVar), false, 4, null));
        }
    }

    private final void e(fn.d dVar, int i10, int i11) {
        d.c a10;
        if (dVar.T() >= 0 && (a10 = e.f17700a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2 && F != 3) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerStateChange", k.f17712d.a(a10.c(dVar), i10, i11));
                    return;
                }
                g("onGestureHandlerStateChange", k.f17712d.a(a10.c(dVar), i10, i11));
                return;
            }
            i(k.f17712d.b(dVar, i10, i11, a10.c(dVar)));
        }
    }

    private final void f(fn.d dVar) {
        if (dVar.T() >= 0) {
            if (dVar.S() == 2 || dVar.S() == 4 || dVar.S() == 0 || dVar.W() != null) {
                int F = dVar.F();
                if (F != 1) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerEvent", l.f17717c.a(dVar));
                    return;
                }
                i(l.f17717c.b(dVar));
            }
        }
    }

    private final void g(String str, WritableMap writableMap) {
        a.a(this.f17698a).emit(str, writableMap);
    }

    private final void h(c cVar) {
        en.g.a(this.f17698a, cVar);
    }

    private final void i(Event event) {
        this.f17699b.a(event, this.f17698a);
    }

    @Override // fn.r
    public void a(fn.d handler, int i10, int i11) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        e(handler, i10, i11);
    }

    @Override // fn.r
    public void b(fn.d handler, MotionEvent event) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(event, "event");
        d(handler);
    }

    @Override // fn.r
    public void c(fn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        f(handler);
    }
}
