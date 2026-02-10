package uj;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final gj.b f51567a;

    public d(gj.b bVar) {
        this.f51567a = bVar;
    }

    public Executor a(Executor executor) {
        if (executor != null) {
            return executor;
        }
        return (Executor) this.f51567a.get();
    }
}
