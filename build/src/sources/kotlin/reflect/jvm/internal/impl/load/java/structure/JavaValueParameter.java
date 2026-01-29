package kotlin.reflect.jvm.internal.impl.load.java.structure;

import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface JavaValueParameter extends JavaAnnotationOwner {
    Name getName();

    @NotNull
    JavaType getType();

    boolean isVararg();
}
