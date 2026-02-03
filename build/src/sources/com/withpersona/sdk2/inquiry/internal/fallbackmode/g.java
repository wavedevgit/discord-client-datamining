package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import android.content.Context;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f18502a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f18503b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f18504c;

    public g(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f18502a = hVar;
        this.f18503b = hVar2;
        this.f18504c = hVar3;
    }

    public static g a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new g(hVar, hVar2, hVar3);
    }

    public static f c(w wVar, Context context, i.a aVar, int i10) {
        return new f(wVar, context, aVar, i10);
    }

    public f b(int i10) {
        return c((w) this.f18502a.get(), (Context) this.f18503b.get(), (i.a) this.f18504c.get(), i10);
    }
}
