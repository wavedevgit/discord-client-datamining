package io.sentry.transport;

import io.sentry.Hint;
import io.sentry.l5;
import java.util.Collections;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements io.sentry.cache.g {

    /* renamed from: d  reason: collision with root package name */
    private static final s f30347d = new s();

    public static s b() {
        return f30347d;
    }

    @Override // io.sentry.cache.g
    public void E(l5 l5Var) {
    }

    @Override // io.sentry.cache.g
    public boolean L0(l5 l5Var, Hint hint) {
        return false;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return Collections.emptyIterator();
    }
}
