package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import com.withpersona.sdk2.inquiry.internal.fallbackmode.c;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.f;
import kotlin.jvm.internal.Intrinsics;
import lr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final c f18445a;

    public a(c params) {
        Intrinsics.checkNotNullParameter(params, "params");
        this.f18445a = params;
    }

    public final to.a a(d fallbackModeApiController, f.a offlineModeApiController) {
        Intrinsics.checkNotNullParameter(fallbackModeApiController, "fallbackModeApiController");
        Intrinsics.checkNotNullParameter(offlineModeApiController, "offlineModeApiController");
        c cVar = this.f18445a;
        if (cVar instanceof c.b) {
            return offlineModeApiController.b(((c.b) cVar).a());
        }
        if (cVar instanceof c.a) {
            return fallbackModeApiController;
        }
        throw new p();
    }
}
