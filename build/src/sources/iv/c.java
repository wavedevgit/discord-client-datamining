package iv;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends c {
        @Override // iv.c
        List a(Executor executor) {
            return Arrays.asList(new g(), new i(executor));
        }

        @Override // iv.c
        List b() {
            return Collections.singletonList(new t());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List a(Executor executor) {
        return Collections.singletonList(new i(executor));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b() {
        return Collections.EMPTY_LIST;
    }
}
