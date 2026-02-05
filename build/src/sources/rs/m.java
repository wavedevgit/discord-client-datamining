package rs;

import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m {
    public static final void a(int i10) {
        if (i10 >= 1) {
            return;
        }
        throw new IllegalArgumentException(("Expected positive parallelism level, but got " + i10).toString());
    }

    public static final CoroutineDispatcher b(CoroutineDispatcher coroutineDispatcher, String str) {
        if (str != null) {
            return new w(coroutineDispatcher, str);
        }
        return coroutineDispatcher;
    }
}
