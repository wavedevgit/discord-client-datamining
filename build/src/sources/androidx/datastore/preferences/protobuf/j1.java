package androidx.datastore.preferences.protobuf;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j1 extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final List f3684d;

    public j1(o0 o0Var) {
        super("Message was missing required fields.  (Lite runtime could not determine which fields were missing).");
        this.f3684d = null;
    }

    public z a() {
        return new z(getMessage());
    }
}
