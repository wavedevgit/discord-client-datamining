package jt;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements s1 {

    /* renamed from: a  reason: collision with root package name */
    private final Function2 f31112a;

    /* renamed from: b  reason: collision with root package name */
    private final r f31113b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Function0 {
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return new r1();
        }
    }

    public q(Function2 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f31112a = compute;
        this.f31113b = new r();
    }

    @Override // jt.s1
    public Object a(KClass key, List types) {
        ConcurrentHashMap concurrentHashMap;
        Object b10;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(types, "types");
        Object obj = this.f31113b.get(ds.a.b(key));
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        e1 e1Var = (e1) obj;
        Object obj2 = e1Var.f31039a.get();
        if (obj2 == null) {
            obj2 = e1Var.a(new a());
        }
        r1 r1Var = (r1) obj2;
        List<KType> list = types;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (KType kType : list) {
            arrayList.add(new r0(kType));
        }
        concurrentHashMap = r1Var.f31118a;
        Object obj3 = concurrentHashMap.get(arrayList);
        if (obj3 == null) {
            try {
                Result.a aVar = Result.f32053e;
                b10 = Result.b((KSerializer) this.f31112a.invoke(key, types));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f32053e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            Result a10 = Result.a(b10);
            Object putIfAbsent = concurrentHashMap.putIfAbsent(arrayList, a10);
            if (putIfAbsent == null) {
                obj3 = a10;
            } else {
                obj3 = putIfAbsent;
            }
        }
        Intrinsics.checkNotNullExpressionValue(obj3, "getOrPut(...)");
        return ((Result) obj3).j();
    }
}
