package kotlin.reflect.jvm.internal.impl.renderer;

import java.util.Set;
import kotlin.collections.x0;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ExcludedTypeAnnotations {
    @NotNull
    public static final ExcludedTypeAnnotations INSTANCE = new ExcludedTypeAnnotations();

    /* renamed from: a  reason: collision with root package name */
    private static final Set f35338a = x0.i(new FqName("kotlin.internal.NoInfer"), new FqName("kotlin.internal.Exact"));

    private ExcludedTypeAnnotations() {
    }

    @NotNull
    public final Set<FqName> getInternalAnnotationsForResolve() {
        return f35338a;
    }
}
