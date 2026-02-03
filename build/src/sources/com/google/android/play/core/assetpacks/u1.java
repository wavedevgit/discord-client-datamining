package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import androidx.work.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u1 {

    /* renamed from: d  reason: collision with root package name */
    private static final th.k0 f16685d = new th.k0("ExtractionWorker");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16686a;

    /* renamed from: b  reason: collision with root package name */
    private final y1 f16687b;

    /* renamed from: c  reason: collision with root package name */
    private final m3 f16688c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(r2 r2Var, y1 y1Var, m3 m3Var) {
        this.f16686a = r2Var;
        this.f16687b = y1Var;
        this.f16688c = m3Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final k4.g a(androidx.work.b bVar) {
        m3 m3Var = this.f16688c;
        Bundle a10 = b1.a(bVar);
        m3Var.b(a10);
        return new k4.g(-1883842196, this.f16688c.a(a10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final c.a b(androidx.work.b bVar) {
        try {
            if (this.f16686a.p(b1.b(bVar))) {
                this.f16687b.a();
            }
            return c.a.c();
        } catch (w1 e10) {
            f16685d.b("Error while updating ExtractorSessionStoreView: %s", e10.getMessage());
            return c.a.a();
        }
    }
}
