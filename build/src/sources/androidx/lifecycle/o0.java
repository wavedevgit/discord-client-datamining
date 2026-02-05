package androidx.lifecycle;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o0 {

    /* renamed from: a  reason: collision with root package name */
    private static final m3.f f4639a = new m3.f();

    public static final CoroutineScope a(n0 n0Var) {
        m3.b bVar;
        Intrinsics.checkNotNullParameter(n0Var, "<this>");
        synchronized (f4639a) {
            bVar = (m3.b) n0Var.c("androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY");
            if (bVar == null) {
                bVar = m3.c.a();
                n0Var.a("androidx.lifecycle.viewmodel.internal.ViewModelCoroutineScope.JOB_KEY", bVar);
            }
        }
        return bVar;
    }
}
