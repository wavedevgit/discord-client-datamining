package tm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import tm.k;
import tm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ t f49767a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f49768b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.c f49769c;

        /* renamed from: tm.u$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0647a extends FunctionReferenceImpl implements Function2 {
            C0647a(Object obj) {
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
            final /* synthetic */ k.a f49770d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f49771e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ a f49772i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(k.a aVar, k kVar, a aVar2) {
                super(3);
                this.f49770d = aVar;
                this.f49771e = kVar;
                this.f49772i = aVar2;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                tm.a dVar;
                if (bVar == null) {
                    dVar = null;
                } else {
                    dVar = new tm.d(this.f49770d, bVar);
                }
                if (dVar == null) {
                    dVar = this.f49770d;
                }
                return this.f49771e.f(obj, obj2, w.a(dVar, this.f49772i));
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
            this.f49767a = tVar;
            this.f49768b = kVar;
            this.f49769c = cVar;
        }

        @Override // tm.k
        public Object d(Object obj, i iVar) {
            return this.f49767a.a(obj, iVar, new C0647a(this.f49768b), this.f49769c);
        }

        @Override // tm.k
        public Object e(Object obj, Object obj2, Object obj3) {
            return this.f49767a.c(obj, obj2, obj3, new b(this.f49768b), this.f49769c);
        }

        @Override // tm.k
        public Object f(Object obj, Object obj2, k.a context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return this.f49767a.e(obj, obj2, context, new c(context, this.f49768b, this), this.f49769c);
        }

        @Override // tm.k
        public i g(Object obj) {
            return this.f49767a.d(obj, new d(this.f49768b), this.f49769c);
        }

        public String toString() {
            return "InterceptedWorkflow(" + this.f49768b + ", " + this + "@intercept)";
        }
    }

    public static final k a(t tVar, k workflow, t.c workflowSession) {
        Intrinsics.checkNotNullParameter(tVar, "<this>");
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(workflowSession, "workflowSession");
        if (tVar == e.f49714a) {
            return workflow;
        }
        return new a(tVar, workflow, workflowSession);
    }
}
