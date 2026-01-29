package o8;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends HashMap {
    private f(Map map) {
        super(map);
    }

    public static f a(Map map) {
        return new f(map);
    }

    public static Map of(Object obj, Object obj2) {
        HashMap hashMap = new HashMap(1);
        hashMap.put(obj, obj2);
        return Collections.unmodifiableMap(hashMap);
    }

    public static Map of(Object obj, Object obj2, Object obj3, Object obj4) {
        HashMap hashMap = new HashMap(2);
        hashMap.put(obj, obj2);
        hashMap.put(obj3, obj4);
        return Collections.unmodifiableMap(hashMap);
    }
}
