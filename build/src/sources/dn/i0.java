package dn;

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
    private final WorkflowViewStub f20886d;

    /* renamed from: e */
    private SparseArray f20887e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d */
        int f20889d;

        /* renamed from: e */
        final /* synthetic */ Lifecycle f20890e;

        /* renamed from: i */
        final /* synthetic */ Lifecycle.State f20891i;

        /* renamed from: o */
        final /* synthetic */ Flow f20892o;

        /* renamed from: p */
        final /* synthetic */ i0 f20893p;

        /* renamed from: q */
        final /* synthetic */ a0 f20894q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d */
            int f20895d;

            /* renamed from: e */
            final /* synthetic */ Flow f20896e;

            /* renamed from: i */
            final /* synthetic */ i0 f20897i;

            /* renamed from: o */
            final /* synthetic */ a0 f20898o;

            /* renamed from: dn.i0$b$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0274a implements FlowCollector {

                /* renamed from: d */
                final /* synthetic */ i0 f20899d;

                /* renamed from: e */
                final /* synthetic */ a0 f20900e;

                public C0274a(i0 i0Var, a0 a0Var) {
                    this.f20899d = i0Var;
                    this.f20900e = a0Var;
                }

                @Override // kotlinx.coroutines.flow.FlowCollector
                public Object emit(Object obj, Continuation continuation) {
                    this.f20899d.c(obj, this.f20900e);
                    return Unit.f32056a;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Flow flow, i0 i0Var, a0 a0Var, Continuation continuation) {
                super(2, continuation);
                this.f20896e = flow;
                this.f20897i = i0Var;
                this.f20898o = a0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f20896e, this.f20897i, this.f20898o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f20895d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Flow flow = this.f20896e;
                    C0274a c0274a = new C0274a(this.f20897i, this.f20898o);
                    this.f20895d = 1;
                    if (flow.collect(c0274a, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Lifecycle lifecycle, Lifecycle.State state, Flow flow, i0 i0Var, a0 a0Var, Continuation continuation) {
            super(2, continuation);
            this.f20890e = lifecycle;
            this.f20891i = state;
            this.f20892o = flow;
            this.f20893p = i0Var;
            this.f20894q = a0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f20890e, this.f20891i, this.f20892o, this.f20893p, this.f20894q, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f20889d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Lifecycle lifecycle = this.f20890e;
                Lifecycle.State state = this.f20891i;
                a aVar = new a(this.f20892o, this.f20893p, this.f20894q, null);
                this.f20889d = 1;
                if (androidx.lifecycle.z.a(lifecycle, state, aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public /* synthetic */ i0(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    public static /* synthetic */ void b(i0 i0Var, Lifecycle lifecycle, Flow flow, Lifecycle.State state, a0 a0Var, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            state = Lifecycle.State.f4849o;
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
        os.i.d(androidx.lifecycle.n.a(lifecycle), null, null, new b(lifecycle, repeatOnLifecycle, renderings, this, environment, null), 3, null);
    }

    public final void c(Object newRendering, a0 environment) {
        Intrinsics.checkNotNullParameter(newRendering, "newRendering");
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f20886d.c(newRendering, environment);
        SparseArray<Parcelable> sparseArray = this.f20887e;
        if (sparseArray == null) {
            return;
        }
        this.f20887e = null;
        this.f20886d.getActual().restoreHierarchyState(sparseArray);
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
            this.f20887e = aVar.a();
            super.onRestoreInstanceState(((a) parcelable).getSuperState());
            unit = Unit.f32056a;
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
        this.f20886d.getActual().saveHierarchyState(sparseArray);
        return new a(onSaveInstanceState, sparseArray);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends View.BaseSavedState {
        @NotNull
        public static final C0273a CREATOR = new C0273a(null);

        /* renamed from: d */
        private final SparseArray f20888d;

        /* renamed from: dn.i0$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0273a implements Parcelable.Creator {
            public /* synthetic */ C0273a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0273a() {
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Parcelable parcelable, SparseArray childState) {
            super(parcelable);
            Intrinsics.checkNotNullParameter(childState, "childState");
            this.f20888d = childState;
        }

        public final SparseArray a() {
            return this.f20888d;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            super.writeToParcel(out, i10);
            out.writeSparseArray(this.f20888d);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Parcel source) {
            super(source);
            Intrinsics.checkNotNullParameter(source, "source");
            SparseArray readSparseArray = source.readSparseArray(a.class.getClassLoader());
            Intrinsics.checkNotNull(readSparseArray);
            Intrinsics.checkNotNullExpressionValue(readSparseArray, "source.readSparseArray(S…class.java.classLoader)!!");
            this.f20888d = readSparseArray;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i0(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        if (getId() == -1) {
            setId(q.f20929d);
        }
        WorkflowViewStub workflowViewStub = new WorkflowViewStub(context, null, 0, 0, 14, null);
        workflowViewStub.setUpdatesVisibility(false);
        addView(workflowViewStub, new ViewGroup.LayoutParams(-1, -1));
        this.f20886d = workflowViewStub;
    }
}
