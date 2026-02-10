package ff;

import android.os.Looper;
import java.util.Collections;
import java.util.Set;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f22615a = Collections.newSetFromMap(new WeakHashMap());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a extends gf.d {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b extends gf.k {
    }

    public static Set b() {
        Set set = f22615a;
        synchronized (set) {
        }
        return set;
    }

    public abstract com.google.android.gms.common.api.internal.a a(com.google.android.gms.common.api.internal.a aVar);

    public abstract Looper c();

    public boolean d(gf.n nVar) {
        throw new UnsupportedOperationException();
    }

    public void e() {
        throw new UnsupportedOperationException();
    }
}
