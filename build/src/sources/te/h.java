package te;

import hf.q;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private final n f48770a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f48771b;

    /* renamed from: c  reason: collision with root package name */
    private final List f48772c;

    /* JADX INFO: Access modifiers changed from: protected */
    public h(n nVar, com.google.android.gms.common.util.d dVar) {
        q.l(nVar);
        this.f48770a = nVar;
        this.f48772c = new ArrayList();
        f fVar = new f(this, dVar);
        fVar.a();
        this.f48771b = fVar;
    }
}
