package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.internal.a0;
import ep.n2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 implements a0.a {

    /* renamed from: a  reason: collision with root package name */
    private final n2 f19713a;

    b0(n2 n2Var) {
        this.f19713a = n2Var;
    }

    public static lr.h b(n2 n2Var) {
        return lr.e.a(new b0(n2Var));
    }

    @Override // com.withpersona.sdk2.inquiry.internal.a0.a
    public a0 a(String str, String str2, iq.g gVar) {
        return this.f19713a.b(str, str2, gVar);
    }
}
