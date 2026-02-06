package vv;

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.lang.reflect.Proxy;
import java.lang.reflect.Type;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executor;
import okhttp3.Call;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import vv.b;
import vv.e;
import vv.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final ConcurrentHashMap f52998a = new ConcurrentHashMap();

    /* renamed from: b  reason: collision with root package name */
    final Call.Factory f52999b;

    /* renamed from: c  reason: collision with root package name */
    final HttpUrl f53000c;

    /* renamed from: d  reason: collision with root package name */
    final List f53001d;

    /* renamed from: e  reason: collision with root package name */
    final int f53002e;

    /* renamed from: f  reason: collision with root package name */
    final List f53003f;

    /* renamed from: g  reason: collision with root package name */
    final int f53004g;

    /* renamed from: h  reason: collision with root package name */
    final Executor f53005h;

    /* renamed from: i  reason: collision with root package name */
    final boolean f53006i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements InvocationHandler {

        /* renamed from: a  reason: collision with root package name */
        private final Object[] f53007a = new Object[0];

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f53008b;

        a(Class cls) {
            this.f53008b = cls;
        }

        @Override // java.lang.reflect.InvocationHandler
        public Object invoke(Object obj, Method method, Object[] objArr) {
            if (method.getDeclaringClass() == Object.class) {
                return method.invoke(this, objArr);
            }
            if (objArr == null) {
                objArr = this.f53007a;
            }
            w wVar = v.f53145b;
            if (wVar.c(method)) {
                return wVar.b(method, this.f53008b, obj, objArr);
            }
            return a0.this.c(this.f53008b, method).a(obj, objArr);
        }
    }

    a0(Call.Factory factory, HttpUrl httpUrl, List list, int i10, List list2, int i11, Executor executor, boolean z10) {
        this.f52999b = factory;
        this.f53000c = httpUrl;
        this.f53001d = list;
        this.f53002e = i10;
        this.f53003f = list2;
        this.f53004g = i11;
        this.f53005h = executor;
        this.f53006i = z10;
    }

    private void k(Class cls) {
        Method[] declaredMethods;
        if (cls.isInterface()) {
            ArrayDeque arrayDeque = new ArrayDeque(1);
            arrayDeque.add(cls);
            while (!arrayDeque.isEmpty()) {
                Class cls2 = (Class) arrayDeque.removeFirst();
                if (cls2.getTypeParameters().length != 0) {
                    StringBuilder sb2 = new StringBuilder("Type parameters are unsupported on ");
                    sb2.append(cls2.getName());
                    if (cls2 != cls) {
                        sb2.append(" which is an interface of ");
                        sb2.append(cls.getName());
                    }
                    throw new IllegalArgumentException(sb2.toString());
                }
                Collections.addAll(arrayDeque, cls2.getInterfaces());
            }
            if (this.f53006i) {
                w wVar = v.f53145b;
                for (Method method : cls.getDeclaredMethods()) {
                    if (!wVar.c(method) && !Modifier.isStatic(method.getModifiers()) && !method.isSynthetic()) {
                        c(cls, method);
                    }
                }
                return;
            }
            return;
        }
        throw new IllegalArgumentException("API declarations must be interfaces.");
    }

    public e a(Type type, Annotation[] annotationArr) {
        return e(null, type, annotationArr);
    }

    public Object b(Class cls) {
        k(cls);
        return Proxy.newProxyInstance(cls.getClassLoader(), new Class[]{cls}, new a(cls));
    }

    b0 c(Class cls, Method method) {
        while (true) {
            Object obj = this.f52998a.get(method);
            if (obj instanceof b0) {
                return (b0) obj;
            }
            if (obj == null) {
                Object obj2 = new Object();
                synchronized (obj2) {
                    try {
                        obj = this.f52998a.putIfAbsent(method, obj2);
                        if (obj == null) {
                            b0 b10 = b0.b(this, cls, method);
                            this.f52998a.put(method, b10);
                            return b10;
                        }
                    } finally {
                    }
                }
            }
            synchronized (obj) {
                try {
                    Object obj3 = this.f52998a.get(method);
                    if (obj3 != null) {
                        return (b0) obj3;
                    }
                } finally {
                }
            }
        }
    }

    public b d() {
        return new b(this);
    }

    public e e(e.a aVar, Type type, Annotation[] annotationArr) {
        Objects.requireNonNull(type, "returnType == null");
        Objects.requireNonNull(annotationArr, "annotations == null");
        int indexOf = this.f53003f.indexOf(aVar) + 1;
        int size = this.f53003f.size();
        for (int i10 = indexOf; i10 < size; i10++) {
            e a10 = ((e.a) this.f53003f.get(i10)).a(type, annotationArr, this);
            if (a10 != null) {
                return a10;
            }
        }
        StringBuilder sb2 = new StringBuilder("Could not locate call adapter for ");
        sb2.append(type);
        sb2.append(".\n");
        if (aVar != null) {
            sb2.append("  Skipped:");
            for (int i11 = 0; i11 < indexOf; i11++) {
                sb2.append("\n   * ");
                sb2.append(((e.a) this.f53003f.get(i11)).getClass().getName());
            }
            sb2.append('\n');
        }
        sb2.append("  Tried:");
        int size2 = this.f53003f.size();
        while (indexOf < size2) {
            sb2.append("\n   * ");
            sb2.append(((e.a) this.f53003f.get(indexOf)).getClass().getName());
            indexOf++;
        }
        throw new IllegalArgumentException(sb2.toString());
    }

    public h f(h.a aVar, Type type, Annotation[] annotationArr, Annotation[] annotationArr2) {
        Objects.requireNonNull(type, "type == null");
        Objects.requireNonNull(annotationArr, "parameterAnnotations == null");
        Objects.requireNonNull(annotationArr2, "methodAnnotations == null");
        int indexOf = this.f53001d.indexOf(aVar) + 1;
        int size = this.f53001d.size();
        for (int i10 = indexOf; i10 < size; i10++) {
            h c10 = ((h.a) this.f53001d.get(i10)).c(type, annotationArr, annotationArr2, this);
            if (c10 != null) {
                return c10;
            }
        }
        StringBuilder sb2 = new StringBuilder("Could not locate RequestBody converter for ");
        sb2.append(type);
        sb2.append(".\n");
        if (aVar != null) {
            sb2.append("  Skipped:");
            for (int i11 = 0; i11 < indexOf; i11++) {
                sb2.append("\n   * ");
                sb2.append(((h.a) this.f53001d.get(i11)).getClass().getName());
            }
            sb2.append('\n');
        }
        sb2.append("  Tried:");
        int size2 = this.f53001d.size();
        while (indexOf < size2) {
            sb2.append("\n   * ");
            sb2.append(((h.a) this.f53001d.get(indexOf)).getClass().getName());
            indexOf++;
        }
        throw new IllegalArgumentException(sb2.toString());
    }

    public h g(h.a aVar, Type type, Annotation[] annotationArr) {
        Objects.requireNonNull(type, "type == null");
        Objects.requireNonNull(annotationArr, "annotations == null");
        int indexOf = this.f53001d.indexOf(aVar) + 1;
        int size = this.f53001d.size();
        for (int i10 = indexOf; i10 < size; i10++) {
            h d10 = ((h.a) this.f53001d.get(i10)).d(type, annotationArr, this);
            if (d10 != null) {
                return d10;
            }
        }
        StringBuilder sb2 = new StringBuilder("Could not locate ResponseBody converter for ");
        sb2.append(type);
        sb2.append(".\n");
        if (aVar != null) {
            sb2.append("  Skipped:");
            for (int i11 = 0; i11 < indexOf; i11++) {
                sb2.append("\n   * ");
                sb2.append(((h.a) this.f53001d.get(i11)).getClass().getName());
            }
            sb2.append('\n');
        }
        sb2.append("  Tried:");
        int size2 = this.f53001d.size();
        while (indexOf < size2) {
            sb2.append("\n   * ");
            sb2.append(((h.a) this.f53001d.get(indexOf)).getClass().getName());
            indexOf++;
        }
        throw new IllegalArgumentException(sb2.toString());
    }

    public h h(Type type, Annotation[] annotationArr, Annotation[] annotationArr2) {
        return f(null, type, annotationArr, annotationArr2);
    }

    public h i(Type type, Annotation[] annotationArr) {
        return g(null, type, annotationArr);
    }

    public h j(Type type, Annotation[] annotationArr) {
        Objects.requireNonNull(type, "type == null");
        Objects.requireNonNull(annotationArr, "annotations == null");
        int size = this.f53001d.size();
        for (int i10 = 0; i10 < size; i10++) {
            h e10 = ((h.a) this.f53001d.get(i10)).e(type, annotationArr, this);
            if (e10 != null) {
                return e10;
            }
        }
        return b.d.f53019a;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Call.Factory f53010a;

        /* renamed from: b  reason: collision with root package name */
        private HttpUrl f53011b;

        /* renamed from: c  reason: collision with root package name */
        private final List f53012c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private final List f53013d = new ArrayList();

        /* renamed from: e  reason: collision with root package name */
        private Executor f53014e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f53015f;

        public b() {
        }

        public b a(h.a aVar) {
            List list = this.f53012c;
            Objects.requireNonNull(aVar, "factory == null");
            list.add(aVar);
            return this;
        }

        public b b(String str) {
            Objects.requireNonNull(str, "baseUrl == null");
            return c(HttpUrl.h(str));
        }

        public b c(HttpUrl httpUrl) {
            Objects.requireNonNull(httpUrl, "baseUrl == null");
            List n10 = httpUrl.n();
            if ("".equals(n10.get(n10.size() - 1))) {
                this.f53011b = httpUrl;
                return this;
            }
            throw new IllegalArgumentException("baseUrl must end in /: " + httpUrl);
        }

        public a0 d() {
            if (this.f53011b != null) {
                Call.Factory factory = this.f53010a;
                if (factory == null) {
                    factory = new OkHttpClient();
                }
                Call.Factory factory2 = factory;
                Executor executor = this.f53014e;
                if (executor == null) {
                    executor = v.f53144a;
                }
                Executor executor2 = executor;
                c cVar = v.f53146c;
                ArrayList arrayList = new ArrayList(this.f53013d);
                List a10 = cVar.a(executor2);
                arrayList.addAll(a10);
                List b10 = cVar.b();
                int size = b10.size();
                ArrayList arrayList2 = new ArrayList(this.f53012c.size() + 1 + size);
                arrayList2.add(new vv.b());
                arrayList2.addAll(this.f53012c);
                arrayList2.addAll(b10);
                return new a0(factory2, this.f53011b, Collections.unmodifiableList(arrayList2), size, Collections.unmodifiableList(arrayList), a10.size(), executor2, this.f53015f);
            }
            throw new IllegalStateException("Base URL required.");
        }

        public b e(Call.Factory factory) {
            Objects.requireNonNull(factory, "factory == null");
            this.f53010a = factory;
            return this;
        }

        public b f(OkHttpClient okHttpClient) {
            Objects.requireNonNull(okHttpClient, "client == null");
            return e(okHttpClient);
        }

        b(a0 a0Var) {
            this.f53010a = a0Var.f52999b;
            this.f53011b = a0Var.f53000c;
            int size = a0Var.f53001d.size() - a0Var.f53002e;
            for (int i10 = 1; i10 < size; i10++) {
                this.f53012c.add((h.a) a0Var.f53001d.get(i10));
            }
            int size2 = a0Var.f53003f.size() - a0Var.f53004g;
            for (int i11 = 0; i11 < size2; i11++) {
                this.f53013d.add((e.a) a0Var.f53003f.get(i11));
            }
            this.f53014e = a0Var.f53005h;
            this.f53015f = a0Var.f53006i;
        }
    }
}
