package fn;

import en.q;
import en.t;
import en.w;
import fn.e;
import fn.f;
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
    private Map f23893a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineContext f23894b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f23895c;

    /* renamed from: d  reason: collision with root package name */
    private final t.c f23896d;

    /* renamed from: e  reason: collision with root package name */
    private final t f23897e;

    /* renamed from: f  reason: collision with root package name */
    private final d f23898f;

    /* renamed from: g  reason: collision with root package name */
    private fn.a f23899g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f23900d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f23901e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Ref.ObjectRef objectRef, h hVar) {
            super(1, Intrinsics.Kotlin.class, "acceptChildOutput", "createChildNode$acceptChildOutput(Lkotlin/jvm/internal/Ref$ObjectRef;Lcom/squareup/workflow1/internal/SubtreeManager;Ljava/lang/Object;)Ljava/lang/Object;", 0);
            this.f23900d = objectRef;
            this.f23901e = hVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            return h.e(this.f23900d, this.f23901e, obj);
        }
    }

    public h(Map map, CoroutineContext contextForChildren, Function1 emitActionToParent, t.c cVar, t interceptor, d dVar) {
        Intrinsics.checkNotNullParameter(contextForChildren, "contextForChildren");
        Intrinsics.checkNotNullParameter(emitActionToParent, "emitActionToParent");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f23893a = map;
        this.f23894b = contextForChildren;
        this.f23895c = emitActionToParent;
        this.f23896d = cVar;
        this.f23897e = interceptor;
        this.f23898f = dVar;
        this.f23899g = new fn.a();
    }

    /* JADX WARN: Type inference failed for: r12v1, types: [fn.i, T] */
    private final i d(q qVar, Object obj, String str, Function1 function1) {
        en.m mVar;
        k a10 = l.a(qVar, str);
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        Map map = this.f23893a;
        if (map == null) {
            mVar = null;
        } else {
            mVar = (en.m) map.get(a10);
        }
        ?? iVar = new i(qVar, function1, new j(a10, qVar.b(), obj, mVar, this.f23894b, new a(objectRef, this), this.f23896d, this.f23897e, this.f23898f));
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
        return hVar.f23895c.invoke(iVar.c(obj));
    }

    @Override // fn.f.a
    public Object a(q child, Object obj, String key, Function1 handler) {
        e eVar;
        e eVar2;
        e eVar3;
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        eVar = this.f23899g.f23855b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            if (((i) b10).h(child, key)) {
                throw new IllegalArgumentException(("Expected keys to be unique for " + w.j(child) + ": key=\"" + key + '\"').toString());
            }
        }
        fn.a aVar = this.f23899g;
        eVar2 = aVar.f23854a;
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
        eVar3 = aVar.f23855b;
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
        fn.a aVar = this.f23899g;
        eVar = aVar.f23854a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            j.e(((i) b10).g(), null, 1, null);
        }
        eVar2 = aVar.f23854a;
        eVar3 = aVar.f23855b;
        aVar.f23854a = eVar3;
        aVar.f23855b = eVar2;
        eVar4 = aVar.f23855b;
        eVar4.a();
        this.f23893a = null;
    }

    public final Map f() {
        e eVar;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        eVar = this.f23899g.f23854a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            i iVar = (i) b10;
            linkedHashMap.put(iVar.d(), iVar.g().o(iVar.f().b()));
        }
        return linkedHashMap;
    }

    public final void g(gt.d selector) {
        e eVar;
        Intrinsics.checkNotNullParameter(selector, "selector");
        eVar = this.f23899g.f23854a;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            ((i) b10).g().p(selector);
        }
    }
}
