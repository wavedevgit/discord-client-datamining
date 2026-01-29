package ya;

import android.os.Trace;
import kotlin.jvm.internal.Intrinsics;
import ya.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements b.c {
    @Override // ya.b.c
    public void a(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (isTracing()) {
            Trace.beginSection(name);
        }
    }

    @Override // ya.b.c
    public void b() {
        if (isTracing()) {
            Trace.endSection();
        }
    }

    @Override // ya.b.c
    public boolean isTracing() {
        return false;
    }
}
