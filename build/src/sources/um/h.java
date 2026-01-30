package um;

import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import tm.q;
import tm.t;
import tm.w;
import um.e;
import um.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements f.a {

    /* renamed from: a  reason: collision with root package name */
    private Map f50442a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineContext f50443b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f50444c;

    /* renamed from: d  reason: collision with root package name */
    private final t.c f50445d;

    /* renamed from: e  reason: collision with root package name */
    private final t f50446e;

    /* renamed from: f  reason: collision with root package name */
    private final d f50447f;

    /* renamed from: g  reason: collision with root package name */
    private um.a f50448g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f50449d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f50450e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Ref.ObjectRef objectRef, h hVar) {
            super(1, Intrinsics.Kotlin.class, "acceptChildOutput", "createChildNode$acceptChildOutput(Lkotlin/jvm/internal/Ref$ObjectRef;Lcom/squareup/workflow1/internal/SubtreeManager;Ljava/lang/Object;)Ljava/lang/Object;", 0);
            this.f50449d = objectRef;
            this.f50450e = hVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            return h.e(this.f50449d, this.f50450e, obj);
        }
    }

    public h(Map map, CoroutineContext contextForChildren, Function1 emitActionToParent, t.c cVar, t interceptor, d dVar) {
        Intrinsics.checkNotNullParameter(contextForChildren, "contextForChildren");
        Intrinsics.checkNotNullParameter(emitActionToParent, "emitActionToParent");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f50442a = map;
        this.f50443b = contextForChildren;
        this.f50444c = emitActionToParent;
        this.f50445d = cVar;
        this.f50446e = interceptor;
        this.f50447f = dVar;
        this.f50448g = new um.a();
    }

    /* JADX WARN: Type inference failed for: r12v1, types: [T, um.i] */
    private final i d(q qVar, Object obj, String str, Function1 function1) {
        tm.m mVar;
        k a10 = l.a(qVar, str);
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        Map map = this.f50442a;
        if (map == null) {
            mVar = null;
        } else {
            mVar = (tm.m) map.get(a10);
        }
        ?? iVar = new i(qVar, function1, new j(a10, qVar.b(), obj, mVar, this.f50443b, new a(objectRef, this), this.f50445d, this.f50446e, this.f50447f));
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
        return hVar.f50444c.invoke(iVar.c(obj));
    }

    @Override // um.f.a
    public Object a(q child, Object obj, String key, Function1 handler) {
        e eVar;
        e eVar2;
        e eVar3;
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        eVar = this.f50448g.f50404b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            if (((i) b10).h(child, key)) {
                throw new IllegalArgumentException(("Expected keys to be unique for " + w.j(child) + ": key=\"" + key + '\"').toString());
            }
        }
        um.a aVar = this.f50448g;
        eVar2 = aVar.f50403a;
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
        eVar3 = aVar.f50404b;
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
        um.a aVar = this.f50448g;
        eVar = aVar.f50403a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            j.e(((i) b10).g(), null, 1, null);
        }
        eVar2 = aVar.f50403a;
        eVar3 = aVar.f50404b;
        aVar.f50403a = eVar3;
        aVar.f50404b = eVar2;
        eVar4 = aVar.f50404b;
        eVar4.a();
        this.f50442a = null;
    }

    public final Map f() {
        e eVar;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        eVar = this.f50448g.f50403a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            i iVar = (i) b10;
            linkedHashMap.put(iVar.d(), iVar.g().n(iVar.f().b()));
        }
        return linkedHashMap;
    }

    public final void g(os.d selector) {
        e eVar;
        Intrinsics.checkNotNullParameter(selector, "selector");
        eVar = this.f50448g.f50403a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            ((i) b10).g().o(selector);
        }
    }
}
