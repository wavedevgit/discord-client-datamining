package gt;

import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface h0 extends KSerializer {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static KSerializer[] a(h0 h0Var) {
            return c2.f25242a;
        }
    }

    KSerializer[] childSerializers();

    KSerializer[] typeParametersSerializers();
}
