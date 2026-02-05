package io.sentry;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: b  reason: collision with root package name */
    private static final f0 f28986b = new f0();

    /* renamed from: a  reason: collision with root package name */
    private final List f28987a = new CopyOnWriteArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
    }

    private f0() {
    }

    public static f0 a() {
        return f28986b;
    }

    public void b(a aVar) {
        this.f28987a.add(aVar);
    }
}
