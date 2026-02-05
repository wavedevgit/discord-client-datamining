package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import android.content.Context;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f18908a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f18909b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f18910c;

    public g(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f18908a = hVar;
        this.f18909b = hVar2;
        this.f18910c = hVar3;
    }

    public static g a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new g(hVar, hVar2, hVar3);
    }

    public static f c(w wVar, Context context, i.a aVar, int i10) {
        return new f(wVar, context, aVar, i10);
    }

    public f b(int i10) {
        return c((w) this.f18908a.get(), (Context) this.f18909b.get(), (i.a) this.f18910c.get(), i10);
    }
}
