package io.sentry;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: b  reason: collision with root package name */
    private static final f0 f28130b = new f0();

    /* renamed from: a  reason: collision with root package name */
    private final List f28131a = new CopyOnWriteArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    private f0() {
    }

    public static f0 a() {
        return f28130b;
    }

    public void b(a aVar) {
        this.f28131a.add(aVar);
    }
}
