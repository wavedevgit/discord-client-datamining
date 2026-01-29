package gf;

import android.accounts.Account;
import android.content.Context;
import android.os.Looper;
import com.google.android.gms.common.api.Scope;
import ef.a;
import ef.e;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g extends c implements a.f {
    private final d Q;
    private final Set R;
    private final Account S;

    /* JADX INFO: Access modifiers changed from: protected */
    public g(Context context, Looper looper, int i10, d dVar, e.a aVar, e.b bVar) {
        this(context, looper, i10, dVar, (ff.d) aVar, (ff.k) bVar);
    }

    private final Set j0(Set set) {
        Set<Scope> i02 = i0(set);
        for (Scope scope : i02) {
            if (!set.contains(scope)) {
                throw new IllegalStateException("Expanding scopes is not permitted, use implied scopes instead");
            }
        }
        return i02;
    }

    @Override // gf.c
    protected final Set B() {
        return this.R;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final d h0() {
        return this.Q;
    }

    @Override // ef.a.f
    public Set i() {
        if (g()) {
            return this.R;
        }
        return Collections.EMPTY_SET;
    }

    @Override // gf.c
    public final Account t() {
        return this.S;
    }

    @Override // gf.c
    protected Executor v() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public g(Context context, Looper looper, int i10, d dVar, ff.d dVar2, ff.k kVar) {
        this(context, looper, h.a(context), com.google.android.gms.common.f.m(), i10, dVar, (ff.d) q.l(dVar2), (ff.k) q.l(kVar));
    }

    protected g(Context context, Looper looper, h hVar, com.google.android.gms.common.f fVar, int i10, d dVar, ff.d dVar2, ff.k kVar) {
        super(context, looper, hVar, fVar, i10, dVar2 == null ? null : new f0(dVar2), kVar != null ? new g0(kVar) : null, dVar.j());
        this.Q = dVar;
        this.S = dVar.a();
        this.R = j0(dVar.d());
    }

    protected Set i0(Set set) {
        return set;
    }
}
