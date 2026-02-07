package gk;

import gk.a;
import gk.u;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s extends gk.a {

    /* renamed from: o  reason: collision with root package name */
    private static Map f25391o = new ConcurrentHashMap();

    /* renamed from: e  reason: collision with root package name */
    private int f25392e = -1;

    /* renamed from: i  reason: collision with root package name */
    protected e1 f25393i = e1.c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a extends a.AbstractC0338a {

        /* renamed from: d  reason: collision with root package name */
        private final s f25394d;

        /* renamed from: e  reason: collision with root package name */
        protected s f25395e;

        /* JADX INFO: Access modifiers changed from: protected */
        public a(s sVar) {
            this.f25394d = sVar;
            if (!sVar.t()) {
                this.f25395e = f();
                return;
            }
            throw new IllegalArgumentException("Default instance must be immutable.");
        }

        private s f() {
            return this.f25394d.y();
        }

        public final s b() {
            s s10 = s();
            if (s10.q()) {
                return s10;
            }
            throw a.AbstractC0338a.a(s10);
        }

        @Override // gk.i0.a
        /* renamed from: c */
        public s s() {
            if (!this.f25395e.t()) {
                return this.f25395e;
            }
            this.f25395e.u();
            return this.f25395e;
        }

        /* renamed from: d */
        public a clone() {
            a newBuilderForType = getDefaultInstanceForType().newBuilderForType();
            newBuilderForType.f25395e = s();
            return newBuilderForType;
        }

        @Override // gk.j0
        /* renamed from: e */
        public s getDefaultInstanceForType() {
            return this.f25394d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    protected static class b extends gk.b {

        /* renamed from: b  reason: collision with root package name */
        private final s f25396b;

        public b(s sVar) {
            this.f25396b = sVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends j {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d {
        GET_MEMOIZED_IS_INITIALIZED,
        SET_MEMOIZED_IS_INITIALIZED,
        BUILD_MESSAGE_INFO,
        NEW_MUTABLE_INSTANCE,
        NEW_BUILDER,
        GET_DEFAULT_INSTANCE,
        GET_PARSER
    }

    private static s A(s sVar, InputStream inputStream, l lVar) {
        try {
            int read = inputStream.read();
            if (read == -1) {
                return null;
            }
            g f10 = g.f(new a.AbstractC0338a.C0339a(inputStream, g.v(read, inputStream)));
            s B = B(sVar, f10, lVar);
            try {
                f10.a(0);
                return B;
            } catch (v e10) {
                throw e10.k(B);
            }
        } catch (v e11) {
            if (e11.a()) {
                throw new v(e11);
            }
            throw e11;
        } catch (IOException e12) {
            throw new v(e12);
        }
    }

    static s B(s sVar, g gVar, l lVar) {
        s y10 = sVar.y();
        try {
            x0 d10 = t0.a().d(y10);
            d10.g(y10, h.N(gVar), lVar);
            d10.b(y10);
            return y10;
        } catch (c1 e10) {
            throw e10.a().k(y10);
        } catch (v e11) {
            e = e11;
            if (e.a()) {
                e = new v(e);
            }
            throw e.k(y10);
        } catch (IOException e12) {
            if (e12.getCause() instanceof v) {
                throw ((v) e12.getCause());
            }
            throw new v(e12).k(y10);
        } catch (RuntimeException e13) {
            if (e13.getCause() instanceof v) {
                throw ((v) e13.getCause());
            }
            throw e13;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static void C(Class cls, s sVar) {
        sVar.v();
        f25391o.put(cls, sVar);
    }

    private static s c(s sVar) {
        if (sVar != null && !sVar.q()) {
            throw sVar.a().a().k(sVar);
        }
        return sVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static u.b k() {
        return u0.d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s l(Class cls) {
        s sVar = (s) f25391o.get(cls);
        if (sVar == null) {
            try {
                Class.forName(cls.getName(), true, cls.getClassLoader());
                sVar = (s) f25391o.get(cls);
            } catch (ClassNotFoundException e10) {
                throw new IllegalStateException("Class initialization cannot fail.", e10);
            }
        }
        if (sVar == null) {
            s defaultInstanceForType = ((s) h1.i(cls)).getDefaultInstanceForType();
            if (defaultInstanceForType != null) {
                f25391o.put(cls, defaultInstanceForType);
                return defaultInstanceForType;
            }
            throw new IllegalStateException();
        }
        return sVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object p(Method method, Object obj, Object... objArr) {
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

    protected static final boolean r(s sVar, boolean z10) {
        Object obj;
        byte byteValue = ((Byte) sVar.h(d.GET_MEMOIZED_IS_INITIALIZED)).byteValue();
        if (byteValue == 1) {
            return true;
        }
        if (byteValue == 0) {
            return false;
        }
        boolean c10 = t0.a().d(sVar).c(sVar);
        if (z10) {
            d dVar = d.SET_MEMOIZED_IS_INITIALIZED;
            if (c10) {
                obj = sVar;
            } else {
                obj = null;
            }
            sVar.i(dVar, obj);
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static Object x(i0 i0Var, String str, Object[] objArr) {
        return new v0(i0Var, str, objArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static s z(s sVar, InputStream inputStream) {
        return c(A(sVar, inputStream, l.b()));
    }

    void D(int i10) {
        this.f25227d = i10;
    }

    void E(int i10) {
        if (i10 >= 0) {
            this.f25392e = (i10 & Integer.MAX_VALUE) | (this.f25392e & Integer.MIN_VALUE);
            return;
        }
        throw new IllegalStateException("serialized size must be non-negative, was " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Object b() {
        return h(d.BUILD_MESSAGE_INFO);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d() {
        this.f25227d = 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e() {
        E(Integer.MAX_VALUE);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        return t0.a().d(this).f(this, (s) obj);
    }

    int f() {
        return t0.a().d(this).e(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final a g() {
        return (a) h(d.NEW_BUILDER);
    }

    protected Object h(d dVar) {
        return j(dVar, null, null);
    }

    public int hashCode() {
        if (t()) {
            return f();
        }
        if (o()) {
            D(f());
        }
        return n();
    }

    protected Object i(d dVar, Object obj) {
        return j(dVar, obj, null);
    }

    protected abstract Object j(d dVar, Object obj, Object obj2);

    @Override // gk.j0
    /* renamed from: m */
    public final s getDefaultInstanceForType() {
        return (s) h(d.GET_DEFAULT_INSTANCE);
    }

    int n() {
        return this.f25227d;
    }

    boolean o() {
        if (n() == 0) {
            return true;
        }
        return false;
    }

    public final boolean q() {
        return r(this, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean t() {
        if ((this.f25392e & Integer.MIN_VALUE) != 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return k0.f(this, super.toString());
    }

    protected void u() {
        t0.a().d(this).b(this);
        v();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v() {
        this.f25392e &= Integer.MAX_VALUE;
    }

    @Override // gk.i0
    /* renamed from: w */
    public final a newBuilderForType() {
        return (a) h(d.NEW_BUILDER);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s y() {
        return (s) h(d.NEW_MUTABLE_INSTANCE);
    }
}
