package kotlin.jvm.internal;

import kotlin.reflect.KProperty;
import kotlin.reflect.e;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class MutablePropertyReference extends PropertyReference implements e {
    public MutablePropertyReference() {
    }

    @Override // kotlin.jvm.internal.PropertyReference, kotlin.reflect.KProperty
    @NotNull
    public abstract /* synthetic */ KProperty.b getGetter();

    @Override // kotlin.reflect.e
    @NotNull
    public abstract /* synthetic */ e.a getSetter();

    public MutablePropertyReference(Object obj) {
        super(obj);
    }

    public MutablePropertyReference(Object obj, Class cls, String str, String str2, int i10) {
        super(obj, cls, str, str2, i10);
    }
}
