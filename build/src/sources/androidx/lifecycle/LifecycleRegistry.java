package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import m.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class LifecycleRegistry extends Lifecycle {

    /* renamed from: k  reason: collision with root package name */
    public static final a f4401k = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final boolean f4402b;

    /* renamed from: c  reason: collision with root package name */
    private m.a f4403c;

    /* renamed from: d  reason: collision with root package name */
    private Lifecycle.State f4404d;

    /* renamed from: e  reason: collision with root package name */
    private final WeakReference f4405e;

    /* renamed from: f  reason: collision with root package name */
    private int f4406f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f4407g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f4408h;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f4409i;

    /* renamed from: j  reason: collision with root package name */
    private final MutableStateFlow f4410j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final LifecycleRegistry a(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            return new LifecycleRegistry(owner, false, null);
        }

        public final Lifecycle.State b(Lifecycle.State state1, Lifecycle.State state) {
            Intrinsics.checkNotNullParameter(state1, "state1");
            if (state != null && state.compareTo(state1) < 0) {
                return state;
            }
            return state1;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Lifecycle.State f4411a;

        /* renamed from: b  reason: collision with root package name */
        private m f4412b;

        public b(o oVar, Lifecycle.State initialState) {
            Intrinsics.checkNotNullParameter(initialState, "initialState");
            Intrinsics.checkNotNull(oVar);
            this.f4412b = t.f(oVar);
            this.f4411a = initialState;
        }

        public final void a(LifecycleOwner lifecycleOwner, Lifecycle.a event) {
            Intrinsics.checkNotNullParameter(event, "event");
            Lifecycle.State e10 = event.e();
            this.f4411a = LifecycleRegistry.f4401k.b(this.f4411a, e10);
            m mVar = this.f4412b;
            Intrinsics.checkNotNull(lifecycleOwner);
            mVar.h(lifecycleOwner, event);
            this.f4411a = e10;
        }

        public final Lifecycle.State b() {
            return this.f4411a;
        }
    }

    public /* synthetic */ LifecycleRegistry(LifecycleOwner lifecycleOwner, boolean z10, DefaultConstructorMarker defaultConstructorMarker) {
        this(lifecycleOwner, z10);
    }

    private final void e(LifecycleOwner lifecycleOwner) {
        Iterator descendingIterator = this.f4403c.descendingIterator();
        Intrinsics.checkNotNullExpressionValue(descendingIterator, "descendingIterator(...)");
        while (descendingIterator.hasNext() && !this.f4408h) {
            Map.Entry entry = (Map.Entry) descendingIterator.next();
            Intrinsics.checkNotNull(entry);
            o oVar = (o) entry.getKey();
            b bVar = (b) entry.getValue();
            while (bVar.b().compareTo(this.f4404d) > 0 && !this.f4408h && this.f4403c.contains(oVar)) {
                Lifecycle.a a10 = Lifecycle.a.Companion.a(bVar.b());
                if (a10 != null) {
                    n(a10.e());
                    bVar.a(lifecycleOwner, a10);
                    m();
                } else {
                    throw new IllegalStateException("no event down from " + bVar.b());
                }
            }
        }
    }

    private final Lifecycle.State f(o oVar) {
        Lifecycle.State state;
        ArrayList arrayList;
        b bVar;
        Map.Entry i10 = this.f4403c.i(oVar);
        Lifecycle.State state2 = null;
        if (i10 != null && (bVar = (b) i10.getValue()) != null) {
            state = bVar.b();
        } else {
            state = null;
        }
        if (!this.f4409i.isEmpty()) {
            state2 = (Lifecycle.State) this.f4409i.get(arrayList.size() - 1);
        }
        a aVar = f4401k;
        return aVar.b(aVar.b(this.f4404d, state), state2);
    }

    public static final LifecycleRegistry g(LifecycleOwner lifecycleOwner) {
        return f4401k.a(lifecycleOwner);
    }

    private final void h(String str) {
        if (this.f4402b && !r.a()) {
            throw new IllegalStateException(("Method " + str + " must be called on the main thread").toString());
        }
    }

    private final void i(LifecycleOwner lifecycleOwner) {
        b.d d10 = this.f4403c.d();
        Intrinsics.checkNotNullExpressionValue(d10, "iteratorWithAdditions(...)");
        while (d10.hasNext() && !this.f4408h) {
            Map.Entry entry = (Map.Entry) d10.next();
            o oVar = (o) entry.getKey();
            b bVar = (b) entry.getValue();
            while (bVar.b().compareTo(this.f4404d) < 0 && !this.f4408h && this.f4403c.contains(oVar)) {
                n(bVar.b());
                Lifecycle.a b10 = Lifecycle.a.Companion.b(bVar.b());
                if (b10 != null) {
                    bVar.a(lifecycleOwner, b10);
                    m();
                } else {
                    throw new IllegalStateException("no event up from " + bVar.b());
                }
            }
        }
    }

    private final boolean k() {
        if (this.f4403c.size() == 0) {
            return true;
        }
        Map.Entry b10 = this.f4403c.b();
        Intrinsics.checkNotNull(b10);
        Lifecycle.State b11 = ((b) b10.getValue()).b();
        Map.Entry e10 = this.f4403c.e();
        Intrinsics.checkNotNull(e10);
        Lifecycle.State b12 = ((b) e10.getValue()).b();
        if (b11 == b12 && this.f4404d == b12) {
            return true;
        }
        return false;
    }

    private final void l(Lifecycle.State state) {
        if (this.f4404d != state) {
            q.a((LifecycleOwner) this.f4405e.get(), this.f4404d, state);
            this.f4404d = state;
            if (!this.f4407g && this.f4406f == 0) {
                this.f4407g = true;
                p();
                this.f4407g = false;
                if (this.f4404d == Lifecycle.State.f4392d) {
                    this.f4403c = new m.a();
                    return;
                }
                return;
            }
            this.f4408h = true;
        }
    }

    private final void m() {
        ArrayList arrayList = this.f4409i;
        arrayList.remove(arrayList.size() - 1);
    }

    private final void n(Lifecycle.State state) {
        this.f4409i.add(state);
    }

    private final void p() {
        LifecycleOwner lifecycleOwner = (LifecycleOwner) this.f4405e.get();
        if (lifecycleOwner != null) {
            while (!k()) {
                this.f4408h = false;
                Lifecycle.State state = this.f4404d;
                Map.Entry b10 = this.f4403c.b();
                Intrinsics.checkNotNull(b10);
                if (state.compareTo(((b) b10.getValue()).b()) < 0) {
                    e(lifecycleOwner);
                }
                Map.Entry e10 = this.f4403c.e();
                if (!this.f4408h && e10 != null && this.f4404d.compareTo(((b) e10.getValue()).b()) > 0) {
                    i(lifecycleOwner);
                }
            }
            this.f4408h = false;
            this.f4410j.setValue(b());
            return;
        }
        throw new IllegalStateException("LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.");
    }

    @Override // androidx.lifecycle.Lifecycle
    public void a(o observer) {
        LifecycleOwner lifecycleOwner;
        boolean z10;
        Intrinsics.checkNotNullParameter(observer, "observer");
        h("addObserver");
        Lifecycle.State state = this.f4404d;
        Lifecycle.State state2 = Lifecycle.State.f4392d;
        if (state != state2) {
            state2 = Lifecycle.State.f4393e;
        }
        b bVar = new b(observer, state2);
        if (((b) this.f4403c.g(observer, bVar)) != null || (lifecycleOwner = (LifecycleOwner) this.f4405e.get()) == null) {
            return;
        }
        if (this.f4406f == 0 && !this.f4407g) {
            z10 = false;
        } else {
            z10 = true;
        }
        Lifecycle.State f10 = f(observer);
        this.f4406f++;
        while (bVar.b().compareTo(f10) < 0 && this.f4403c.contains(observer)) {
            n(bVar.b());
            Lifecycle.a b10 = Lifecycle.a.Companion.b(bVar.b());
            if (b10 != null) {
                bVar.a(lifecycleOwner, b10);
                m();
                f10 = f(observer);
            } else {
                throw new IllegalStateException("no event up from " + bVar.b());
            }
        }
        if (!z10) {
            p();
        }
        this.f4406f--;
    }

    @Override // androidx.lifecycle.Lifecycle
    public Lifecycle.State b() {
        return this.f4404d;
    }

    @Override // androidx.lifecycle.Lifecycle
    public void d(o observer) {
        Intrinsics.checkNotNullParameter(observer, "observer");
        h("removeObserver");
        this.f4403c.h(observer);
    }

    public void j(Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(event, "event");
        h("handleLifecycleEvent");
        l(event.e());
    }

    public void o(Lifecycle.State state) {
        Intrinsics.checkNotNullParameter(state, "state");
        h("setCurrentState");
        l(state);
    }

    private LifecycleRegistry(LifecycleOwner lifecycleOwner, boolean z10) {
        this.f4402b = z10;
        this.f4403c = new m.a();
        Lifecycle.State state = Lifecycle.State.f4393e;
        this.f4404d = state;
        this.f4409i = new ArrayList();
        this.f4405e = new WeakReference(lifecycleOwner);
        this.f4410j = js.l0.a(state);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public LifecycleRegistry(LifecycleOwner provider) {
        this(provider, true);
        Intrinsics.checkNotNullParameter(provider, "provider");
    }
}
