package ys;

import java.util.concurrent.atomic.AtomicReferenceArray;
import kotlin.coroutines.CoroutineContext;
import us.b0;
import us.e0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends b0 {

    /* renamed from: p  reason: collision with root package name */
    private final /* synthetic */ AtomicReferenceArray f55770p;

    public l(long j10, l lVar, int i10) {
        super(j10, lVar, i10);
        int i11;
        i11 = k.f55769f;
        this.f55770p = new AtomicReferenceArray(i11);
    }

    @Override // us.b0
    public int r() {
        int i10;
        i10 = k.f55769f;
        return i10;
    }

    @Override // us.b0
    public void s(int i10, Throwable th2, CoroutineContext coroutineContext) {
        e0 e0Var;
        e0Var = k.f55768e;
        v().set(i10, e0Var);
        t();
    }

    public String toString() {
        return "SemaphoreSegment[id=" + this.f51768i + ", hashCode=" + hashCode() + ']';
    }

    public final /* synthetic */ AtomicReferenceArray v() {
        return this.f55770p;
    }
}
