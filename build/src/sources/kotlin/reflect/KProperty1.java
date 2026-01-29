package kotlin.reflect;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.KProperty;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface KProperty1 extends KProperty, Function1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a extends KProperty.b, Function1 {
    }

    Object get(Object obj);

    Object getDelegate(Object obj);

    @Override // kotlin.reflect.KProperty
    a getGetter();
}
