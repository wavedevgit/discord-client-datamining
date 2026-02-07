package tj;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final fj.b f50662a;

    public d(fj.b bVar) {
        this.f50662a = bVar;
    }

    public Executor a(Executor executor) {
        if (executor != null) {
            return executor;
        }
        return (Executor) this.f50662a.get();
    }
}
