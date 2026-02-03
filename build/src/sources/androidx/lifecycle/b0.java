package androidx.lifecycle;

import android.os.Bundle;
import androidx.savedstate.SavedStateRegistry;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a f4505c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f4506a;

    /* renamed from: b  reason: collision with root package name */
    private j3.b f4507b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b0 a(Bundle bundle, Bundle bundle2) {
            if (bundle == null) {
                bundle = bundle2;
            }
            if (bundle == null) {
                return new b0();
            }
            ClassLoader classLoader = b0.class.getClassLoader();
            Intrinsics.checkNotNull(classLoader);
            bundle.setClassLoader(classLoader);
            return new b0(u3.b.g(u3.b.a(bundle)));
        }

        public final boolean b(Object obj) {
            return j3.c.a(obj);
        }

        private a() {
        }
    }

    public b0(Map initialState) {
        Intrinsics.checkNotNullParameter(initialState, "initialState");
        this.f4506a = new LinkedHashMap();
        this.f4507b = new j3.b(initialState);
    }

    private final MutableLiveData d(String str, boolean z10, Object obj) {
        String b10;
        b bVar;
        if (this.f4507b.c().containsKey(str)) {
            b10 = f0.b(str);
            throw new IllegalArgumentException(b10.toString());
        }
        Map map = this.f4506a;
        Object obj2 = map.get(str);
        if (obj2 == null) {
            if (this.f4507b.e().containsKey(str)) {
                bVar = new b(this, str, this.f4507b.e().get(str));
            } else if (z10) {
                this.f4507b.e().put(str, obj);
                bVar = new b(this, str, obj);
            } else {
                bVar = new b(this, str);
            }
            obj2 = bVar;
            map.put(str, obj2);
        }
        return (b) obj2;
    }

    public final Object b(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return this.f4507b.b(key);
    }

    public final MutableLiveData c(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        return d(key, true, obj);
    }

    public final ks.j0 e(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f4507b.c().containsKey(key)) {
            return ks.g.a(this.f4507b.d(key, obj));
        }
        return this.f4507b.g(key, obj);
    }

    public final Set f() {
        return x0.l(this.f4507b.h(), this.f4506a.keySet());
    }

    public final SavedStateRegistry.b g() {
        return this.f4507b.f();
    }

    public final void h(String key, Object obj) {
        MutableLiveData mutableLiveData;
        Intrinsics.checkNotNullParameter(key, "key");
        if (f4505c.b(obj)) {
            Object obj2 = this.f4506a.get(key);
            if (obj2 instanceof MutableLiveData) {
                mutableLiveData = (MutableLiveData) obj2;
            } else {
                mutableLiveData = null;
            }
            if (mutableLiveData != null) {
                mutableLiveData.o(obj);
            }
            this.f4507b.k(key, obj);
            return;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Can't put value with type ");
        Intrinsics.checkNotNull(obj);
        sb2.append(obj.getClass());
        sb2.append(" into saved state");
        throw new IllegalArgumentException(sb2.toString().toString());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends MutableLiveData {

        /* renamed from: l  reason: collision with root package name */
        private String f4508l;

        /* renamed from: m  reason: collision with root package name */
        private b0 f4509m;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(b0 b0Var, String key, Object obj) {
            super(obj);
            Intrinsics.checkNotNullParameter(key, "key");
            this.f4508l = key;
            this.f4509m = b0Var;
        }

        @Override // androidx.lifecycle.MutableLiveData, androidx.lifecycle.LiveData
        public void o(Object obj) {
            j3.b bVar;
            b0 b0Var = this.f4509m;
            if (b0Var != null && (bVar = b0Var.f4507b) != null) {
                bVar.k(this.f4508l, obj);
            }
            super.o(obj);
        }

        public b(b0 b0Var, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.f4508l = key;
            this.f4509m = b0Var;
        }
    }

    public b0() {
        this.f4506a = new LinkedHashMap();
        this.f4507b = new j3.b(null, 1, null);
    }
}
