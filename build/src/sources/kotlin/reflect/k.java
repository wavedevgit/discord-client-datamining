package kotlin.reflect;

import kotlin.jvm.functions.Function2;
import kotlin.reflect.KProperty;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface k extends KProperty, Function2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a extends KProperty.b, Function2 {
    }

    Object getDelegate(Object obj, Object obj2);

    @Override // kotlin.reflect.KProperty
    a getGetter();
}
