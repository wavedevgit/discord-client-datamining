package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.internal.l;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import java.util.List;
import java.util.UUID;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import rr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final List f19032a;

    /* renamed from: b  reason: collision with root package name */
    private final b0 f19033b;

    /* renamed from: c  reason: collision with root package name */
    private final String f19034c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19035d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        i a(List list, String str);
    }

    public i(List steps, String sessionToken, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(steps, "steps");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f19032a = steps;
        this.f19033b = savedStateHandle;
        String uuid = UUID.randomUUID().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "toString(...)");
        this.f19034c = uuid;
        this.f19035d = "Bearer " + sessionToken;
    }

    public final l a() {
        NextStep c10 = c();
        if (c10 instanceof NextStep.Ui) {
            return bp.a.s((NextStep.Ui) c10, this.f19035d, this.f19034c, "fake_status", null, zp.g.f56624o.a());
        }
        if (c10 instanceof NextStep.GovernmentId) {
            return bp.a.q((NextStep.GovernmentId) c10, this.f19035d, this.f19034c, null);
        }
        if (c10 instanceof NextStep.Selfie) {
            return bp.a.r((NextStep.Selfie) c10, this.f19035d, this.f19034c);
        }
        if (c10 instanceof NextStep.Document) {
            return bp.a.p((NextStep.Document) c10, this.f19035d, this.f19034c);
        }
        if (c10 instanceof NextStep.Complete) {
            return bp.a.o((NextStep.Complete) c10, this.f19035d, this.f19034c, "fake_status", null);
        }
        if (Intrinsics.areEqual(c10, NextStep.Unknown.INSTANCE)) {
            String name = c10.getName();
            throw new IllegalArgumentException("Unknown type for step " + name);
        }
        throw new p();
    }

    public final String b() {
        return this.f19035d;
    }

    public final NextStep c() {
        return (NextStep) this.f19032a.get(d());
    }

    public final int d() {
        Integer num = (Integer) this.f19033b.b("current_fallback_mode_step_index");
        if (num != null) {
            return num.intValue();
        }
        return 0;
    }

    public final String e() {
        return this.f19034c;
    }

    public final NextStep f() {
        if (d() == CollectionsKt.n(this.f19032a)) {
            return null;
        }
        h(d() + 1);
        return (NextStep) this.f19032a.get(d());
    }

    public final NextStep g() {
        if (d() == 0) {
            return null;
        }
        h(d() - 1);
        return (NextStep) this.f19032a.get(d());
    }

    public final void h(int i10) {
        this.f19033b.h("current_fallback_mode_step_index", Integer.valueOf(i10));
    }
}
