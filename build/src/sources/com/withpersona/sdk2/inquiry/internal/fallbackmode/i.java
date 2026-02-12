package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import androidx.lifecycle.b0;
import as.p;
import com.withpersona.sdk2.inquiry.internal.l;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import java.util.List;
import java.util.UUID;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final List f19913a;

    /* renamed from: b  reason: collision with root package name */
    private final b0 f19914b;

    /* renamed from: c  reason: collision with root package name */
    private final String f19915c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19916d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        i a(List list, String str);
    }

    public i(List steps, String sessionToken, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(steps, "steps");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f19913a = steps;
        this.f19914b = savedStateHandle;
        String uuid = UUID.randomUUID().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "toString(...)");
        this.f19915c = uuid;
        this.f19916d = "Bearer " + sessionToken;
    }

    public final l a() {
        NextStep c10 = c();
        if (c10 instanceof NextStep.Ui) {
            return kp.a.s((NextStep.Ui) c10, this.f19916d, this.f19915c, "fake_status", null, iq.g.f30405o.a());
        }
        if (c10 instanceof NextStep.GovernmentId) {
            return kp.a.q((NextStep.GovernmentId) c10, this.f19916d, this.f19915c, null);
        }
        if (c10 instanceof NextStep.Selfie) {
            return kp.a.r((NextStep.Selfie) c10, this.f19916d, this.f19915c);
        }
        if (c10 instanceof NextStep.Document) {
            return kp.a.p((NextStep.Document) c10, this.f19916d, this.f19915c);
        }
        if (c10 instanceof NextStep.Complete) {
            return kp.a.o((NextStep.Complete) c10, this.f19916d, this.f19915c, "fake_status", null);
        }
        if (Intrinsics.areEqual(c10, NextStep.Unknown.INSTANCE)) {
            String name = c10.getName();
            throw new IllegalArgumentException("Unknown type for step " + name);
        }
        throw new p();
    }

    public final String b() {
        return this.f19916d;
    }

    public final NextStep c() {
        return (NextStep) this.f19913a.get(d());
    }

    public final int d() {
        Integer num = (Integer) this.f19914b.b("current_fallback_mode_step_index");
        if (num != null) {
            return num.intValue();
        }
        return 0;
    }

    public final String e() {
        return this.f19915c;
    }

    public final NextStep f() {
        if (d() == CollectionsKt.n(this.f19913a)) {
            return null;
        }
        h(d() + 1);
        return (NextStep) this.f19913a.get(d());
    }

    public final NextStep g() {
        if (d() == 0) {
            return null;
        }
        h(d() - 1);
        return (NextStep) this.f19913a.get(d());
    }

    public final void h(int i10) {
        this.f19914b.h("current_fallback_mode_step_index", Integer.valueOf(i10));
    }
}
