package sj;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final ej.b f49650a;

    public d(ej.b bVar) {
        this.f49650a = bVar;
    }

    public Executor a(Executor executor) {
        if (executor != null) {
            return executor;
        }
        return (Executor) this.f49650a.get();
    }
}
