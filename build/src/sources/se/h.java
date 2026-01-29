package se;

import gf.q;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private final n f49001a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f49002b;

    /* renamed from: c  reason: collision with root package name */
    private final List f49003c;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(n nVar, com.google.android.gms.common.util.d dVar) {
        q.l(nVar);
        this.f49001a = nVar;
        this.f49003c = new ArrayList();
        f fVar = new f(this, dVar);
        fVar.a();
        this.f49002b = fVar;
    }
}
