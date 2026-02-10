package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import android.content.Context;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f19028a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f19029b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f19030c;

    public g(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f19028a = hVar;
        this.f19029b = hVar2;
        this.f19030c = hVar3;
    }

    public static g a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new g(hVar, hVar2, hVar3);
    }

    public static f c(w wVar, Context context, i.a aVar, int i10) {
        return new f(wVar, context, aVar, i10);
    }

    public f b(int i10) {
        return c((w) this.f19028a.get(), (Context) this.f19029b.get(), (i.a) this.f19030c.get(), i10);
    }
}
