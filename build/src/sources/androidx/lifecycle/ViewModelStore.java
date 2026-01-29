package androidx.lifecycle;

import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ViewModelStore {

    /* renamed from: a  reason: collision with root package name */
    private final Map f4456a = new LinkedHashMap();

    public final void a() {
        for (n0 n0Var : this.f4456a.values()) {
            n0Var.b();
        }
        this.f4456a.clear();
    }

    public final n0 b(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return (n0) this.f4456a.get(key);
    }

    public final Set c() {
        return new HashSet(this.f4456a.keySet());
    }

    public final void d(String key, n0 viewModel) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(viewModel, "viewModel");
        n0 n0Var = (n0) this.f4456a.put(key, viewModel);
        if (n0Var != null) {
            n0Var.b();
        }
    }
}
