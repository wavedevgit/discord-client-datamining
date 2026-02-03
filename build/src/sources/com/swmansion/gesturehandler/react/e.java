package com.swmansion.gesturehandler.react;

import fn.b;
import fn.b0;
import fn.d;
import fn.m;
import fn.o;
import fn.p;
import fn.q;
import fn.t;
import fn.u;
import fn.x;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f17700a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final d.c[] f17701b = {new q.d(), new b0.b(), new o.b(), new t.b(), new u.a(), new x.b(), new b.C0318b(), new p.a(), new m.b()};

    private e() {
    }

    public final d.c a(fn.d handler) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handler, "handler");
        for (d.c cVar : f17701b) {
            if (Intrinsics.areEqual(cVar.e(), handler.getClass())) {
                return cVar;
            }
        }
        return null;
    }

    public final d.c b(String handlerName) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handlerName, "handlerName");
        for (d.c cVar : f17701b) {
            if (Intrinsics.areEqual(cVar.d(), handlerName)) {
                return cVar;
            }
        }
        return null;
    }
}
