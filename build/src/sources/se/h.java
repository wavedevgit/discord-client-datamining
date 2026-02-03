package se;

import gf.q;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private final n f49071a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f49072b;

    /* renamed from: c  reason: collision with root package name */
    private final List f49073c;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(n nVar, com.google.android.gms.common.util.d dVar) {
        q.l(nVar);
        this.f49071a = nVar;
        this.f49073c = new ArrayList();
        f fVar = new f(this, dVar);
        fVar.a();
        this.f49072b = fVar;
    }
}
