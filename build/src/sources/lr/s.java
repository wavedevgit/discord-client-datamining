package lr;

import java.io.Serializable;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements Lazy, Serializable {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final a f37124o = new a(null);

    /* renamed from: p  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f37125p = AtomicReferenceFieldUpdater.newUpdater(s.class, Object.class, "e");

    /* renamed from: d  reason: collision with root package name */
    private volatile Function0 f37126d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f37127e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f37128i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public s(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f37126d = initializer;
        d0 d0Var = d0.f37102a;
        this.f37127e = d0Var;
        this.f37128i = d0Var;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        Object obj = this.f37127e;
        d0 d0Var = d0.f37102a;
        if (obj != d0Var) {
            return obj;
        }
        Function0 function0 = this.f37126d;
        if (function0 != null) {
            Object invoke = function0.invoke();
            if (androidx.concurrent.futures.b.a(f37125p, this, d0Var, invoke)) {
                this.f37126d = null;
                return invoke;
            }
        }
        return this.f37127e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f37127e != d0.f37102a) {
            return true;
        }
        return false;
    }

    public String toString() {
        if (isInitialized()) {
            return String.valueOf(getValue());
        }
        return "Lazy value not initialized yet.";
    }
}
