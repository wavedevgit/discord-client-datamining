package ei;

import android.content.Context;
import android.content.SharedPreferences;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Context f21530a;

    public c(Context context) {
        this.f21530a = context;
    }

    private final SharedPreferences c() {
        return this.f21530a.getSharedPreferences("playcore_split_install_internal", 0);
    }

    public final Set a() {
        Set<String> hashSet;
        synchronized (c.class) {
            try {
                hashSet = c().getStringSet("modules_to_uninstall_if_emulated", new HashSet());
                if (hashSet == null) {
                    hashSet = new HashSet<>();
                }
            } catch (Exception unused) {
                hashSet = new HashSet<>();
            }
        }
        return hashSet;
    }

    public final void b() {
        synchronized (c.class) {
            c().edit().putStringSet("modules_to_uninstall_if_emulated", new HashSet()).apply();
        }
    }
}
