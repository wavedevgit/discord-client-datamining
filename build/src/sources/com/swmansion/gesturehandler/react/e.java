package com.swmansion.gesturehandler.react;

import kotlin.jvm.internal.Intrinsics;
import nn.b;
import nn.b0;
import nn.d;
import nn.m;
import nn.o;
import nn.p;
import nn.q;
import nn.t;
import nn.u;
import nn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f18976a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final d.c[] f18977b = {new q.d(), new b0.b(), new o.b(), new t.b(), new u.a(), new x.b(), new b.C0536b(), new p.a(), new m.b()};

    private e() {
    }

    public final d.c a(nn.d handler) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handler, "handler");
        for (d.c cVar : f18977b) {
            if (Intrinsics.areEqual(cVar.e(), handler.getClass())) {
                return cVar;
            }
        }
        return null;
    }

    public final d.c b(String handlerName) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handlerName, "handlerName");
        for (d.c cVar : f18977b) {
            if (Intrinsics.areEqual(cVar.d(), handlerName)) {
                return cVar;
            }
        }
        return null;
    }
}
