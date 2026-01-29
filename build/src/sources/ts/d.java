package ts;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f49870a = new ArrayList();

    public final void a(o format) {
        Intrinsics.checkNotNullParameter(format, "format");
        if (format instanceof s) {
            this.f49870a.add(format);
        } else if (format instanceof h) {
            for (s sVar : ((h) format).c()) {
                this.f49870a.add(sVar);
            }
        }
    }

    public final h b() {
        return new h(this.f49870a);
    }
}
