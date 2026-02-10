package ei;

import android.os.Bundle;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f21672a = new HashSet(Arrays.asList("native", "unity"));

    /* renamed from: b  reason: collision with root package name */
    private static final Map f21673b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private static final fi.i f21674c = new fi.i("PlayCoreVersion");

    public static Bundle a() {
        Bundle bundle = new Bundle();
        Map b10 = b();
        bundle.putInt("playcore_version_code", ((Integer) b10.get("java")).intValue());
        if (b10.containsKey("native")) {
            bundle.putInt("playcore_native_version", ((Integer) b10.get("native")).intValue());
        }
        if (b10.containsKey("unity")) {
            bundle.putInt("playcore_unity_version", ((Integer) b10.get("unity")).intValue());
        }
        return bundle;
    }

    public static synchronized Map b() {
        Map map;
        synchronized (m.class) {
            map = f21673b;
            map.put("java", 11004);
        }
        return map;
    }
}
