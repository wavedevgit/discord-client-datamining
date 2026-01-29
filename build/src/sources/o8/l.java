package o8;

import java.util.Collections;
import java.util.IdentityHashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l {
    public static CopyOnWriteArraySet a() {
        return new CopyOnWriteArraySet();
    }

    public static Set b() {
        return c(new IdentityHashMap());
    }

    public static Set c(Map map) {
        return Collections.newSetFromMap(map);
    }
}
