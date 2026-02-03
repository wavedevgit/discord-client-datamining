package zm;

import android.view.View;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.LifecycleRegistry;
import androidx.lifecycle.m;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements d, LifecycleOwner, View.OnAttachStateChangeListener, m {

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f56068d;

    /* renamed from: e  reason: collision with root package name */
    private View f56069e;

    /* renamed from: i  reason: collision with root package name */
    private final LifecycleRegistry f56070i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f56071o;

    /* renamed from: p  reason: collision with root package name */
    private Lifecycle f56072p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f56073q;

    public b(Function1 findParentLifecycle, boolean z10) {
        LifecycleRegistry g10;
        Intrinsics.checkNotNullParameter(findParentLifecycle, "findParentLifecycle");
        this.f56068d = findParentLifecycle;
        if (z10) {
            g10 = new LifecycleRegistry(this);
        } else {
            g10 = LifecycleRegistry.g(this);
            Intrinsics.checkNotNullExpressionValue(g10, "createUnsafe(this)");
        }
        this.f56070i = g10;
    }

    public static /* synthetic */ void b(b bVar, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            View view = bVar.f56069e;
            if (view == null) {
                z10 = false;
            } else {
                z10 = view.isAttachedToWindow();
            }
        }
        bVar.a(z10);
    }

    public final void a(boolean z10) {
        Lifecycle.State b10;
        Lifecycle lifecycle = this.f56072p;
        if (lifecycle == null) {
            b10 = null;
        } else {
            b10 = lifecycle.b();
        }
        Lifecycle.State b11 = this.f56070i.b();
        Intrinsics.checkNotNullExpressionValue(b11, "localLifecycle.currentState");
        Lifecycle.State state = Lifecycle.State.f4405d;
        if (b11 != state && !this.f56071o) {
            LifecycleRegistry lifecycleRegistry = this.f56070i;
            if (this.f56073q && !z10) {
                b10 = state;
            } else if (b10 == null && b11 != (b10 = Lifecycle.State.f4406e)) {
                throw new AssertionError("Must have a parent lifecycle after attaching and until being destroyed.");
            }
            if (b10 == state) {
                this.f56071o = true;
                Lifecycle lifecycle2 = this.f56072p;
                if (lifecycle2 != null) {
                    lifecycle2.d(this);
                }
                this.f56072p = null;
                View view = this.f56069e;
                if (view != null) {
                    this.f56069e = null;
                    view.removeOnAttachStateChangeListener(this);
                }
                Lifecycle.State state2 = Lifecycle.State.f4406e;
                if (b11 == state2) {
                    state = state2;
                }
            } else {
                state = b10;
            }
            lifecycleRegistry.o(state);
            return;
        }
        this.f56069e = null;
    }

    @Override // androidx.lifecycle.LifecycleOwner
    public Lifecycle getLifecycle() {
        return this.f56070i;
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        b(this, false, 1, null);
    }

    @Override // zm.d
    public void j() {
        if (!this.f56073q) {
            this.f56073q = true;
            b(this, false, 1, null);
        }
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        if (this.f56070i.b() != Lifecycle.State.f4405d && !this.f56071o) {
            this.f56069e = v10;
            Lifecycle lifecycle = this.f56072p;
            Lifecycle lifecycle2 = (Lifecycle) this.f56068d.invoke(v10);
            this.f56072p = lifecycle2;
            if (lifecycle2 != lifecycle) {
                if (lifecycle != null) {
                    lifecycle.d(this);
                }
                Lifecycle lifecycle3 = this.f56072p;
                if (lifecycle3 != null) {
                    lifecycle3.a(this);
                }
            }
            a(true);
        }
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        a(false);
    }

    public /* synthetic */ b(Function1 function1, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(function1, (i10 & 2) != 0 ? true : z10);
    }
}
