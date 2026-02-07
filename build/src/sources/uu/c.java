package uu;

import bv.d;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import uu.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements su.a, f, bv.d {

    /* renamed from: a  reason: collision with root package name */
    public static final c f52139a = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, c.class, "filterOrEmptyList", "filterOrEmptyList(Loperations/array/ArrayOperationInputData;LLogicEvaluator;)Ljava/util/List;", 0);
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final List invoke(b p02, h p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            return ((c) this.receiver).h(p02, p12);
        }
    }

    private c() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final List h(b bVar, h hVar) {
        List b10 = bVar.b();
        if (b10 == null) {
            b10 = CollectionsKt.l();
        }
        ArrayList arrayList = new ArrayList();
        for (Object obj : b10) {
            if (f52139a.i(hVar, obj, bVar.a(), bVar.c())) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    private final boolean i(h hVar, Object obj, Map map, Object obj2) {
        Object a10;
        if (map != null && (a10 = hVar.a(map, obj)) != null) {
            obj2 = a10;
        }
        return j(obj2);
    }

    @Override // uu.a
    public Object a(Map map, List list) {
        return f.a.b(this, map, list);
    }

    @Override // uu.f
    public Object b(Object obj, Object obj2, h hVar, Function2 function2) {
        return f.a.c(this, obj, obj2, hVar, function2);
    }

    @Override // uu.a
    public b c(List list, Object obj, h hVar) {
        return f.a.a(this, list, obj, hVar);
    }

    @Override // su.a
    public Object e(Object obj, Object obj2, h evaluator) {
        Intrinsics.checkNotNullParameter(evaluator, "evaluator");
        return b(obj, obj2, evaluator, new a(this));
    }

    @Override // bw.a
    public List f(List list, Object obj, h hVar) {
        return f.a.d(this, list, obj, hVar);
    }

    public boolean j(Object obj) {
        return d.a.a(this, obj);
    }
}
