package at;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class v implements s1 {

    /* renamed from: a  reason: collision with root package name */
    private final Function2 f6892a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f6893b;

    public v(Function2 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f6892a = compute;
        this.f6893b = new ConcurrentHashMap();
    }

    @Override // at.s1
    public Object a(KClass key, List types) {
        ConcurrentHashMap concurrentHashMap;
        Object b10;
        Object putIfAbsent;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(types, "types");
        ConcurrentHashMap concurrentHashMap2 = this.f6893b;
        Class b11 = vr.a.b(key);
        Object obj = concurrentHashMap2.get(b11);
        if (obj == null && (putIfAbsent = concurrentHashMap2.putIfAbsent(b11, (obj = new r1()))) != null) {
            obj = putIfAbsent;
        }
        r1 r1Var = (r1) obj;
        List<KType> list = types;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (KType kType : list) {
            arrayList.add(new r0(kType));
        }
        concurrentHashMap = r1Var.f6877a;
        Object obj2 = concurrentHashMap.get(arrayList);
        if (obj2 == null) {
            try {
                Result.a aVar = Result.f33295e;
                b10 = Result.b((KSerializer) this.f6892a.invoke(key, types));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f33295e;
                b10 = Result.b(kotlin.c.a(th2));
            }
            Result a10 = Result.a(b10);
            Object putIfAbsent2 = concurrentHashMap.putIfAbsent(arrayList, a10);
            if (putIfAbsent2 == null) {
                obj2 = a10;
            } else {
                obj2 = putIfAbsent2;
            }
        }
        Intrinsics.checkNotNullExpressionValue(obj2, "getOrPut(...)");
        return ((Result) obj2).j();
    }
}
