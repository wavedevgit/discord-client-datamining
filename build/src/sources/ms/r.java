package ms;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r {

    /* renamed from: b  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f38942b = AtomicIntegerFieldUpdater.newUpdater(r.class, "_handled$volatile");
    private volatile /* synthetic */ int _handled$volatile;

    /* renamed from: a  reason: collision with root package name */
    public final Throwable f38943a;

    public r(Throwable th2, boolean z10) {
        this.f38943a = th2;
        this._handled$volatile = z10 ? 1 : 0;
    }

    public final boolean a() {
        if (f38942b.get(this) == 1) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return f38942b.compareAndSet(this, 0, 1);
    }

    public String toString() {
        return e0.a(this) + '[' + this.f38943a + ']';
    }

    public /* synthetic */ r(Throwable th2, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(th2, (i10 & 2) != 0 ? false : z10);
    }
}
