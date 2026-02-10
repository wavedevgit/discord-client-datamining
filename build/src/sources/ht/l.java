package ht;

import dt.b0;
import dt.e0;
import java.util.concurrent.atomic.AtomicReferenceArray;
import kotlin.coroutines.CoroutineContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends b0 {

    /* renamed from: p  reason: collision with root package name */
    private final /* synthetic */ AtomicReferenceArray f27692p;

    public l(long j10, l lVar, int i10) {
        super(j10, lVar, i10);
        int i11;
        i11 = k.f27691f;
        this.f27692p = new AtomicReferenceArray(i11);
    }

    @Override // dt.b0
    public int r() {
        int i10;
        i10 = k.f27691f;
        return i10;
    }

    @Override // dt.b0
    public void s(int i10, Throwable th2, CoroutineContext coroutineContext) {
        e0 e0Var;
        e0Var = k.f27690e;
        v().set(i10, e0Var);
        t();
    }

    public String toString() {
        return "SemaphoreSegment[id=" + this.f21870i + ", hashCode=" + hashCode() + ']';
    }

    public final /* synthetic */ AtomicReferenceArray v() {
        return this.f27692p;
    }
}
