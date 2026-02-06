package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.a;
import androidx.datastore.preferences.protobuf.y;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class w extends androidx.datastore.preferences.protobuf.a {
    private static Map<Object, w> defaultInstanceMap = new ConcurrentHashMap();
    protected l1 unknownFields = l1.e();
    protected int memoizedSerializedSize = -1;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a extends a.AbstractC0042a {

        /* renamed from: d  reason: collision with root package name */
        private final w f4284d;

        /* renamed from: e  reason: collision with root package name */
        protected w f4285e;

        /* renamed from: i  reason: collision with root package name */
        protected boolean f4286i = false;

        /* JADX INFO: Access modifiers changed from: protected */
        public a(w wVar) {
            this.f4284d = wVar;
            this.f4285e = (w) wVar.k(d.NEW_MUTABLE_INSTANCE);
        }

        private void o(w wVar, w wVar2) {
            z0.a().d(wVar).a(wVar, wVar2);
        }

        public final w h() {
            w s10 = s();
            if (s10.r()) {
                return s10;
            }
            throw a.AbstractC0042a.f(s10);
        }

        @Override // androidx.datastore.preferences.protobuf.o0.a
        /* renamed from: i */
        public w s() {
            if (this.f4286i) {
                return this.f4285e;
            }
            this.f4285e.u();
            this.f4286i = true;
            return this.f4285e;
        }

        /* renamed from: j */
        public a clone() {
            a newBuilderForType = getDefaultInstanceForType().newBuilderForType();
            newBuilderForType.n(s());
            return newBuilderForType;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public void k() {
            if (this.f4286i) {
                w wVar = (w) this.f4285e.k(d.NEW_MUTABLE_INSTANCE);
                o(wVar, this.f4285e);
                this.f4285e = wVar;
                this.f4286i = false;
            }
        }

        @Override // androidx.datastore.preferences.protobuf.p0
        /* renamed from: l */
        public w getDefaultInstanceForType() {
            return this.f4284d;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.datastore.preferences.protobuf.a.AbstractC0042a
        /* renamed from: m */
        public a d(w wVar) {
            return n(wVar);
        }

        public a n(w wVar) {
            k();
            o(this.f4285e, wVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    protected static class b extends androidx.datastore.preferences.protobuf.b {

        /* renamed from: b  reason: collision with root package name */
        private final w f4287b;

        public b(w wVar) {
            this.f4287b = wVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends m {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum d {
        GET_MEMOIZED_IS_INITIALIZED,
        SET_MEMOIZED_IS_INITIALIZED,
        BUILD_MESSAGE_INFO,
        NEW_MUTABLE_INSTANCE,
        NEW_BUILDER,
        GET_DEFAULT_INSTANCE,
        GET_PARSER
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static void A(Class cls, w wVar) {
        defaultInstanceMap.put(cls, wVar);
    }

    private static w i(w wVar) {
        if (wVar != null && !wVar.r()) {
            throw wVar.e().a().i(wVar);
        }
        return wVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static y.b n() {
        return a1.d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static w o(Class cls) {
        w wVar = defaultInstanceMap.get(cls);
        if (wVar == null) {
            try {
                Class.forName(cls.getName(), true, cls.getClassLoader());
                wVar = defaultInstanceMap.get(cls);
            } catch (ClassNotFoundException e10) {
                throw new IllegalStateException("Class initialization cannot fail.", e10);
            }
        }
        if (wVar == null) {
            w defaultInstanceForType = ((w) o1.i(cls)).getDefaultInstanceForType();
            if (defaultInstanceForType != null) {
                defaultInstanceMap.put(cls, defaultInstanceForType);
                return defaultInstanceForType;
            }
            throw new IllegalStateException();
        }
        return wVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object q(Method method, Object obj, Object... objArr) {
        try {
            return method.invoke(obj, objArr);
        } catch (IllegalAccessException e10) {
            throw new RuntimeException("Couldn't use Java reflection to implement protocol message reflection.", e10);
        } catch (InvocationTargetException e11) {
            Throwable cause = e11.getCause();
            if (!(cause instanceof RuntimeException)) {
                if (cause instanceof Error) {
                    throw ((Error) cause);
                }
                throw new RuntimeException("Unexpected exception thrown by generated accessor method.", cause);
            }
            throw ((RuntimeException) cause);
        }
    }

    protected static final boolean t(w wVar, boolean z10) {
        Object obj;
        byte byteValue = ((Byte) wVar.k(d.GET_MEMOIZED_IS_INITIALIZED)).byteValue();
        if (byteValue == 1) {
            return true;
        }
        if (byteValue == 0) {
            return false;
        }
        boolean c10 = z0.a().d(wVar).c(wVar);
        if (z10) {
            d dVar = d.SET_MEMOIZED_IS_INITIALIZED;
            if (c10) {
                obj = wVar;
            } else {
                obj = null;
            }
            wVar.l(dVar, obj);
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static y.b v(y.b bVar) {
        int i10;
        int size = bVar.size();
        if (size == 0) {
            i10 = 10;
        } else {
            i10 = size * 2;
        }
        return bVar.z(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static Object x(o0 o0Var, String str, Object[] objArr) {
        return new b1(o0Var, str, objArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static w y(w wVar, InputStream inputStream) {
        return i(z(wVar, h.f(inputStream), o.b()));
    }

    static w z(w wVar, h hVar, o oVar) {
        w wVar2 = (w) wVar.k(d.NEW_MUTABLE_INSTANCE);
        try {
            d1 d10 = z0.a().d(wVar2);
            d10.g(wVar2, i.N(hVar), oVar);
            d10.b(wVar2);
            return wVar2;
        } catch (IOException e10) {
            if (e10.getCause() instanceof z) {
                throw ((z) e10.getCause());
            }
            throw new z(e10.getMessage()).i(wVar2);
        } catch (RuntimeException e11) {
            if (e11.getCause() instanceof z) {
                throw ((z) e11.getCause());
            }
            throw e11;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.o0
    /* renamed from: B */
    public final a toBuilder() {
        a aVar = (a) k(d.NEW_BUILDER);
        aVar.n(this);
        return aVar;
    }

    @Override // androidx.datastore.preferences.protobuf.o0
    public void a(j jVar) {
        z0.a().d(this).i(this, k.P(jVar));
    }

    @Override // androidx.datastore.preferences.protobuf.a
    int c() {
        return this.memoizedSerializedSize;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!getDefaultInstanceForType().getClass().isInstance(obj)) {
            return false;
        }
        return z0.a().d(this).f(this, (w) obj);
    }

    @Override // androidx.datastore.preferences.protobuf.a
    void f(int i10) {
        this.memoizedSerializedSize = i10;
    }

    @Override // androidx.datastore.preferences.protobuf.o0
    public int getSerializedSize() {
        if (this.memoizedSerializedSize == -1) {
            this.memoizedSerializedSize = z0.a().d(this).h(this);
        }
        return this.memoizedSerializedSize;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Object h() {
        return k(d.BUILD_MESSAGE_INFO);
    }

    public int hashCode() {
        int i10 = this.memoizedHashCode;
        if (i10 != 0) {
            return i10;
        }
        int e10 = z0.a().d(this).e(this);
        this.memoizedHashCode = e10;
        return e10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final a j() {
        return (a) k(d.NEW_BUILDER);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Object k(d dVar) {
        return m(dVar, null, null);
    }

    protected Object l(d dVar, Object obj) {
        return m(dVar, obj, null);
    }

    protected abstract Object m(d dVar, Object obj, Object obj2);

    @Override // androidx.datastore.preferences.protobuf.p0
    /* renamed from: p */
    public final w getDefaultInstanceForType() {
        return (w) k(d.GET_DEFAULT_INSTANCE);
    }

    public final boolean r() {
        return t(this, true);
    }

    public String toString() {
        return q0.e(this, super.toString());
    }

    protected void u() {
        z0.a().d(this).b(this);
    }

    @Override // androidx.datastore.preferences.protobuf.o0
    /* renamed from: w */
    public final a newBuilderForType() {
        return (a) k(d.NEW_BUILDER);
    }
}
