package gf;

import com.google.android.gms.common.api.Status;
import ef.g;
import gf.p;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ ef.g f24842a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ xg.k f24843b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ p.a f24844c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f24845d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(ef.g gVar, xg.k kVar, p.a aVar, m0 m0Var) {
        this.f24842a = gVar;
        this.f24843b = kVar;
        this.f24844c = aVar;
        this.f24845d = m0Var;
    }

    @Override // ef.g.a
    public final void a(Status status) {
        if (status.g()) {
            this.f24843b.c(this.f24844c.a(this.f24842a.await(0L, TimeUnit.MILLISECONDS)));
            return;
        }
        this.f24843b.b(b.a(status));
    }
}
