package rr;

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
    public static final a f49214o = new a(null);

    /* renamed from: p  reason: collision with root package name */
    private static final AtomicReferenceFieldUpdater f49215p = AtomicReferenceFieldUpdater.newUpdater(s.class, Object.class, "e");

    /* renamed from: d  reason: collision with root package name */
    private volatile Function0 f49216d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f49217e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f49218i;

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
        this.f49216d = initializer;
        d0 d0Var = d0.f49192a;
        this.f49217e = d0Var;
        this.f49218i = d0Var;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        Object obj = this.f49217e;
        d0 d0Var = d0.f49192a;
        if (obj != d0Var) {
            return obj;
        }
        Function0 function0 = this.f49216d;
        if (function0 != null) {
            Object invoke = function0.invoke();
            if (androidx.concurrent.futures.b.a(f49215p, this, d0Var, invoke)) {
                this.f49216d = null;
                return invoke;
            }
        }
        return this.f49217e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f49217e != d0.f49192a) {
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
