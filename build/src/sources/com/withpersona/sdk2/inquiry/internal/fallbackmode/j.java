package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
import java.util.List;
import yo.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final k f18896a;

    j(k kVar) {
        this.f18896a = kVar;
    }

    public static br.h b(k kVar) {
        return br.e.a(new j(kVar));
    }

    @Override // com.withpersona.sdk2.inquiry.internal.fallbackmode.i.a
    public i a(List list, String str) {
        return this.f18896a.b(list, str);
    }
}
