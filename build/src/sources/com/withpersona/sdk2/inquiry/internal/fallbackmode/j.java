package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
import ip.k;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final k f19916a;

    j(k kVar) {
        this.f19916a = kVar;
    }

    public static lr.h b(k kVar) {
        return lr.e.a(new j(kVar));
    }

    @Override // com.withpersona.sdk2.inquiry.internal.fallbackmode.i.a
    public i a(List list, String str) {
        return this.f19916a.b(list, str);
    }
}
