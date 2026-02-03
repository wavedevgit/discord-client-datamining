package ef;

import android.os.Looper;
import java.util.Collections;
import java.util.Set;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f21502a = Collections.newSetFromMap(new WeakHashMap());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a extends ff.d {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b extends ff.k {
    }

    public static Set b() {
        Set set = f21502a;
        synchronized (set) {
        }
        return set;
    }

    public abstract com.google.android.gms.common.api.internal.a a(com.google.android.gms.common.api.internal.a aVar);

    public abstract Looper c();

    public boolean d(ff.n nVar) {
        throw new UnsupportedOperationException();
    }

    public void e() {
        throw new UnsupportedOperationException();
    }
}
