package com.swmansion.gesturehandler.react;

import android.view.MotionEvent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.swmansion.gesturehandler.react.c;
import kotlin.jvm.internal.Intrinsics;
import nn.d;
import nn.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements r {

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f18973a;

    /* renamed from: b  reason: collision with root package name */
    private final mn.h f18974b;

    public d(ReactApplicationContext reactApplicationContext) {
        Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
        this.f18973a = reactApplicationContext;
        this.f18974b = new mn.h();
    }

    private final void d(nn.d dVar) {
        d.c a10;
        if (dVar.T() >= 0 && dVar.S() == 4 && (a10 = e.f18975a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2) {
                    if (F != 3) {
                        if (F == 4) {
                            g("onGestureHandlerEvent", c.f18968d.a(a10.c(dVar)));
                            return;
                        }
                        return;
                    }
                    g("onGestureHandlerEvent", c.f18968d.a(a10.c(dVar)));
                    return;
                }
                h(c.f18968d.b(dVar, a10.c(dVar), true));
                return;
            }
            i(c.a.c(c.f18968d, dVar, a10.c(dVar), false, 4, null));
        }
    }

    private final void e(nn.d dVar, int i10, int i11) {
        d.c a10;
        if (dVar.T() >= 0 && (a10 = e.f18975a.a(dVar)) != null) {
            int F = dVar.F();
            if (F != 1) {
                if (F != 2 && F != 3) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerStateChange", k.f18987d.a(a10.c(dVar), i10, i11));
                    return;
                }
                g("onGestureHandlerStateChange", k.f18987d.a(a10.c(dVar), i10, i11));
                return;
            }
            i(k.f18987d.b(dVar, i10, i11, a10.c(dVar)));
        }
    }

    private final void f(nn.d dVar) {
        if (dVar.T() >= 0) {
            if (dVar.S() == 2 || dVar.S() == 4 || dVar.S() == 0 || dVar.W() != null) {
                int F = dVar.F();
                if (F != 1) {
                    if (F != 4) {
                        return;
                    }
                    g("onGestureHandlerEvent", l.f18992c.a(dVar));
                    return;
                }
                i(l.f18992c.b(dVar));
            }
        }
    }

    private final void g(String str, WritableMap writableMap) {
        a.a(this.f18973a).emit(str, writableMap);
    }

    private final void h(c cVar) {
        mn.g.a(this.f18973a, cVar);
    }

    private final void i(Event event) {
        this.f18974b.a(event, this.f18973a);
    }

    @Override // nn.r
    public void a(nn.d handler, MotionEvent event) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(event, "event");
        d(handler);
    }

    @Override // nn.r
    public void b(nn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        f(handler);
    }

    @Override // nn.r
    public void c(nn.d handler, int i10, int i11) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        e(handler, i10, i11);
    }
}
