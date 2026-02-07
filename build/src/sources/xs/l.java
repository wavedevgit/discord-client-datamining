package xs;

import java.util.concurrent.atomic.AtomicReferenceArray;
import kotlin.coroutines.CoroutineContext;
import ts.b0;
import ts.e0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends b0 {

    /* renamed from: p  reason: collision with root package name */
    private final /* synthetic */ AtomicReferenceArray f54835p;

    public l(long j10, l lVar, int i10) {
        super(j10, lVar, i10);
        int i11;
        i11 = k.f54834f;
        this.f54835p = new AtomicReferenceArray(i11);
    }

    @Override // ts.b0
    public int r() {
        int i10;
        i10 = k.f54834f;
        return i10;
    }

    @Override // ts.b0
    public void s(int i10, Throwable th2, CoroutineContext coroutineContext) {
        e0 e0Var;
        e0Var = k.f54833e;
        v().set(i10, e0Var);
        t();
    }

    public String toString() {
        return "SemaphoreSegment[id=" + this.f50863i + ", hashCode=" + hashCode() + ']';
    }

    public final /* synthetic */ AtomicReferenceArray v() {
        return this.f54835p;
    }
}
