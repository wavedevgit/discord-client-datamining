package kotlin.reflect.jvm.internal.impl.builtins;

import ir.l;
import kotlin.Lazy;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DefaultBuiltIns extends KotlinBuiltIns {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: g  reason: collision with root package name */
    private static final Lazy f33425g = l.b(b.f33476d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final DefaultBuiltIns getInstance() {
            return (DefaultBuiltIns) DefaultBuiltIns.f33425g.getValue();
        }

        private Companion() {
        }
    }

    public DefaultBuiltIns() {
        this(false, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DefaultBuiltIns q() {
        return new DefaultBuiltIns(false, 1, null);
    }

    public DefaultBuiltIns(boolean z10) {
        super(new LockBasedStorageManager("DefaultBuiltIns"));
        if (z10) {
            f(false);
        }
    }

    public /* synthetic */ DefaultBuiltIns(boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? true : z10);
    }
}
