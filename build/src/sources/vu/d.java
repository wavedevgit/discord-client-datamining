package vu;

import bv.d;
import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import uu.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d extends f, bv.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: vu.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static final class C0703a extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ d f52995d;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: vu.d$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public /* synthetic */ class C0704a extends FunctionReferenceImpl implements Function2 {
                C0704a(Object obj) {
                    super(2, obj, d.class, "check", "check(Loperations/array/occurence/OccurrenceCheckInputData;LLogicEvaluator;)Ljava/lang/Object;", 0);
                }

                @Override // kotlin.jvm.functions.Function2
                /* renamed from: a */
                public final Object invoke(c p02, h p12) {
                    Intrinsics.checkNotNullParameter(p02, "p0");
                    Intrinsics.checkNotNullParameter(p12, "p1");
                    return ((d) this.receiver).d(p02, p12);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0703a(d dVar) {
                super(2);
                this.f52995d = dVar;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: a */
            public final Object invoke(uu.b input, h logicEvaluator) {
                Intrinsics.checkNotNullParameter(input, "input");
                Intrinsics.checkNotNullParameter(logicEvaluator, "logicEvaluator");
                return a.d(this.f52995d, input, logicEvaluator, new C0704a(this.f52995d));
            }
        }

        public static Object b(d dVar, Object obj, Object obj2, h evaluator) {
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            return dVar.b(obj, obj2, evaluator, new C0703a(dVar));
        }

        public static uu.b c(d dVar, List expressionValues, Object obj, h evaluator) {
            Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            return f.a.a(dVar, expressionValues, obj, evaluator);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static Object d(d dVar, uu.b bVar, h hVar, Function2 function2) {
            Object invoke;
            c g10 = g(dVar, bVar);
            if (g10 != null && (invoke = function2.invoke(g10, hVar)) != null) {
                return invoke;
            }
            return bVar.c();
        }

        public static Boolean e(d dVar, Map map, List expressionValues) {
            Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
            return Boolean.FALSE;
        }

        public static Object f(d dVar, Object obj, Object obj2, h evaluator, Function2 arrayOperation) {
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            Intrinsics.checkNotNullParameter(arrayOperation, "arrayOperation");
            return f.a.c(dVar, obj, obj2, evaluator, arrayOperation);
        }

        private static c g(d dVar, uu.b bVar) {
            if (bVar.a() != null && bVar.b() != null && !bVar.b().isEmpty()) {
                return new c(bVar.b(), bVar.a(), bVar.c());
            }
            return null;
        }

        public static List h(d dVar, List expression, Object obj, h evaluator) {
            Intrinsics.checkNotNullParameter(expression, "expression");
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            return f.a.d(dVar, expression, obj, evaluator);
        }

        public static boolean i(d dVar, Object obj) {
            return d.a.a(dVar, obj);
        }
    }

    Object d(c cVar, h hVar);
}
