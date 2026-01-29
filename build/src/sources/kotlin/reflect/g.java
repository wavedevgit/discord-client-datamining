package kotlin.reflect;

import kotlin.jvm.functions.Function2;
import kotlin.reflect.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface g extends KProperty1, e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a extends e.a, Function2 {
    }

    a getSetter();

    void set(Object obj, Object obj2);
}
