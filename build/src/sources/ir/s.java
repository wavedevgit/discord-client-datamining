package ir;

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
    public static final a f31123o = new a(null);

    /* renamed from: p  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f31124p = AtomicReferenceFieldUpdater.newUpdater(s.class, Object.class, "e");

    /* renamed from: d  reason: collision with root package name */
    private volatile Function0 f31125d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f31126e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f31127i;

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
        this.f31125d = initializer;
        d0 d0Var = d0.f31101a;
        this.f31126e = d0Var;
        this.f31127i = d0Var;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        Object obj = this.f31126e;
        d0 d0Var = d0.f31101a;
        if (obj != d0Var) {
            return obj;
        }
        Function0 function0 = this.f31125d;
        if (function0 != null) {
            Object invoke = function0.invoke();
            if (androidx.concurrent.futures.b.a(f31124p, this, d0Var, invoke)) {
                this.f31125d = null;
                return invoke;
            }
        }
        return this.f31126e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f31126e != d0.f31101a) {
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
