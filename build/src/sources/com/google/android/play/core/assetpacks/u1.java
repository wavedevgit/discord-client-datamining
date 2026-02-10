package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import androidx.work.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u1 {

    /* renamed from: d  reason: collision with root package name */
    private static final ai.k0 f16916d = new ai.k0("ExtractionWorker");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16917a;

    /* renamed from: b  reason: collision with root package name */
    private final y1 f16918b;

    /* renamed from: c  reason: collision with root package name */
    private final m3 f16919c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(r2 r2Var, y1 y1Var, m3 m3Var) {
        this.f16917a = r2Var;
        this.f16918b = y1Var;
        this.f16919c = m3Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final k4.g a(androidx.work.b bVar) {
        m3 m3Var = this.f16919c;
        Bundle a10 = b1.a(bVar);
        m3Var.b(a10);
        return new k4.g(-1883842196, this.f16919c.a(a10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final c.a b(androidx.work.b bVar) {
        try {
            if (this.f16917a.p(b1.b(bVar))) {
                this.f16918b.a();
            }
            return c.a.c();
        } catch (w1 e10) {
            f16916d.b("Error while updating ExtractorSessionStoreView: %s", e10.getMessage());
            return c.a.a();
        }
    }
}
