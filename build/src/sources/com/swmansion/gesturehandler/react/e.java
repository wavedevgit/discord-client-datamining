package com.swmansion.gesturehandler.react;

import kn.b;
import kn.b0;
import kn.d;
import kn.m;
import kn.o;
import kn.p;
import kn.q;
import kn.t;
import kn.u;
import kn.x;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f18086a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final d.c[] f18087b = {new q.d(), new b0.b(), new o.b(), new t.b(), new u.a(), new x.b(), new b.C0450b(), new p.a(), new m.b()};

    private e() {
    }

    public final d.c a(kn.d handler) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handler, "handler");
        for (d.c cVar : f18087b) {
            if (Intrinsics.areEqual(cVar.e(), handler.getClass())) {
                return cVar;
            }
        }
        return null;
    }

    public final d.c b(String handlerName) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handlerName, "handlerName");
        for (d.c cVar : f18087b) {
            if (Intrinsics.areEqual(cVar.d(), handlerName)) {
                return cVar;
            }
        }
        return null;
    }
}
