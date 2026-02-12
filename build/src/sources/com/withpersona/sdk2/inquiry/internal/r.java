package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.q;
import ep.b2;
import ep.d2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements q.b {

    /* renamed from: a  reason: collision with root package name */
    private final d2 f20369a;

    r(d2 d2Var) {
        this.f20369a = d2Var;
    }

    public static lr.h b(d2 d2Var) {
        return lr.e.a(new r(d2Var));
    }

    @Override // com.withpersona.sdk2.inquiry.internal.q.b
    public q a(String str, String str2, b2 b2Var, iq.g gVar) {
        return this.f20369a.b(str, str2, b2Var, gVar);
    }
}
