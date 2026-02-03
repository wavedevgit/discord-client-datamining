package jv;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import jv.e0;
import kotlin.coroutines.Continuation;
import okhttp3.Call;
import okhttp3.Response;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p extends b0 {

    /* renamed from: a  reason: collision with root package name */
    private final y f32465a;

    /* renamed from: b  reason: collision with root package name */
    private final Call.Factory f32466b;

    /* renamed from: c  reason: collision with root package name */
    private final h f32467c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends p {

        /* renamed from: d  reason: collision with root package name */
        private final e f32468d;

        a(y yVar, Call.Factory factory, h hVar, e eVar) {
            super(yVar, factory, hVar);
            this.f32468d = eVar;
        }

        @Override // jv.p
        protected Object c(d dVar, Object[] objArr) {
            return this.f32468d.b(dVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends p {

        /* renamed from: d  reason: collision with root package name */
        private final e f32469d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f32470e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f32471f;

        b(y yVar, Call.Factory factory, h hVar, e eVar, boolean z10, boolean z11) {
            super(yVar, factory, hVar);
            this.f32469d = eVar;
            this.f32470e = z10;
            this.f32471f = z11;
        }

        @Override // jv.p
        protected Object c(d dVar, Object[] objArr) {
            d dVar2 = (d) this.f32469d.b(dVar);
            Continuation continuation = (Continuation) objArr[objArr.length - 1];
            try {
                if (this.f32471f) {
                    return r.d(dVar2, continuation);
                }
                if (this.f32470e) {
                    return r.b(dVar2, continuation);
                }
                return r.a(dVar2, continuation);
            } catch (LinkageError e10) {
                e = e10;
                throw e;
            } catch (ThreadDeath e11) {
                e = e11;
                throw e;
            } catch (VirtualMachineError e12) {
                e = e12;
                throw e;
            } catch (Throwable th2) {
                return r.e(th2, continuation);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends p {

        /* renamed from: d  reason: collision with root package name */
        private final e f32472d;

        c(y yVar, Call.Factory factory, h hVar, e eVar) {
            super(yVar, factory, hVar);
            this.f32472d = eVar;
        }

        @Override // jv.p
        protected Object c(d dVar, Object[] objArr) {
            d dVar2 = (d) this.f32472d.b(dVar);
            Continuation continuation = (Continuation) objArr[objArr.length - 1];
            try {
                return r.c(dVar2, continuation);
            } catch (Exception e10) {
                return r.e(e10, continuation);
            }
        }
    }

    p(y yVar, Call.Factory factory, h hVar) {
        this.f32465a = yVar;
        this.f32466b = factory;
        this.f32467c = hVar;
    }

    private static e d(a0 a0Var, Method method, Type type, Annotation[] annotationArr) {
        try {
            return a0Var.a(type, annotationArr);
        } catch (RuntimeException e10) {
            throw e0.o(method, e10, "Unable to create call adapter for %s", type);
        }
    }

    private static h e(a0 a0Var, Method method, Type type) {
        try {
            return a0Var.i(type, method.getAnnotations());
        } catch (RuntimeException e10) {
            throw e0.o(method, e10, "Unable to create converter for %s", type);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static p f(a0 a0Var, Method method, y yVar) {
        Type genericReturnType;
        boolean z10;
        boolean z11;
        boolean m10;
        boolean z12 = yVar.f32582l;
        Annotation[] annotations = method.getAnnotations();
        if (z12) {
            Type[] genericParameterTypes = method.getGenericParameterTypes();
            Type f10 = e0.f(0, (ParameterizedType) genericParameterTypes[genericParameterTypes.length - 1]);
            if (e0.h(f10) == z.class && (f10 instanceof ParameterizedType)) {
                f10 = e0.g(0, (ParameterizedType) f10);
                m10 = false;
                z10 = true;
            } else if (e0.h(f10) != d.class) {
                m10 = e0.m(f10);
                z10 = false;
            } else {
                throw e0.n(method, "Suspend functions should not return Call, as they already execute asynchronously.\nChange its return type to %s", e0.g(0, (ParameterizedType) f10));
            }
            genericReturnType = new e0.b(null, d.class, f10);
            annotations = d0.a(annotations);
            z11 = m10;
        } else {
            genericReturnType = method.getGenericReturnType();
            z10 = false;
            z11 = false;
        }
        e d10 = d(a0Var, method, genericReturnType, annotations);
        Type a10 = d10.a();
        if (a10 != Response.class) {
            if (a10 != z.class) {
                if (yVar.f32574d.equals("HEAD") && !Void.class.equals(a10) && !e0.m(a10)) {
                    throw e0.n(method, "HEAD method must use Void or Unit as response type.", new Object[0]);
                }
                h e10 = e(a0Var, method, a10);
                Call.Factory factory = a0Var.f32408b;
                if (!z12) {
                    return new a(yVar, factory, e10, d10);
                }
                if (z10) {
                    return new c(yVar, factory, e10, d10);
                }
                return new b(yVar, factory, e10, d10, false, z11);
            }
            throw e0.n(method, "Response must include generic type (e.g., Response<String>)", new Object[0]);
        }
        throw e0.n(method, "'" + e0.h(a10).getName() + "' is not a valid response body type. Did you mean ResponseBody?", new Object[0]);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // jv.b0
    public final Object a(Object obj, Object[] objArr) {
        return c(new s(this.f32465a, obj, objArr, this.f32466b, this.f32467c), objArr);
    }

    protected abstract Object c(d dVar, Object[] objArr);
}
