package wv;

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
import wv.b;
import wv.e;
import wv.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final ConcurrentHashMap f54073a = new ConcurrentHashMap();

    /* renamed from: b  reason: collision with root package name */
    final Call.Factory f54074b;

    /* renamed from: c  reason: collision with root package name */
    final HttpUrl f54075c;

    /* renamed from: d  reason: collision with root package name */
    final List f54076d;

    /* renamed from: e  reason: collision with root package name */
    final int f54077e;

    /* renamed from: f  reason: collision with root package name */
    final List f54078f;

    /* renamed from: g  reason: collision with root package name */
    final int f54079g;

    /* renamed from: h  reason: collision with root package name */
    final Executor f54080h;

    /* renamed from: i  reason: collision with root package name */
    final boolean f54081i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements InvocationHandler {

        /* renamed from: a  reason: collision with root package name */
        private final Object[] f54082a = new Object[0];

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f54083b;

        a(Class cls) {
            this.f54083b = cls;
        }

        @Override // java.lang.reflect.InvocationHandler
        public Object invoke(Object obj, Method method, Object[] objArr) {
            if (method.getDeclaringClass() == Object.class) {
                return method.invoke(this, objArr);
            }
            if (objArr == null) {
                objArr = this.f54082a;
            }
            w wVar = v.f54220b;
            if (wVar.c(method)) {
                return wVar.b(method, this.f54083b, obj, objArr);
            }
            return a0.this.c(this.f54083b, method).a(obj, objArr);
        }
    }

    a0(Call.Factory factory, HttpUrl httpUrl, List list, int i10, List list2, int i11, Executor executor, boolean z10) {
        this.f54074b = factory;
        this.f54075c = httpUrl;
        this.f54076d = list;
        this.f54077e = i10;
        this.f54078f = list2;
        this.f54079g = i11;
        this.f54080h = executor;
        this.f54081i = z10;
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
            if (this.f54081i) {
                w wVar = v.f54220b;
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
            Object obj = this.f54073a.get(method);
            if (obj instanceof b0) {
                return (b0) obj;
            }
            if (obj == null) {
                Object obj2 = new Object();
                synchronized (obj2) {
                    try {
                        obj = this.f54073a.putIfAbsent(method, obj2);
                        if (obj == null) {
                            b0 b10 = b0.b(this, cls, method);
                            this.f54073a.put(method, b10);
                            return b10;
                        }
                    } finally {
                    }
                }
            }
            synchronized (obj) {
                try {
                    Object obj3 = this.f54073a.get(method);
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
        int indexOf = this.f54078f.indexOf(aVar) + 1;
        int size = this.f54078f.size();
        for (int i10 = indexOf; i10 < size; i10++) {
            e a10 = ((e.a) this.f54078f.get(i10)).a(type, annotationArr, this);
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
                sb2.append(((e.a) this.f54078f.get(i11)).getClass().getName());
            }
            sb2.append('\n');
        }
        sb2.append("  Tried:");
        int size2 = this.f54078f.size();
        while (indexOf < size2) {
            sb2.append("\n   * ");
            sb2.append(((e.a) this.f54078f.get(indexOf)).getClass().getName());
            indexOf++;
        }
        throw new IllegalArgumentException(sb2.toString());
    }

    public h f(h.a aVar, Type type, Annotation[] annotationArr, Annotation[] annotationArr2) {
        Objects.requireNonNull(type, "type == null");
        Objects.requireNonNull(annotationArr, "parameterAnnotations == null");
        Objects.requireNonNull(annotationArr2, "methodAnnotations == null");
        int indexOf = this.f54076d.indexOf(aVar) + 1;
        int size = this.f54076d.size();
        for (int i10 = indexOf; i10 < size; i10++) {
            h c10 = ((h.a) this.f54076d.get(i10)).c(type, annotationArr, annotationArr2, this);
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
                sb2.append(((h.a) this.f54076d.get(i11)).getClass().getName());
            }
            sb2.append('\n');
        }
        sb2.append("  Tried:");
        int size2 = this.f54076d.size();
        while (indexOf < size2) {
            sb2.append("\n   * ");
            sb2.append(((h.a) this.f54076d.get(indexOf)).getClass().getName());
            indexOf++;
        }
        throw new IllegalArgumentException(sb2.toString());
    }

    public h g(h.a aVar, Type type, Annotation[] annotationArr) {
        Objects.requireNonNull(type, "type == null");
        Objects.requireNonNull(annotationArr, "annotations == null");
        int indexOf = this.f54076d.indexOf(aVar) + 1;
        int size = this.f54076d.size();
        for (int i10 = indexOf; i10 < size; i10++) {
            h d10 = ((h.a) this.f54076d.get(i10)).d(type, annotationArr, this);
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
                sb2.append(((h.a) this.f54076d.get(i11)).getClass().getName());
            }
            sb2.append('\n');
        }
        sb2.append("  Tried:");
        int size2 = this.f54076d.size();
        while (indexOf < size2) {
            sb2.append("\n   * ");
            sb2.append(((h.a) this.f54076d.get(indexOf)).getClass().getName());
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
        int size = this.f54076d.size();
        for (int i10 = 0; i10 < size; i10++) {
            h e10 = ((h.a) this.f54076d.get(i10)).e(type, annotationArr, this);
            if (e10 != null) {
                return e10;
            }
        }
        return b.d.f54094a;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private Call.Factory f54085a;

        /* renamed from: b  reason: collision with root package name */
        private HttpUrl f54086b;

        /* renamed from: c  reason: collision with root package name */
        private final List f54087c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private final List f54088d = new ArrayList();

        /* renamed from: e  reason: collision with root package name */
        private Executor f54089e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f54090f;

        public b() {
        }

        public b a(h.a aVar) {
            List list = this.f54087c;
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
                this.f54086b = httpUrl;
                return this;
            }
            throw new IllegalArgumentException("baseUrl must end in /: " + httpUrl);
        }

        public a0 d() {
            if (this.f54086b != null) {
                Call.Factory factory = this.f54085a;
                if (factory == null) {
                    factory = new OkHttpClient();
                }
                Call.Factory factory2 = factory;
                Executor executor = this.f54089e;
                if (executor == null) {
                    executor = v.f54219a;
                }
                Executor executor2 = executor;
                c cVar = v.f54221c;
                ArrayList arrayList = new ArrayList(this.f54088d);
                List a10 = cVar.a(executor2);
                arrayList.addAll(a10);
                List b10 = cVar.b();
                int size = b10.size();
                ArrayList arrayList2 = new ArrayList(this.f54087c.size() + 1 + size);
                arrayList2.add(new wv.b());
                arrayList2.addAll(this.f54087c);
                arrayList2.addAll(b10);
                return new a0(factory2, this.f54086b, Collections.unmodifiableList(arrayList2), size, Collections.unmodifiableList(arrayList), a10.size(), executor2, this.f54090f);
            }
            throw new IllegalStateException("Base URL required.");
        }

        public b e(Call.Factory factory) {
            Objects.requireNonNull(factory, "factory == null");
            this.f54085a = factory;
            return this;
        }

        public b f(OkHttpClient okHttpClient) {
            Objects.requireNonNull(okHttpClient, "client == null");
            return e(okHttpClient);
        }

        b(a0 a0Var) {
            this.f54085a = a0Var.f54074b;
            this.f54086b = a0Var.f54075c;
            int size = a0Var.f54076d.size() - a0Var.f54077e;
            for (int i10 = 1; i10 < size; i10++) {
                this.f54087c.add((h.a) a0Var.f54076d.get(i10));
            }
            int size2 = a0Var.f54078f.size() - a0Var.f54079g;
            for (int i11 = 0; i11 < size2; i11++) {
                this.f54088d.add((e.a) a0Var.f54078f.get(i11));
            }
            this.f54089e = a0Var.f54080h;
            this.f54090f = a0Var.f54081i;
        }
    }
}
