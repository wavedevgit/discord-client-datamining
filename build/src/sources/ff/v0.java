package ff;

import ef.a;
import ff.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v0 extends q {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ q.a f25167d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public v0(q.a aVar, com.google.android.gms.common.d[] dVarArr, boolean z10, int i10) {
        super(dVarArr, z10, i10);
        this.f25167d = aVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ff.q
    public final void b(a.b bVar, wg.k kVar) {
        m mVar;
        mVar = this.f25167d.f25143a;
        mVar.accept(bVar, kVar);
    }
}
