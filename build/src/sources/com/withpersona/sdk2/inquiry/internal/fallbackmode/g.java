package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import android.content.Context;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f19887a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f19888b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f19889c;

    public g(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f19887a = hVar;
        this.f19888b = hVar2;
        this.f19889c = hVar3;
    }

    public static g a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new g(hVar, hVar2, hVar3);
    }

    public static f c(w wVar, Context context, i.a aVar, int i10) {
        return new f(wVar, context, aVar, i10);
    }

    public f b(int i10) {
        return c((w) this.f19887a.get(), (Context) this.f19888b.get(), (i.a) this.f19889c.get(), i10);
    }
}
