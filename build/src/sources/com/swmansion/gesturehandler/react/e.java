package com.swmansion.gesturehandler.react;

import cn.b;
import cn.b0;
import cn.d;
import cn.m;
import cn.o;
import cn.p;
import cn.q;
import cn.t;
import cn.u;
import cn.x;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f19085a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final d.c[] f19086b = {new q.d(), new b0.b(), new o.b(), new t.b(), new u.a(), new x.b(), new b.C0137b(), new p.a(), new m.b()};

    private e() {
    }

    public final d.c a(cn.d handler) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handler, "handler");
        for (d.c cVar : f19086b) {
            if (Intrinsics.areEqual(cVar.e(), handler.getClass())) {
                return cVar;
            }
        }
        return null;
    }

    public final d.c b(String handlerName) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handlerName, "handlerName");
        for (d.c cVar : f19086b) {
            if (Intrinsics.areEqual(cVar.d(), handlerName)) {
                return cVar;
            }
        }
        return null;
    }
}
