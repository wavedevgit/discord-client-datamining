package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.collections.o0;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface NullabilityAnnotationStates<T> {
    @NotNull
    public static final Companion Companion = Companion.f34031a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ Companion f34031a = new Companion();

        /* renamed from: b  reason: collision with root package name */
        private static final NullabilityAnnotationStates f34032b = new NullabilityAnnotationStatesImpl(o0.i());

        private Companion() {
        }

        @NotNull
        public final NullabilityAnnotationStates getEMPTY() {
            return f34032b;
        }
    }

    T get(@NotNull FqName fqName);
}
