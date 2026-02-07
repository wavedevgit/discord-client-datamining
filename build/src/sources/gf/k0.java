package gf;

import com.google.android.gms.common.api.Status;
import ef.g;
import gf.p;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ ef.g f25143a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ yg.k f25144b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ p.a f25145c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f25146d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(ef.g gVar, yg.k kVar, p.a aVar, m0 m0Var) {
        this.f25143a = gVar;
        this.f25144b = kVar;
        this.f25145c = aVar;
        this.f25146d = m0Var;
    }

    @Override // ef.g.a
    public final void a(Status status) {
        if (status.h()) {
            this.f25144b.c(this.f25145c.a(this.f25143a.await(0L, TimeUnit.MILLISECONDS)));
            return;
        }
        this.f25144b.b(b.a(status));
    }
}
