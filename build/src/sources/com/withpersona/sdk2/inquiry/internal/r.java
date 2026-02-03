package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.q;
import po.b2;
import po.d2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements q.b {

    /* renamed from: a  reason: collision with root package name */
    private final d2 f18962a;

    r(d2 d2Var) {
        this.f18962a = d2Var;
    }

    public static wq.h b(d2 d2Var) {
        return wq.e.a(new r(d2Var));
    }

    @Override // com.withpersona.sdk2.inquiry.internal.q.b
    public q a(String str, String str2, b2 b2Var, tp.g gVar) {
        return this.f18962a.b(str, str2, b2Var, gVar);
    }
}
