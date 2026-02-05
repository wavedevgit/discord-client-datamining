package zm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import zm.k;
import zm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ t f56113a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f56114b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.c f56115c;

        /* renamed from: zm.u$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0789a extends FunctionReferenceImpl implements Function2 {
            C0789a(Object obj) {
                super(2, obj, k.class, "initialState", "initialState(Ljava/lang/Object;Lcom/squareup/workflow1/Snapshot;)Ljava/lang/Object;", 0);
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: a */
            public final Object invoke(Object obj, i iVar) {
                return ((k) this.receiver).d(obj, iVar);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {
            b(Object obj) {
                super(3, obj, k.class, "onPropsChanged", "onPropsChanged(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", 0);
            }

            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                return ((k) this.receiver).e(obj, obj2, obj3);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ k.a f56116d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f56117e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ a f56118i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(k.a aVar, k kVar, a aVar2) {
                super(3);
                this.f56116d = aVar;
                this.f56117e = kVar;
                this.f56118i = aVar2;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                zm.a dVar;
                if (bVar == null) {
                    dVar = null;
                } else {
                    dVar = new zm.d(this.f56116d, bVar);
                }
                if (dVar == null) {
                    dVar = this.f56116d;
                }
                return this.f56117e.f(obj, obj2, w.a(dVar, this.f56118i));
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class d extends FunctionReferenceImpl implements Function1 {
            d(Object obj) {
                super(1, obj, k.class, "snapshotState", "snapshotState(Ljava/lang/Object;)Lcom/squareup/workflow1/Snapshot;", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final i invoke(Object obj) {
                return ((k) this.receiver).g(obj);
            }
        }

        a(t tVar, k kVar, t.c cVar) {
            this.f56113a = tVar;
            this.f56114b = kVar;
            this.f56115c = cVar;
        }

        @Override // zm.k
        public Object d(Object obj, i iVar) {
            return this.f56113a.a(obj, iVar, new C0789a(this.f56114b), this.f56115c);
        }

        @Override // zm.k
        public Object e(Object obj, Object obj2, Object obj3) {
            return this.f56113a.e(obj, obj2, obj3, new b(this.f56114b), this.f56115c);
        }

        @Override // zm.k
        public Object f(Object obj, Object obj2, k.a context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return this.f56113a.c(obj, obj2, context, new c(context, this.f56114b, this), this.f56115c);
        }

        @Override // zm.k
        public i g(Object obj) {
            return this.f56113a.b(obj, new d(this.f56114b), this.f56115c);
        }

        public String toString() {
            return "InterceptedWorkflow(" + this.f56114b + ", " + this + "@intercept)";
        }
    }

    public static final k a(t tVar, k workflow, t.c workflowSession) {
        Intrinsics.checkNotNullParameter(tVar, "<this>");
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(workflowSession, "workflowSession");
        if (tVar == e.f56060a) {
            return workflow;
        }
        return new a(tVar, workflow, workflowSession);
    }
}
