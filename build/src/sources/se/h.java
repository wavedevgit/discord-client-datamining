package se;

import gf.q;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private final n f49627a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f49628b;

    /* renamed from: c  reason: collision with root package name */
    private final List f49629c;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(n nVar, com.google.android.gms.common.util.d dVar) {
        q.l(nVar);
        this.f49627a = nVar;
        this.f49629c = new ArrayList();
        f fVar = new f(this, dVar);
        fVar.a();
        this.f49628b = fVar;
    }
}
