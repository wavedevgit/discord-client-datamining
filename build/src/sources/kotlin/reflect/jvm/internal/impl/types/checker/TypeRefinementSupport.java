package kotlin.reflect.jvm.internal.impl.types.checker;

import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class TypeRefinementSupport {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35748a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Enabled extends TypeRefinementSupport {

        /* renamed from: b  reason: collision with root package name */
        private final KotlinTypeRefiner f35749b;

        @NotNull
        public final KotlinTypeRefiner getTypeRefiner() {
            return this.f35749b;
        }
    }

    public final boolean isEnabled() {
        return this.f35748a;
    }
}
