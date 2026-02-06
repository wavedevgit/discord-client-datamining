package cn;

import bn.q;
import bn.t;
import bn.w;
import cn.e;
import cn.f;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements f.a {

    /* renamed from: a  reason: collision with root package name */
    private Map f7597a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineContext f7598b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f7599c;

    /* renamed from: d  reason: collision with root package name */
    private final t.c f7600d;

    /* renamed from: e  reason: collision with root package name */
    private final t f7601e;

    /* renamed from: f  reason: collision with root package name */
    private final d f7602f;

    /* renamed from: g  reason: collision with root package name */
    private cn.a f7603g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f7604d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f7605e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Ref.ObjectRef objectRef, h hVar) {
            super(1, Intrinsics.Kotlin.class, "acceptChildOutput", "createChildNode$acceptChildOutput(Lkotlin/jvm/internal/Ref$ObjectRef;Lcom/squareup/workflow1/internal/SubtreeManager;Ljava/lang/Object;)Ljava/lang/Object;", 0);
            this.f7604d = objectRef;
            this.f7605e = hVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            return h.e(this.f7604d, this.f7605e, obj);
        }
    }

    public h(Map map, CoroutineContext contextForChildren, Function1 emitActionToParent, t.c cVar, t interceptor, d dVar) {
        Intrinsics.checkNotNullParameter(contextForChildren, "contextForChildren");
        Intrinsics.checkNotNullParameter(emitActionToParent, "emitActionToParent");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f7597a = map;
        this.f7598b = contextForChildren;
        this.f7599c = emitActionToParent;
        this.f7600d = cVar;
        this.f7601e = interceptor;
        this.f7602f = dVar;
        this.f7603g = new cn.a();
    }

    /* JADX WARN: Type inference failed for: r12v1, types: [T, cn.i] */
    private final i d(q qVar, Object obj, String str, Function1 function1) {
        bn.m mVar;
        k a10 = l.a(qVar, str);
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        Map map = this.f7597a;
        if (map == null) {
            mVar = null;
        } else {
            mVar = (bn.m) map.get(a10);
        }
        ?? iVar = new i(qVar, function1, new j(a10, qVar.b(), obj, mVar, this.f7598b, new a(objectRef, this), this.f7600d, this.f7601e, this.f7602f));
        objectRef.element = iVar;
        return iVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object e(Ref.ObjectRef objectRef, h hVar, Object obj) {
        i iVar;
        T t10 = objectRef.element;
        if (t10 == 0) {
            Intrinsics.throwUninitializedPropertyAccessException("node");
            iVar = null;
        } else {
            iVar = (i) t10;
        }
        return hVar.f7599c.invoke(iVar.c(obj));
    }

    @Override // cn.f.a
    public Object a(q child, Object obj, String key, Function1 handler) {
        e eVar;
        e eVar2;
        e eVar3;
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        eVar = this.f7603g.f7559b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            if (((i) b10).h(child, key)) {
                throw new IllegalArgumentException(("Expected keys to be unique for " + w.j(child) + ": key=\"" + key + '\"').toString());
            }
        }
        cn.a aVar = this.f7603g;
        eVar2 = aVar.f7558a;
        e.a b11 = eVar2.b();
        i iVar = null;
        e.a aVar2 = null;
        while (true) {
            if (b11 == null) {
                break;
            } else if (((i) b11).h(child, key)) {
                if (aVar2 == null) {
                    eVar2.e(b11.a());
                } else {
                    aVar2.b(b11.a());
                }
                if (Intrinsics.areEqual(eVar2.c(), b11)) {
                    eVar2.f(aVar2);
                }
                b11.b(null);
                iVar = b11;
            } else {
                aVar2 = b11;
                b11 = b11.a();
            }
        }
        if (iVar == null) {
            iVar = d(child, obj, key, handler);
        }
        eVar3 = aVar.f7559b;
        eVar3.d(iVar);
        i iVar2 = iVar;
        iVar2.j(handler);
        return iVar2.i(child.b(), obj);
    }

    public final void c() {
        e eVar;
        e eVar2;
        e eVar3;
        e eVar4;
        cn.a aVar = this.f7603g;
        eVar = aVar.f7558a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            j.e(((i) b10).g(), null, 1, null);
        }
        eVar2 = aVar.f7558a;
        eVar3 = aVar.f7559b;
        aVar.f7558a = eVar3;
        aVar.f7559b = eVar2;
        eVar4 = aVar.f7559b;
        eVar4.a();
        this.f7597a = null;
    }

    public final Map f() {
        e eVar;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        eVar = this.f7603g.f7558a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            i iVar = (i) b10;
            linkedHashMap.put(iVar.d(), iVar.g().o(iVar.f().b()));
        }
        return linkedHashMap;
    }

    public final void g(ws.d selector) {
        e eVar;
        Intrinsics.checkNotNullParameter(selector, "selector");
        eVar = this.f7603g.f7558a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            ((i) b10).g().p(selector);
        }
    }
}
