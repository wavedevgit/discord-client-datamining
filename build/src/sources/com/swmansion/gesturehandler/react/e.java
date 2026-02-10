package com.swmansion.gesturehandler.react;

import kotlin.jvm.internal.Intrinsics;
import ln.b;
import ln.b0;
import ln.d;
import ln.m;
import ln.o;
import ln.p;
import ln.q;
import ln.t;
import ln.u;
import ln.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f18226a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final d.c[] f18227b = {new q.d(), new b0.b(), new o.b(), new t.b(), new u.a(), new x.b(), new b.C0512b(), new p.a(), new m.b()};

    private e() {
    }

    public final d.c a(ln.d handler) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handler, "handler");
        for (d.c cVar : f18227b) {
            if (Intrinsics.areEqual(cVar.e(), handler.getClass())) {
                return cVar;
            }
        }
        return null;
    }

    public final d.c b(String handlerName) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handlerName, "handlerName");
        for (d.c cVar : f18227b) {
            if (Intrinsics.areEqual(cVar.d(), handlerName)) {
                return cVar;
            }
        }
        return null;
    }
}
