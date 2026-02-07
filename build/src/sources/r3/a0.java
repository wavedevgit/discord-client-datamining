package r3;

import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final u f48490a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicBoolean f48491b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f48492c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function0 {
        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final x3.k invoke() {
            return a0.this.d();
        }
    }

    public a0(u database) {
        Intrinsics.checkNotNullParameter(database, "database");
        this.f48490a = database;
        this.f48491b = new AtomicBoolean(false);
        this.f48492c = qr.l.a(new a());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final x3.k d() {
        return this.f48490a.f(e());
    }

    private final x3.k f() {
        return (x3.k) this.f48492c.getValue();
    }

    private final x3.k g(boolean z10) {
        if (z10) {
            return f();
        }
        return d();
    }

    public x3.k b() {
        c();
        return g(this.f48491b.compareAndSet(false, true));
    }

    protected void c() {
        this.f48490a.c();
    }

    protected abstract String e();

    public void h(x3.k statement) {
        Intrinsics.checkNotNullParameter(statement, "statement");
        if (statement == f()) {
            this.f48491b.set(false);
        }
    }
}
