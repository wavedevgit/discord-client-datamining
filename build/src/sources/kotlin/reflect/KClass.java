package kotlin.reflect;

import java.util.Collection;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface KClass extends KDeclarationContainer, b, d {
    Collection getMembers();

    String getQualifiedName();

    String getSimpleName();

    List getTypeParameters();

    int hashCode();

    boolean isInstance(Object obj);

    boolean isValue();
}
