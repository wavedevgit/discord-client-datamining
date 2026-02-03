package n5;

import android.graphics.Path;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f39681a = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(u uVar) {
        this.f39681a.add(uVar);
    }

    public void b(Path path) {
        for (int size = this.f39681a.size() - 1; size >= 0; size--) {
            x5.j.b(path, (u) this.f39681a.get(size));
        }
    }
}
