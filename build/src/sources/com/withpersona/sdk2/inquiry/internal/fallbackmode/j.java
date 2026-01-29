package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
import java.util.List;
import qo.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final k f19895a;

    j(k kVar) {
        this.f19895a = kVar;
    }

    public static tq.h b(k kVar) {
        return tq.e.a(new j(kVar));
    }

    @Override // com.withpersona.sdk2.inquiry.internal.fallbackmode.i.a
    public i a(List list, String str) {
        return this.f19895a.b(list, str);
    }
}
