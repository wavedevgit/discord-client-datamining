package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import android.content.Context;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f18888a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f18889b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f18890c;

    public g(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f18888a = hVar;
        this.f18889b = hVar2;
        this.f18890c = hVar3;
    }

    public static g a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new g(hVar, hVar2, hVar3);
    }

    public static f c(w wVar, Context context, i.a aVar, int i10) {
        return new f(wVar, context, aVar, i10);
    }

    public f b(int i10) {
        return c((w) this.f18888a.get(), (Context) this.f18889b.get(), (i.a) this.f18890c.get(), i10);
    }
}
