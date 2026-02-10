package hf;

import com.google.android.gms.common.api.Status;
import ff.g;
import hf.p;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ ff.g f27272a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ zg.k f27273b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ p.a f27274c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f27275d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(ff.g gVar, zg.k kVar, p.a aVar, m0 m0Var) {
        this.f27272a = gVar;
        this.f27273b = kVar;
        this.f27274c = aVar;
        this.f27275d = m0Var;
    }

    @Override // ff.g.a
    public final void a(Status status) {
        if (status.g()) {
            this.f27273b.c(this.f27274c.a(this.f27272a.await(0L, TimeUnit.MILLISECONDS)));
            return;
        }
        this.f27273b.b(b.a(status));
    }
}
