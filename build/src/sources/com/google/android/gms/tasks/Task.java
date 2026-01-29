package com.google.android.gms.tasks;

import androidx.annotation.NonNull;
import java.util.concurrent.Executor;
import wg.c;
import wg.e;
import wg.f;
import wg.g;
import wg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class Task<TResult> {
    public Task a(Executor executor, e eVar) {
        throw new UnsupportedOperationException("addOnCanceledListener is not implemented");
    }

    @NonNull
    public Task<TResult> addOnCompleteListener(@NonNull OnCompleteListener<TResult> onCompleteListener) {
        throw new UnsupportedOperationException("addOnCompleteListener is not implemented");
    }

    public Task b(e eVar) {
        throw new UnsupportedOperationException("addOnCanceledListener is not implemented.");
    }

    public Task c(Executor executor, OnCompleteListener onCompleteListener) {
        throw new UnsupportedOperationException("addOnCompleteListener is not implemented");
    }

    public abstract Task d(Executor executor, f fVar);

    public abstract Task e(f fVar);

    public abstract Task f(Executor executor, g gVar);

    public abstract Task g(g gVar);

    public Task h(Executor executor, c cVar) {
        throw new UnsupportedOperationException("continueWith is not implemented");
    }

    public Task i(Executor executor, c cVar) {
        throw new UnsupportedOperationException("continueWithTask is not implemented");
    }

    public Task j(c cVar) {
        throw new UnsupportedOperationException("continueWithTask is not implemented");
    }

    public abstract Exception k();

    public abstract Object l();

    public abstract Object m(Class cls);

    public abstract boolean n();

    public abstract boolean o();

    public abstract boolean p();

    public Task q(Executor executor, j jVar) {
        throw new UnsupportedOperationException("onSuccessTask is not implemented");
    }

    public Task r(j jVar) {
        throw new UnsupportedOperationException("onSuccessTask is not implemented");
    }
}
