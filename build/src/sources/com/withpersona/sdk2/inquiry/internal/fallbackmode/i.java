package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.internal.l;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import ir.p;
import java.util.List;
import java.util.UUID;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final List f19891a;

    /* renamed from: b  reason: collision with root package name */
    private final b0 f19892b;

    /* renamed from: c  reason: collision with root package name */
    private final String f19893c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19894d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        i a(List list, String str);
    }

    public i(List steps, String sessionToken, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(steps, "steps");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f19891a = steps;
        this.f19892b = savedStateHandle;
        String uuid = UUID.randomUUID().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "toString(...)");
        this.f19893c = uuid;
        this.f19894d = "Bearer " + sessionToken;
    }

    public final l a() {
        NextStep c10 = c();
        if (c10 instanceof NextStep.Ui) {
            return so.a.s((NextStep.Ui) c10, this.f19894d, this.f19893c, "fake_status", null, qp.g.f47612o.a());
        }
        if (c10 instanceof NextStep.GovernmentId) {
            return so.a.q((NextStep.GovernmentId) c10, this.f19894d, this.f19893c, null);
        }
        if (c10 instanceof NextStep.Selfie) {
            return so.a.r((NextStep.Selfie) c10, this.f19894d, this.f19893c);
        }
        if (c10 instanceof NextStep.Document) {
            return so.a.p((NextStep.Document) c10, this.f19894d, this.f19893c);
        }
        if (c10 instanceof NextStep.Complete) {
            return so.a.o((NextStep.Complete) c10, this.f19894d, this.f19893c, "fake_status", null);
        }
        if (Intrinsics.areEqual(c10, NextStep.Unknown.INSTANCE)) {
            String name = c10.getName();
            throw new IllegalArgumentException("Unknown type for step " + name);
        }
        throw new p();
    }

    public final String b() {
        return this.f19894d;
    }

    public final NextStep c() {
        return (NextStep) this.f19891a.get(d());
    }

    public final int d() {
        Integer num = (Integer) this.f19892b.b("current_fallback_mode_step_index");
        if (num != null) {
            return num.intValue();
        }
        return 0;
    }

    public final String e() {
        return this.f19893c;
    }

    public final NextStep f() {
        if (d() == CollectionsKt.n(this.f19891a)) {
            return null;
        }
        h(d() + 1);
        return (NextStep) this.f19891a.get(d());
    }

    public final NextStep g() {
        if (d() == 0) {
            return null;
        }
        h(d() - 1);
        return (NextStep) this.f19891a.get(d());
    }

    public final void h(int i10) {
        this.f19892b.h("current_fallback_mode_step_index", Integer.valueOf(i10));
    }
}
