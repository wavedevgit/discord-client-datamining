package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import android.content.Context;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f19520a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f19521b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f19522c;

    public g(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f19520a = hVar;
        this.f19521b = hVar2;
        this.f19522c = hVar3;
    }

    public static g a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new g(hVar, hVar2, hVar3);
    }

    public static f c(w wVar, Context context, i.a aVar, int i10) {
        return new f(wVar, context, aVar, i10);
    }

    public f b(int i10) {
        return c((w) this.f19520a.get(), (Context) this.f19521b.get(), (i.a) this.f19522c.get(), i10);
    }
}
