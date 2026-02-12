package hf;

import com.google.android.gms.common.api.Status;
import ff.g;
import hf.p;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ ff.g f27273a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ zg.k f27274b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ p.a f27275c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f27276d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(ff.g gVar, zg.k kVar, p.a aVar, m0 m0Var) {
        this.f27273a = gVar;
        this.f27274b = kVar;
        this.f27275c = aVar;
        this.f27276d = m0Var;
    }

    @Override // ff.g.a
    public final void a(Status status) {
        if (status.g()) {
            this.f27274b.c(this.f27275c.a(this.f27273a.await(0L, TimeUnit.MILLISECONDS)));
            return;
        }
        this.f27274b.b(b.a(status));
    }
}
