package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
import java.util.List;
import zo.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements i.a {

    /* renamed from: a  reason: collision with root package name */
    private final k f19036a;

    j(k kVar) {
        this.f19036a = kVar;
    }

    public static cr.h b(k kVar) {
        return cr.e.a(new j(kVar));
    }

    @Override // com.withpersona.sdk2.inquiry.internal.fallbackmode.i.a
    public i a(List list, String str) {
        return this.f19036a.b(list, str);
    }
}
