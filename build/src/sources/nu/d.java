package nu;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import nu.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements lu.a, f {

    /* renamed from: a  reason: collision with root package name */
    public static final d f42338a = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, d.class, "mapOrEmptyList", "mapOrEmptyList(Loperations/array/ArrayOperationInputData;LLogicEvaluator;)Ljava/util/List;", 0);
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final List invoke(b p02, h p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            return ((d) this.receiver).h(p02, p12);
        }
    }

    private d() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final List h(b bVar, h hVar) {
        List b10 = bVar.b();
        if (b10 == null) {
            b10 = CollectionsKt.l();
        }
        List<Object> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (Object obj : list) {
            arrayList.add(f42338a.i(hVar, obj, bVar.a(), bVar.c()));
        }
        return arrayList;
    }

    private final Object i(h hVar, Object obj, Map map, Object obj2) {
        Object a10;
        if (map != null && (a10 = hVar.a(map, obj)) != null) {
            return a10;
        }
        return obj2;
    }

    @Override // nu.a
    public Object a(Map map, List list) {
        return f.a.b(this, map, list);
    }

    @Override // nu.f
    public Object b(Object obj, Object obj2, h hVar, Function2 function2) {
        return f.a.c(this, obj, obj2, hVar, function2);
    }

    @Override // nu.a
    public b c(List list, Object obj, h hVar) {
        return f.a.a(this, list, obj, hVar);
    }

    @Override // lu.a
    public Object e(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        return b(obj, obj2, evaluator, new a(this));
    }

    @Override // pv.a
    public List f(List list, Object obj, h hVar) {
        return f.a.d(this, list, obj, hVar);
    }
}
