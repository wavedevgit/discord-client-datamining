package ys;

import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c1 extends CoroutineDispatcher {
    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher B1(int i10, String str) {
        dt.m.a(i10);
        return dt.m.b(this, str);
    }

    public abstract c1 P1();

    /* JADX INFO: Access modifiers changed from: protected */
    public final String Y1() {
        c1 c1Var;
        c1 c10 = m0.c();
        if (this == c10) {
            return "Dispatchers.Main";
        }
        try {
            c1Var = c10.P1();
        } catch (UnsupportedOperationException unused) {
            c1Var = null;
        }
        if (this != c1Var) {
            return null;
        }
        return "Dispatchers.Main.immediate";
    }
}
