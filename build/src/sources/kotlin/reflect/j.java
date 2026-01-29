package kotlin.reflect;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.KProperty;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface j extends KProperty, Function0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a extends KProperty.b, Function0 {
    }

    Object getDelegate();

    @Override // kotlin.reflect.KProperty
    a getGetter();
}
