package com.swmansion.gesturehandler.react;

import in.b;
import in.b0;
import in.d;
import in.m;
import in.o;
import in.p;
import in.q;
import in.t;
import in.u;
import in.x;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f18106a = new e();

    /* renamed from: b  reason: collision with root package name */
    private static final d.c[] f18107b = {new q.d(), new b0.b(), new o.b(), new t.b(), new u.a(), new x.b(), new b.C0385b(), new p.a(), new m.b()};

    private e() {
    }

    public final d.c a(in.d handler) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handler, "handler");
        for (d.c cVar : f18107b) {
            if (Intrinsics.areEqual(cVar.e(), handler.getClass())) {
                return cVar;
            }
        }
        return null;
    }

    public final d.c b(String handlerName) {
        d.c[] cVarArr;
        Intrinsics.checkNotNullParameter(handlerName, "handlerName");
        for (d.c cVar : f18107b) {
            if (Intrinsics.areEqual(cVar.d(), handlerName)) {
                return cVar;
            }
        }
        return null;
    }
}
