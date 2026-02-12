package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import android.content.Context;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f19909a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f19910b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f19911c;

    public g(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f19909a = hVar;
        this.f19910b = hVar2;
        this.f19911c = hVar3;
    }

    public static g a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new g(hVar, hVar2, hVar3);
    }

    public static f c(w wVar, Context context, i.a aVar, int i10) {
        return new f(wVar, context, aVar, i10);
    }

    public f b(int i10) {
        return c((w) this.f19909a.get(), (Context) this.f19910b.get(), (i.a) this.f19911c.get(), i10);
    }
}
