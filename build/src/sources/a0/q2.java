package a0;

import android.util.ArrayMap;
import android.util.Pair;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q2 {

    /* renamed from: b  reason: collision with root package name */
    private static final q2 f244b = new q2(new ArrayMap());

    /* renamed from: a  reason: collision with root package name */
    protected final Map f245a;

    /* JADX INFO: Access modifiers changed from: protected */
    public q2(Map map) {
        this.f245a = map;
    }

    public static q2 a(Pair pair) {
        ArrayMap arrayMap = new ArrayMap();
        arrayMap.put((String) pair.first, pair.second);
        return new q2(arrayMap);
    }

    public static q2 b() {
        return f244b;
    }

    public static q2 c(q2 q2Var) {
        ArrayMap arrayMap = new ArrayMap();
        for (String str : q2Var.e()) {
            arrayMap.put(str, q2Var.d(str));
        }
        return new q2(arrayMap);
    }

    public Object d(String str) {
        return this.f245a.get(str);
    }

    public Set e() {
        return this.f245a.keySet();
    }

    public final String toString() {
        return "android.hardware.camera2.CaptureRequest.setTag.CX";
    }
}
