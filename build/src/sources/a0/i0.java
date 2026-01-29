package a0;

import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f81a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Map f82b = new LinkedHashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Set f83c = new HashSet();

    public LinkedHashSet a() {
        LinkedHashSet linkedHashSet;
        synchronized (this.f81a) {
            linkedHashSet = new LinkedHashSet(this.f82b.values());
        }
        return linkedHashSet;
    }

    public void b(c0 c0Var) {
        synchronized (this.f81a) {
            try {
                for (String str : c0Var.b()) {
                    x.y0.a("CameraRepository", "Added camera: " + str);
                    this.f82b.put(str, c0Var.a(str));
                }
            } catch (x.r e10) {
                throw new x.w0(e10);
            }
        }
    }
}
