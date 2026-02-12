package n5;

import android.graphics.Path;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f36846a = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(u uVar) {
        this.f36846a.add(uVar);
    }

    public void b(Path path) {
        for (int size = this.f36846a.size() - 1; size >= 0; size--) {
            y5.j.b(path, (u) this.f36846a.get(size));
        }
    }
}
