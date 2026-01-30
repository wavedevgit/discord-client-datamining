package vm;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.util.SparseArray;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.lifecycle.Lifecycle;
import com.squareup.workflow1.ui.WorkflowViewStub;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 extends FrameLayout {

    /* renamed from: d */
    private final WorkflowViewStub f51256d;

    /* renamed from: e */
    private SparseArray f51257e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d */
        int f51259d;

        /* renamed from: e */
        final /* synthetic */ Lifecycle f51260e;

        /* renamed from: i */
        final /* synthetic */ Lifecycle.State f51261i;

        /* renamed from: o */
        final /* synthetic */ Flow f51262o;

        /* renamed from: p */
        final /* synthetic */ i0 f51263p;

        /* renamed from: q */
        final /* synthetic */ a0 f51264q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d */
            int f51265d;

            /* renamed from: e */
            final /* synthetic */ Flow f51266e;

            /* renamed from: i */
            final /* synthetic */ i0 f51267i;

            /* renamed from: o */
            final /* synthetic */ a0 f51268o;

            /* renamed from: vm.i0$b$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0685a implements FlowCollector {

                /* renamed from: d */
                final /* synthetic */ i0 f51269d;

                /* renamed from: e */
                final /* synthetic */ a0 f51270e;

                public C0685a(i0 i0Var, a0 a0Var) {
                    this.f51269d = i0Var;
                    this.f51270e = a0Var;
                }

                @Override // kotlinx.coroutines.flow.FlowCollector
                public Object emit(Object obj, Continuation continuation) {
                    this.f51269d.c(obj, this.f51270e);
                    return Unit.f33298a;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Flow flow, i0 i0Var, a0 a0Var, Continuation continuation) {
                super(2, continuation);
                this.f51266e = flow;
                this.f51267i = i0Var;
                this.f51268o = a0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f51266e, this.f51267i, this.f51268o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f51265d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Flow flow = this.f51266e;
                    C0685a c0685a = new C0685a(this.f51267i, this.f51268o);
                    this.f51265d = 1;
                    if (flow.collect(c0685a, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33298a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Lifecycle lifecycle, Lifecycle.State state, Flow flow, i0 i0Var, a0 a0Var, Continuation continuation) {
            super(2, continuation);
            this.f51260e = lifecycle;
            this.f51261i = state;
            this.f51262o = flow;
            this.f51263p = i0Var;
            this.f51264q = a0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f51260e, this.f51261i, this.f51262o, this.f51263p, this.f51264q, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f51259d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Lifecycle lifecycle = this.f51260e;
                Lifecycle.State state = this.f51261i;
                a aVar = new a(this.f51262o, this.f51263p, this.f51264q, null);
                this.f51259d = 1;
                if (androidx.lifecycle.z.a(lifecycle, state, aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public /* synthetic */ i0(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    public static /* synthetic */ void b(i0 i0Var, Lifecycle lifecycle, Flow flow, Lifecycle.State state, a0 a0Var, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            state = Lifecycle.State.f4395o;
        }
        if ((i10 & 8) != 0) {
            a0Var = new a0(null, 1, null);
        }
        i0Var.a(lifecycle, flow, state, a0Var);
    }

    public final void a(Lifecycle lifecycle, Flow renderings, Lifecycle.State repeatOnLifecycle, a0 environment) {
        Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
        Intrinsics.checkNotNullParameter(renderings, "renderings");
        Intrinsics.checkNotNullParameter(repeatOnLifecycle, "repeatOnLifecycle");
        Intrinsics.checkNotNullParameter(environment, "environment");
        gs.i.d(androidx.lifecycle.n.a(lifecycle), null, null, new b(lifecycle, repeatOnLifecycle, renderings, this, environment, null), 3, null);
    }

    public final void c(Object newRendering, a0 environment) {
        Intrinsics.checkNotNullParameter(newRendering, "newRendering");
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f51256d.c(newRendering, environment);
        SparseArray<Parcelable> sparseArray = this.f51257e;
        if (sparseArray == null) {
            return;
        }
        this.f51257e = null;
        this.f51256d.getActual().restoreHierarchyState(sparseArray);
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        a aVar;
        Unit unit = null;
        if (parcelable instanceof a) {
            aVar = (a) parcelable;
        } else {
            aVar = null;
        }
        if (aVar != null) {
            this.f51257e = aVar.a();
            super.onRestoreInstanceState(((a) parcelable).getSuperState());
            unit = Unit.f33298a;
        }
        if (unit == null) {
            super.onRestoreInstanceState(super.onSaveInstanceState());
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable onSaveInstanceState = super.onSaveInstanceState();
        Intrinsics.checkNotNull(onSaveInstanceState);
        SparseArray<Parcelable> sparseArray = new SparseArray<>();
        this.f51256d.getActual().saveHierarchyState(sparseArray);
        return new a(onSaveInstanceState, sparseArray);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends View.BaseSavedState {
        @NotNull
        public static final C0684a CREATOR = new C0684a(null);

        /* renamed from: d */
        private final SparseArray f51258d;

        /* renamed from: vm.i0$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0684a implements Parcelable.Creator {
            public /* synthetic */ C0684a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public a createFromParcel(Parcel source) {
                Intrinsics.checkNotNullParameter(source, "source");
                return new a(source);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public a[] newArray(int i10) {
                return new a[i10];
            }

            private C0684a() {
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Parcelable parcelable, SparseArray childState) {
            super(parcelable);
            Intrinsics.checkNotNullParameter(childState, "childState");
            this.f51258d = childState;
        }

        public final SparseArray a() {
            return this.f51258d;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            super.writeToParcel(out, i10);
            out.writeSparseArray(this.f51258d);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Parcel source) {
            super(source);
            Intrinsics.checkNotNullParameter(source, "source");
            SparseArray readSparseArray = source.readSparseArray(a.class.getClassLoader());
            Intrinsics.checkNotNull(readSparseArray);
            Intrinsics.checkNotNullExpressionValue(readSparseArray, "source.readSparseArray(S…class.java.classLoader)!!");
            this.f51258d = readSparseArray;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i0(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        if (getId() == -1) {
            setId(q.f51299d);
        }
        WorkflowViewStub workflowViewStub = new WorkflowViewStub(context, null, 0, 0, 14, null);
        workflowViewStub.setUpdatesVisibility(false);
        addView(workflowViewStub, new ViewGroup.LayoutParams(-1, -1));
        this.f51256d = workflowViewStub;
    }
}
