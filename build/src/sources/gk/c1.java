package gk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c1 extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final List f25196d;

    public c1(i0 i0Var) {
        super("Message was missing required fields.  (Lite runtime could not determine which fields were missing).");
        this.f25196d = null;
    }

    public v a() {
        return new v(getMessage());
    }
}
