package br;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private final b f7215a;

    public a(b operations) {
        Intrinsics.checkNotNullParameter(operations, "operations");
        this.f7215a = operations;
    }

    private final Object b(Object obj, Object obj2) {
        if (obj instanceof List) {
            Iterable<Object> iterable = (Iterable) obj;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(iterable, 10));
            for (Object obj3 : iterable) {
                arrayList.add(b(obj3, obj2));
            }
            return arrayList;
        } else if (!(obj instanceof Map)) {
            return obj;
        } else {
            Map map = (Map) obj;
            if (map.isEmpty()) {
                return obj2;
            }
            return c(map, obj2);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v10, types: [java.lang.Object] */
    /* JADX WARN: Type inference failed for: r1v12, types: [java.util.Collection, java.util.ArrayList] */
    /* JADX WARN: Type inference failed for: r1v9, types: [java.lang.Object] */
    private final Object c(Map map, Object obj) {
        Object b10;
        Object p02 = CollectionsKt.p0(map.keySet());
        Object obj2 = map.get(p02);
        if (CollectionsKt.d0(this.f7215a.a().keySet(), p02)) {
            qu.a aVar = (qu.a) this.f7215a.a().get(p02);
            if (aVar != null) {
                return aVar.d(obj2, obj, this);
            }
            return null;
        }
        qu.b d10 = d(this.f7215a.b(), p02);
        if (obj2 instanceof List) {
            Iterable<Object> iterable = (Iterable) obj2;
            b10 = new ArrayList(CollectionsKt.w(iterable, 10));
            for (Object obj3 : iterable) {
                b10.add(b(obj3, obj));
            }
        } else if (obj2 instanceof Map) {
            b10 = b(obj2, obj);
        } else {
            b10 = b(obj2, obj);
        }
        return d10.f(b10, obj);
    }

    private final qu.b d(Map map, Object obj) {
        qu.b bVar = (qu.b) map.get(obj);
        if (bVar != null) {
            return bVar;
        }
        throw new f("Operation " + obj + " not found.");
    }

    @Override // defpackage.h
    public Object a(Map expression, Object obj) {
        Intrinsics.checkNotNullParameter(expression, "expression");
        return b(expression, obj);
    }
}
