package com.swmansion.gesturehandler.react;

import android.view.MotionEvent;
import cn.d;
import cn.r;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.swmansion.gesturehandler.react.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements r {

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f19083a;

    /* renamed from: b  reason: collision with root package name */
    private final bn.h f19084b;

    public d(ReactApplicationContext reactApplicationContext) {
        Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
        this.f19083a = reactApplicationContext;
        this.f19084b = new bn.h();
    }

    private final void d(cn.d dVar) {
        d.c a10;
        if (dVar.T() >= 0 && dVar.S() == 4 && (a10 = e.f19085a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2) {
                    if (F != 3) {
                        if (F == 4) {
                            g("onGestureHandlerEvent", c.f19078d.a(a10.c(dVar)));
                            return;
                        }
                        return;
                    }
                    g("onGestureHandlerEvent", c.f19078d.a(a10.c(dVar)));
                    return;
                }
                h(c.f19078d.b(dVar, a10.c(dVar), true));
                return;
            }
            i(c.a.c(c.f19078d, dVar, a10.c(dVar), false, 4, null));
        }
    }

    private final void e(cn.d dVar, int i10, int i11) {
        d.c a10;
        if (dVar.T() >= 0 && (a10 = e.f19085a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2 && F != 3) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerStateChange", k.f19097d.a(a10.c(dVar), i10, i11));
                    return;
                }
                g("onGestureHandlerStateChange", k.f19097d.a(a10.c(dVar), i10, i11));
                return;
            }
            i(k.f19097d.b(dVar, i10, i11, a10.c(dVar)));
        }
    }

    private final void f(cn.d dVar) {
        if (dVar.T() >= 0) {
            if (dVar.S() == 2 || dVar.S() == 4 || dVar.S() == 0 || dVar.W() != null) {
                int F = dVar.F();
                if (F != 1) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerEvent", l.f19102c.a(dVar));
                    return;
                }
                i(l.f19102c.b(dVar));
            }
        }
    }

    private final void g(String str, WritableMap writableMap) {
        a.a(this.f19083a).emit(str, writableMap);
    }

    private final void h(c cVar) {
        bn.g.a(this.f19083a, cVar);
    }

    private final void i(Event event) {
        this.f19084b.a(event, this.f19083a);
    }

    @Override // cn.r
    public void a(cn.d handler, MotionEvent event) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(event, "event");
        d(handler);
    }

    @Override // cn.r
    public void b(cn.d handler, int i10, int i11) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        e(handler, i10, i11);
    }

    @Override // cn.r
    public void c(cn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        f(handler);
    }
}
