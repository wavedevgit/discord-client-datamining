package gf;

import com.google.android.gms.common.api.Status;
import ef.g;
import gf.p;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ ef.g f26928a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ wg.k f26929b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ p.a f26930c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f26931d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(ef.g gVar, wg.k kVar, p.a aVar, m0 m0Var) {
        this.f26928a = gVar;
        this.f26929b = kVar;
        this.f26930c = aVar;
        this.f26931d = m0Var;
    }

    @Override // ef.g.a
    public final void a(Status status) {
        if (status.g()) {
            this.f26929b.c(this.f26930c.a(this.f26928a.await(0L, TimeUnit.MILLISECONDS)));
            return;
        }
        this.f26929b.b(b.a(status));
    }
}
