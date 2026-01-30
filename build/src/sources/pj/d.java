package pj;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final bj.b f46002a;

    public d(bj.b bVar) {
        this.f46002a = bVar;
    }

    public Executor a(Executor executor) {
        if (executor != null) {
            return executor;
        }
        return (Executor) this.f46002a.get();
    }
}
