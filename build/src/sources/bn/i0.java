package bn;

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
    private final WorkflowViewStub f6563d;

    /* renamed from: e */
    private SparseArray f6564e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d */
        int f6566d;

        /* renamed from: e */
        final /* synthetic */ Lifecycle f6567e;

        /* renamed from: i */
        final /* synthetic */ Lifecycle.State f6568i;

        /* renamed from: o */
        final /* synthetic */ Flow f6569o;

        /* renamed from: p */
        final /* synthetic */ i0 f6570p;

        /* renamed from: q */
        final /* synthetic */ a0 f6571q;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d */
            int f6572d;

            /* renamed from: e */
            final /* synthetic */ Flow f6573e;

            /* renamed from: i */
            final /* synthetic */ i0 f6574i;

            /* renamed from: o */
            final /* synthetic */ a0 f6575o;

            /* renamed from: bn.i0$b$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0107a implements FlowCollector {

                /* renamed from: d */
                final /* synthetic */ i0 f6576d;

                /* renamed from: e */
                final /* synthetic */ a0 f6577e;

                public C0107a(i0 i0Var, a0 a0Var) {
                    this.f6576d = i0Var;
                    this.f6577e = a0Var;
                }

                @Override // kotlinx.coroutines.flow.FlowCollector
                public Object emit(Object obj, Continuation continuation) {
                    this.f6576d.c(obj, this.f6577e);
                    return Unit.f31988a;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Flow flow, i0 i0Var, a0 a0Var, Continuation continuation) {
                super(2, continuation);
                this.f6573e = flow;
                this.f6574i = i0Var;
                this.f6575o = a0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f6573e, this.f6574i, this.f6575o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = ur.b.f();
                int i10 = this.f6572d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Flow flow = this.f6573e;
                    C0107a c0107a = new C0107a(this.f6574i, this.f6575o);
                    this.f6572d = 1;
                    if (flow.collect(c0107a, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f31988a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Lifecycle lifecycle, Lifecycle.State state, Flow flow, i0 i0Var, a0 a0Var, Continuation continuation) {
            super(2, continuation);
            this.f6567e = lifecycle;
            this.f6568i = state;
            this.f6569o = flow;
            this.f6570p = i0Var;
            this.f6571q = a0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f6567e, this.f6568i, this.f6569o, this.f6570p, this.f6571q, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f6566d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Lifecycle lifecycle = this.f6567e;
                Lifecycle.State state = this.f6568i;
                a aVar = new a(this.f6569o, this.f6570p, this.f6571q, null);
                this.f6566d = 1;
                if (androidx.lifecycle.z.a(lifecycle, state, aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public /* synthetic */ i0(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    public static /* synthetic */ void b(i0 i0Var, Lifecycle lifecycle, Flow flow, Lifecycle.State state, a0 a0Var, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            state = Lifecycle.State.f4520o;
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
        ms.i.d(androidx.lifecycle.n.a(lifecycle), null, null, new b(lifecycle, repeatOnLifecycle, renderings, this, environment, null), 3, null);
    }

    public final void c(Object newRendering, a0 environment) {
        Intrinsics.checkNotNullParameter(newRendering, "newRendering");
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f6563d.c(newRendering, environment);
        SparseArray<Parcelable> sparseArray = this.f6564e;
        if (sparseArray == null) {
            return;
        }
        this.f6564e = null;
        this.f6563d.getActual().restoreHierarchyState(sparseArray);
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
            this.f6564e = aVar.a();
            super.onRestoreInstanceState(((a) parcelable).getSuperState());
            unit = Unit.f31988a;
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
        this.f6563d.getActual().saveHierarchyState(sparseArray);
        return new a(onSaveInstanceState, sparseArray);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends View.BaseSavedState {
        @NotNull
        public static final C0106a CREATOR = new C0106a(null);

        /* renamed from: d */
        private final SparseArray f6565d;

        /* renamed from: bn.i0$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0106a implements Parcelable.Creator {
            public /* synthetic */ C0106a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0106a() {
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Parcelable parcelable, SparseArray childState) {
            super(parcelable);
            Intrinsics.checkNotNullParameter(childState, "childState");
            this.f6565d = childState;
        }

        public final SparseArray a() {
            return this.f6565d;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            super.writeToParcel(out, i10);
            out.writeSparseArray(this.f6565d);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Parcel source) {
            super(source);
            Intrinsics.checkNotNullParameter(source, "source");
            SparseArray readSparseArray = source.readSparseArray(a.class.getClassLoader());
            Intrinsics.checkNotNull(readSparseArray);
            Intrinsics.checkNotNullExpressionValue(readSparseArray, "source.readSparseArray(S…class.java.classLoader)!!");
            this.f6565d = readSparseArray;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i0(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        if (getId() == -1) {
            setId(q.f6606d);
        }
        WorkflowViewStub workflowViewStub = new WorkflowViewStub(context, null, 0, 0, 14, null);
        workflowViewStub.setUpdatesVisibility(false);
        addView(workflowViewStub, new ViewGroup.LayoutParams(-1, -1));
        this.f6563d = workflowViewStub;
    }
}
