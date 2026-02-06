package j3;

import android.os.Bundle;
import androidx.savedstate.SavedStateRegistry;
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
import qr.v;
import rs.j0;
import rs.l0;
import u3.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f29714a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f29715b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f29716c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f29717d;

    /* renamed from: e  reason: collision with root package name */
    private final SavedStateRegistry.b f29718e;

    public b(Map initialState) {
        Intrinsics.checkNotNullParameter(initialState, "initialState");
        this.f29714a = o0.y(initialState);
        this.f29715b = new LinkedHashMap();
        this.f29716c = new LinkedHashMap();
        this.f29717d = new LinkedHashMap();
        this.f29718e = new SavedStateRegistry.b() { // from class: j3.a
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
        for (Map.Entry entry : o0.w(bVar.f29717d).entrySet()) {
            bVar.k((String) entry.getKey(), ((MutableStateFlow) entry.getValue()).getValue());
        }
        for (Map.Entry entry2 : o0.w(bVar.f29715b).entrySet()) {
            bVar.k((String) entry2.getKey(), ((SavedStateRegistry.b) entry2.getValue()).a());
        }
        Map map = bVar.f29714a;
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
            MutableStateFlow mutableStateFlow = (MutableStateFlow) this.f29717d.get(key);
            if (mutableStateFlow != null && (value = mutableStateFlow.getValue()) != null) {
                return value;
            }
            return this.f29714a.get(key);
        } catch (ClassCastException unused) {
            i(key);
            return null;
        }
    }

    public final Map c() {
        return this.f29717d;
    }

    public final MutableStateFlow d(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        Map map = this.f29717d;
        Object obj2 = map.get(key);
        if (obj2 == null) {
            if (!this.f29714a.containsKey(key)) {
                this.f29714a.put(key, obj);
            }
            obj2 = l0.a(this.f29714a.get(key));
            map.put(key, obj2);
        }
        MutableStateFlow mutableStateFlow = (MutableStateFlow) obj2;
        Intrinsics.checkNotNull(mutableStateFlow, "null cannot be cast to non-null type kotlinx.coroutines.flow.MutableStateFlow<T of androidx.lifecycle.internal.SavedStateHandleImpl.getMutableStateFlow>");
        return mutableStateFlow;
    }

    public final Map e() {
        return this.f29714a;
    }

    public final SavedStateRegistry.b f() {
        return this.f29718e;
    }

    public final j0 g(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        Map map = this.f29716c;
        Object obj2 = map.get(key);
        if (obj2 == null) {
            if (!this.f29714a.containsKey(key)) {
                this.f29714a.put(key, obj);
            }
            obj2 = l0.a(this.f29714a.get(key));
            map.put(key, obj2);
        }
        j0 a10 = rs.g.a((MutableStateFlow) obj2);
        Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type kotlinx.coroutines.flow.StateFlow<T of androidx.lifecycle.internal.SavedStateHandleImpl.getStateFlow>");
        return a10;
    }

    public final Set h() {
        return x0.l(this.f29714a.keySet(), this.f29715b.keySet());
    }

    public final Object i(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        Object remove = this.f29714a.remove(key);
        this.f29716c.remove(key);
        this.f29717d.remove(key);
        return remove;
    }

    public final void k(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f29714a.put(key, obj);
        MutableStateFlow mutableStateFlow = (MutableStateFlow) this.f29716c.get(key);
        if (mutableStateFlow != null) {
            mutableStateFlow.setValue(obj);
        }
        MutableStateFlow mutableStateFlow2 = (MutableStateFlow) this.f29717d.get(key);
        if (mutableStateFlow2 != null) {
            mutableStateFlow2.setValue(obj);
        }
    }

    public /* synthetic */ b(Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map);
    }
}
