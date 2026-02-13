package hf;

import com.google.android.gms.common.api.Status;
import ff.g;
import hf.p;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ ff.g f27841a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ zg.k f27842b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ p.a f27843c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f27844d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(ff.g gVar, zg.k kVar, p.a aVar, m0 m0Var) {
        this.f27841a = gVar;
        this.f27842b = kVar;
        this.f27843c = aVar;
        this.f27844d = m0Var;
    }

    @Override // ff.g.a
    public final void a(Status status) {
        if (status.g()) {
            this.f27842b.c(this.f27843c.a(this.f27841a.await(0L, TimeUnit.MILLISECONDS)));
            return;
        }
        this.f27842b.b(b.a(status));
    }
}
