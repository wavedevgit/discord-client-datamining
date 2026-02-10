package hf;

import com.google.android.gms.common.api.Status;
import ff.g;
import hf.p;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ ff.g f26054a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ zg.k f26055b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ p.a f26056c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f26057d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(ff.g gVar, zg.k kVar, p.a aVar, m0 m0Var) {
        this.f26054a = gVar;
        this.f26055b = kVar;
        this.f26056c = aVar;
        this.f26057d = m0Var;
    }

    @Override // ff.g.a
    public final void a(Status status) {
        if (status.h()) {
            this.f26055b.c(this.f26056c.a(this.f26054a.await(0L, TimeUnit.MILLISECONDS)));
            return;
        }
        this.f26055b.b(b.a(status));
    }
}
