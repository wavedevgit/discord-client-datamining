package x;

import a0.q0;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements a0.o0 {

        /* renamed from: a  reason: collision with root package name */
        final List f53278a;

        a(List list) {
            if (list != null && !list.isEmpty()) {
                this.f53278a = Collections.unmodifiableList(new ArrayList(list));
                return;
            }
            throw new IllegalArgumentException("Cannot set an empty CaptureStage list.");
        }

        @Override // a0.o0
        public List a() {
            return this.f53278a;
        }
    }

    static a0.o0 a(a0.q0... q0VarArr) {
        return new a(Arrays.asList(q0VarArr));
    }

    public static a0.o0 b() {
        return a(new q0.a());
    }
}
