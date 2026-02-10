package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.u;
import ep.k2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v implements u.a {

    /* renamed from: a  reason: collision with root package name */
    private final k2 f20387a;

    v(k2 k2Var) {
        this.f20387a = k2Var;
    }

    public static lr.h b(k2 k2Var) {
        return lr.e.a(new v(k2Var));
    }

    @Override // com.withpersona.sdk2.inquiry.internal.u.a
    public u a(String str, String str2, String str3, iq.g gVar) {
        return this.f20387a.b(str, str2, str3, gVar);
    }
}
