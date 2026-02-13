package wj;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final ij.b f53348a;

    public d(ij.b bVar) {
        this.f53348a = bVar;
    }

    public Executor a(Executor executor) {
        if (executor != null) {
            return executor;
        }
        return (Executor) this.f53348a.get();
    }
}
