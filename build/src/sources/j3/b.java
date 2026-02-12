package j3;

import android.os.Bundle;
import androidx.savedstate.SavedStateRegistry;
import as.v;
import bt.j0;
import bt.l0;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.MutableStateFlow;
import u3.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f30817a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f30818b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f30819c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f30820d;

    /* renamed from: e  reason: collision with root package name */
    private final SavedStateRegistry.b f30821e;

    public b(Map initialState) {
        Intrinsics.checkNotNullParameter(initialState, "initialState");
        this.f30817a = o0.y(initialState);
        this.f30818b = new LinkedHashMap();
        this.f30819c = new LinkedHashMap();
        this.f30820d = new LinkedHashMap();
        this.f30821e = new SavedStateRegistry.b() { // from class: j3.a
            @Override // androidx.savedstate.SavedStateRegistry.b
            public final Bundle a() {
                Bundle j10;
                j10 = b.j(b.this);
                return j10;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Bundle j(b bVar) {
        Pair[] pairArr;
        for (Map.Entry entry : o0.w(bVar.f30820d).entrySet()) {
            bVar.k((String) entry.getKey(), ((MutableStateFlow) entry.getValue()).getValue());
        }
        for (Map.Entry entry2 : o0.w(bVar.f30818b).entrySet()) {
            bVar.k((String) entry2.getKey(), ((SavedStateRegistry.b) entry2.getValue()).a());
        }
        Map map = bVar.f30817a;
        if (map.isEmpty()) {
            pairArr = new Pair[0];
        } else {
            ArrayList arrayList = new ArrayList(map.size());
            for (Map.Entry entry3 : map.entrySet()) {
                arrayList.add(v.a((String) entry3.getKey(), entry3.getValue()));
            }
            pairArr = (Pair[]) arrayList.toArray(new Pair[0]);
        }
        Bundle a10 = w1.c.a((Pair[]) Arrays.copyOf(pairArr, pairArr.length));
        g.a(a10);
        return a10;
    }

    public final Object b(String key) {
        Object value;
        Intrinsics.checkNotNullParameter(key, "key");
        try {
            MutableStateFlow mutableStateFlow = (MutableStateFlow) this.f30820d.get(key);
            if (mutableStateFlow != null && (value = mutableStateFlow.getValue()) != null) {
                return value;
            }
            return this.f30817a.get(key);
        } catch (ClassCastException unused) {
            i(key);
            return null;
        }
    }

    public final Map c() {
        return this.f30820d;
    }

    public final MutableStateFlow d(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        Map map = this.f30820d;
        Object obj2 = map.get(key);
        if (obj2 == null) {
            if (!this.f30817a.containsKey(key)) {
                this.f30817a.put(key, obj);
            }
            obj2 = l0.a(this.f30817a.get(key));
            map.put(key, obj2);
        }
        MutableStateFlow mutableStateFlow = (MutableStateFlow) obj2;
        Intrinsics.checkNotNull(mutableStateFlow, "null cannot be cast to non-null type kotlinx.coroutines.flow.MutableStateFlow<T of androidx.lifecycle.internal.SavedStateHandleImpl.getMutableStateFlow>");
        return mutableStateFlow;
    }

    public final Map e() {
        return this.f30817a;
    }

    public final SavedStateRegistry.b f() {
        return this.f30821e;
    }

    public final j0 g(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        Map map = this.f30819c;
        Object obj2 = map.get(key);
        if (obj2 == null) {
            if (!this.f30817a.containsKey(key)) {
                this.f30817a.put(key, obj);
            }
            obj2 = l0.a(this.f30817a.get(key));
            map.put(key, obj2);
        }
        j0 a10 = bt.g.a((MutableStateFlow) obj2);
        Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type kotlinx.coroutines.flow.StateFlow<T of androidx.lifecycle.internal.SavedStateHandleImpl.getStateFlow>");
        return a10;
    }

    public final Set h() {
        return x0.l(this.f30817a.keySet(), this.f30818b.keySet());
    }

    public final Object i(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        Object remove = this.f30817a.remove(key);
        this.f30819c.remove(key);
        this.f30820d.remove(key);
        return remove;
    }

    public final void k(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f30817a.put(key, obj);
        MutableStateFlow mutableStateFlow = (MutableStateFlow) this.f30819c.get(key);
        if (mutableStateFlow != null) {
            mutableStateFlow.setValue(obj);
        }
        MutableStateFlow mutableStateFlow2 = (MutableStateFlow) this.f30820d.get(key);
        if (mutableStateFlow2 != null) {
            mutableStateFlow2.setValue(obj);
        }
    }

    public /* synthetic */ b(Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map);
    }
}
