package ov;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.net.URI;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import kotlin.coroutines.Continuation;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.Request;
import ov.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final Class f44717a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f44718b;

    /* renamed from: c  reason: collision with root package name */
    private final HttpUrl f44719c;

    /* renamed from: d  reason: collision with root package name */
    final String f44720d;

    /* renamed from: e  reason: collision with root package name */
    private final String f44721e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f44722f;

    /* renamed from: g  reason: collision with root package name */
    private final MediaType f44723g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f44724h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f44725i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f44726j;

    /* renamed from: k  reason: collision with root package name */
    private final u[] f44727k;

    /* renamed from: l  reason: collision with root package name */
    final boolean f44728l;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: y  reason: collision with root package name */
        private static final Pattern f44729y = Pattern.compile("\\{([a-zA-Z][a-zA-Z0-9_-]*)\\}");

        /* renamed from: z  reason: collision with root package name */
        private static final Pattern f44730z = Pattern.compile("[a-zA-Z][a-zA-Z0-9_-]*");

        /* renamed from: a  reason: collision with root package name */
        final a0 f44731a;

        /* renamed from: b  reason: collision with root package name */
        final Class f44732b;

        /* renamed from: c  reason: collision with root package name */
        final Method f44733c;

        /* renamed from: d  reason: collision with root package name */
        final Annotation[] f44734d;

        /* renamed from: e  reason: collision with root package name */
        final Annotation[][] f44735e;

        /* renamed from: f  reason: collision with root package name */
        final Type[] f44736f;

        /* renamed from: g  reason: collision with root package name */
        boolean f44737g;

        /* renamed from: h  reason: collision with root package name */
        boolean f44738h;

        /* renamed from: i  reason: collision with root package name */
        boolean f44739i;

        /* renamed from: j  reason: collision with root package name */
        boolean f44740j;

        /* renamed from: k  reason: collision with root package name */
        boolean f44741k;

        /* renamed from: l  reason: collision with root package name */
        boolean f44742l;

        /* renamed from: m  reason: collision with root package name */
        boolean f44743m;

        /* renamed from: n  reason: collision with root package name */
        boolean f44744n;

        /* renamed from: o  reason: collision with root package name */
        String f44745o;

        /* renamed from: p  reason: collision with root package name */
        boolean f44746p;

        /* renamed from: q  reason: collision with root package name */
        boolean f44747q;

        /* renamed from: r  reason: collision with root package name */
        boolean f44748r;

        /* renamed from: s  reason: collision with root package name */
        String f44749s;

        /* renamed from: t  reason: collision with root package name */
        Headers f44750t;

        /* renamed from: u  reason: collision with root package name */
        MediaType f44751u;

        /* renamed from: v  reason: collision with root package name */
        Set f44752v;

        /* renamed from: w  reason: collision with root package name */
        u[] f44753w;

        /* renamed from: x  reason: collision with root package name */
        boolean f44754x;

        a(a0 a0Var, Class cls, Method method) {
            this.f44731a = a0Var;
            this.f44732b = cls;
            this.f44733c = method;
            this.f44734d = method.getAnnotations();
            this.f44736f = method.getGenericParameterTypes();
            this.f44735e = method.getParameterAnnotations();
        }

        private static Class a(Class cls) {
            if (Boolean.TYPE == cls) {
                return Boolean.class;
            }
            if (Byte.TYPE == cls) {
                return Byte.class;
            }
            if (Character.TYPE == cls) {
                return Character.class;
            }
            if (Double.TYPE == cls) {
                return Double.class;
            }
            if (Float.TYPE == cls) {
                return Float.class;
            }
            if (Integer.TYPE == cls) {
                return Integer.class;
            }
            if (Long.TYPE == cls) {
                return Long.class;
            }
            if (Short.TYPE == cls) {
                return Short.class;
            }
            return cls;
        }

        private Headers c(String[] strArr, boolean z10) {
            Headers.a aVar = new Headers.a();
            for (String str : strArr) {
                int indexOf = str.indexOf(58);
                if (indexOf != -1 && indexOf != 0 && indexOf != str.length() - 1) {
                    String substring = str.substring(0, indexOf);
                    String trim = str.substring(indexOf + 1).trim();
                    if ("Content-Type".equalsIgnoreCase(substring)) {
                        try {
                            this.f44751u = MediaType.e(trim);
                        } catch (IllegalArgumentException e10) {
                            throw e0.o(this.f44733c, e10, "Malformed content type: %s", trim);
                        }
                    } else if (z10) {
                        aVar.e(substring, trim);
                    } else {
                        aVar.a(substring, trim);
                    }
                } else {
                    throw e0.n(this.f44733c, "@Headers value must be in the form \"Name: Value\". Found: \"%s\"", str);
                }
            }
            return aVar.f();
        }

        private void d(String str, String str2, boolean z10) {
            String str3 = this.f44745o;
            if (str3 == null) {
                this.f44745o = str;
                this.f44746p = z10;
                if (str2.isEmpty()) {
                    return;
                }
                int indexOf = str2.indexOf(63);
                if (indexOf != -1 && indexOf < str2.length() - 1) {
                    String substring = str2.substring(indexOf + 1);
                    if (f44729y.matcher(substring).find()) {
                        throw e0.n(this.f44733c, "URL query string \"%s\" must not have replace block. For dynamic query parameters use @Query.", substring);
                    }
                }
                this.f44749s = str2;
                this.f44752v = h(str2);
                return;
            }
            throw e0.n(this.f44733c, "Only one HTTP method is allowed. Found: %s and %s.", str3, str);
        }

        private void e(Annotation annotation) {
            if (annotation instanceof qv.b) {
                d("DELETE", ((qv.b) annotation).value(), false);
            } else if (annotation instanceof qv.f) {
                d("GET", ((qv.f) annotation).value(), false);
            } else if (annotation instanceof qv.g) {
                d("HEAD", ((qv.g) annotation).value(), false);
            } else if (annotation instanceof qv.n) {
                d("PATCH", ((qv.n) annotation).value(), true);
            } else if (annotation instanceof qv.o) {
                d("POST", ((qv.o) annotation).value(), true);
            } else if (annotation instanceof qv.p) {
                d("PUT", ((qv.p) annotation).value(), true);
            } else if (annotation instanceof qv.m) {
                d("OPTIONS", ((qv.m) annotation).value(), false);
            } else if (annotation instanceof qv.h) {
                qv.h hVar = (qv.h) annotation;
                d(hVar.method(), hVar.path(), hVar.hasBody());
            } else if (annotation instanceof qv.k) {
                qv.k kVar = (qv.k) annotation;
                String[] value = kVar.value();
                if (value.length != 0) {
                    this.f44750t = c(value, kVar.allowUnsafeNonAsciiValues());
                    return;
                }
                throw e0.n(this.f44733c, "@Headers annotation is empty.", new Object[0]);
            } else if (annotation instanceof qv.l) {
                if (!this.f44747q) {
                    this.f44748r = true;
                    return;
                }
                throw e0.n(this.f44733c, "Only one encoding annotation is allowed.", new Object[0]);
            } else if (annotation instanceof qv.e) {
                if (!this.f44748r) {
                    this.f44747q = true;
                    return;
                }
                throw e0.n(this.f44733c, "Only one encoding annotation is allowed.", new Object[0]);
            }
        }

        private u f(int i10, Type type, Annotation[] annotationArr, boolean z10) {
            u uVar;
            if (annotationArr != null) {
                uVar = null;
                for (Annotation annotation : annotationArr) {
                    u g10 = g(i10, type, annotationArr, annotation);
                    if (g10 != null) {
                        if (uVar == null) {
                            uVar = g10;
                        } else {
                            throw e0.p(this.f44733c, i10, "Multiple Retrofit annotations found, only one allowed.", new Object[0]);
                        }
                    }
                }
            } else {
                uVar = null;
            }
            if (uVar == null) {
                if (z10) {
                    try {
                        if (e0.h(type) == Continuation.class) {
                            this.f44754x = true;
                            return null;
                        }
                    } catch (NoClassDefFoundError unused) {
                    }
                }
                throw e0.p(this.f44733c, i10, "No Retrofit annotation found.", new Object[0]);
            }
            return uVar;
        }

        private u g(int i10, Type type, Annotation[] annotationArr, Annotation annotation) {
            if (annotation instanceof qv.y) {
                j(i10, type);
                if (!this.f44744n) {
                    if (!this.f44740j) {
                        if (!this.f44741k) {
                            if (!this.f44742l) {
                                if (!this.f44743m) {
                                    if (this.f44749s == null) {
                                        this.f44744n = true;
                                        if (type != HttpUrl.class && type != String.class && type != URI.class && (!(type instanceof Class) || !"android.net.Uri".equals(((Class) type).getName()))) {
                                            throw e0.p(this.f44733c, i10, "@Url must be okhttp3.HttpUrl, String, java.net.URI, or android.net.Uri type.", new Object[0]);
                                        }
                                        return new u.p(this.f44733c, i10);
                                    }
                                    throw e0.p(this.f44733c, i10, "@Url cannot be used with @%s URL", this.f44745o);
                                }
                                throw e0.p(this.f44733c, i10, "A @Url parameter must not come after a @QueryMap.", new Object[0]);
                            }
                            throw e0.p(this.f44733c, i10, "A @Url parameter must not come after a @QueryName.", new Object[0]);
                        }
                        throw e0.p(this.f44733c, i10, "A @Url parameter must not come after a @Query.", new Object[0]);
                    }
                    throw e0.p(this.f44733c, i10, "@Path parameters may not be used with @Url.", new Object[0]);
                }
                throw e0.p(this.f44733c, i10, "Multiple @Url method annotations found.", new Object[0]);
            } else if (annotation instanceof qv.s) {
                j(i10, type);
                if (!this.f44741k) {
                    if (!this.f44742l) {
                        if (!this.f44743m) {
                            if (!this.f44744n) {
                                if (this.f44749s != null) {
                                    this.f44740j = true;
                                    qv.s sVar = (qv.s) annotation;
                                    String value = sVar.value();
                                    i(i10, value);
                                    return new u.k(this.f44733c, i10, value, this.f44731a.j(type, annotationArr), sVar.encoded());
                                }
                                throw e0.p(this.f44733c, i10, "@Path can only be used with relative url on @%s", this.f44745o);
                            }
                            throw e0.p(this.f44733c, i10, "@Path parameters may not be used with @Url.", new Object[0]);
                        }
                        throw e0.p(this.f44733c, i10, "A @Path parameter must not come after a @QueryMap.", new Object[0]);
                    }
                    throw e0.p(this.f44733c, i10, "A @Path parameter must not come after a @QueryName.", new Object[0]);
                }
                throw e0.p(this.f44733c, i10, "A @Path parameter must not come after a @Query.", new Object[0]);
            } else if (annotation instanceof qv.t) {
                j(i10, type);
                qv.t tVar = (qv.t) annotation;
                String value2 = tVar.value();
                boolean encoded = tVar.encoded();
                Class h10 = e0.h(type);
                this.f44741k = true;
                if (Iterable.class.isAssignableFrom(h10)) {
                    if (type instanceof ParameterizedType) {
                        return new u.l(value2, this.f44731a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded).c();
                    }
                    throw e0.p(this.f44733c, i10, h10.getSimpleName() + " must include generic type (e.g., " + h10.getSimpleName() + "<String>)", new Object[0]);
                } else if (h10.isArray()) {
                    return new u.l(value2, this.f44731a.j(a(h10.getComponentType()), annotationArr), encoded).b();
                } else {
                    return new u.l(value2, this.f44731a.j(type, annotationArr), encoded);
                }
            } else if (annotation instanceof qv.v) {
                j(i10, type);
                boolean encoded2 = ((qv.v) annotation).encoded();
                Class h11 = e0.h(type);
                this.f44742l = true;
                if (Iterable.class.isAssignableFrom(h11)) {
                    if (type instanceof ParameterizedType) {
                        return new u.n(this.f44731a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded2).c();
                    }
                    throw e0.p(this.f44733c, i10, h11.getSimpleName() + " must include generic type (e.g., " + h11.getSimpleName() + "<String>)", new Object[0]);
                } else if (h11.isArray()) {
                    return new u.n(this.f44731a.j(a(h11.getComponentType()), annotationArr), encoded2).b();
                } else {
                    return new u.n(this.f44731a.j(type, annotationArr), encoded2);
                }
            } else if (annotation instanceof qv.u) {
                j(i10, type);
                Class h12 = e0.h(type);
                this.f44743m = true;
                if (Map.class.isAssignableFrom(h12)) {
                    Type i11 = e0.i(type, h12, Map.class);
                    if (i11 instanceof ParameterizedType) {
                        ParameterizedType parameterizedType = (ParameterizedType) i11;
                        Type g10 = e0.g(0, parameterizedType);
                        if (String.class == g10) {
                            return new u.m(this.f44733c, i10, this.f44731a.j(e0.g(1, parameterizedType), annotationArr), ((qv.u) annotation).encoded());
                        }
                        throw e0.p(this.f44733c, i10, "@QueryMap keys must be of type String: " + g10, new Object[0]);
                    }
                    throw e0.p(this.f44733c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                }
                throw e0.p(this.f44733c, i10, "@QueryMap parameter type must be Map.", new Object[0]);
            } else if (annotation instanceof qv.i) {
                j(i10, type);
                qv.i iVar = (qv.i) annotation;
                String value3 = iVar.value();
                Class h13 = e0.h(type);
                if (Iterable.class.isAssignableFrom(h13)) {
                    if (type instanceof ParameterizedType) {
                        return new u.f(value3, this.f44731a.j(e0.g(0, (ParameterizedType) type), annotationArr), iVar.allowUnsafeNonAsciiValues()).c();
                    }
                    throw e0.p(this.f44733c, i10, h13.getSimpleName() + " must include generic type (e.g., " + h13.getSimpleName() + "<String>)", new Object[0]);
                } else if (h13.isArray()) {
                    return new u.f(value3, this.f44731a.j(a(h13.getComponentType()), annotationArr), iVar.allowUnsafeNonAsciiValues()).b();
                } else {
                    return new u.f(value3, this.f44731a.j(type, annotationArr), iVar.allowUnsafeNonAsciiValues());
                }
            } else if (annotation instanceof qv.j) {
                if (type == Headers.class) {
                    return new u.h(this.f44733c, i10);
                }
                j(i10, type);
                Class h14 = e0.h(type);
                if (Map.class.isAssignableFrom(h14)) {
                    Type i12 = e0.i(type, h14, Map.class);
                    if (i12 instanceof ParameterizedType) {
                        ParameterizedType parameterizedType2 = (ParameterizedType) i12;
                        Type g11 = e0.g(0, parameterizedType2);
                        if (String.class == g11) {
                            return new u.g(this.f44733c, i10, this.f44731a.j(e0.g(1, parameterizedType2), annotationArr), ((qv.j) annotation).allowUnsafeNonAsciiValues());
                        }
                        throw e0.p(this.f44733c, i10, "@HeaderMap keys must be of type String: " + g11, new Object[0]);
                    }
                    throw e0.p(this.f44733c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                }
                throw e0.p(this.f44733c, i10, "@HeaderMap parameter type must be Map or Headers.", new Object[0]);
            } else if (annotation instanceof qv.c) {
                j(i10, type);
                if (this.f44747q) {
                    qv.c cVar = (qv.c) annotation;
                    String value4 = cVar.value();
                    boolean encoded3 = cVar.encoded();
                    this.f44737g = true;
                    Class h15 = e0.h(type);
                    if (Iterable.class.isAssignableFrom(h15)) {
                        if (type instanceof ParameterizedType) {
                            return new u.d(value4, this.f44731a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded3).c();
                        }
                        throw e0.p(this.f44733c, i10, h15.getSimpleName() + " must include generic type (e.g., " + h15.getSimpleName() + "<String>)", new Object[0]);
                    } else if (h15.isArray()) {
                        return new u.d(value4, this.f44731a.j(a(h15.getComponentType()), annotationArr), encoded3).b();
                    } else {
                        return new u.d(value4, this.f44731a.j(type, annotationArr), encoded3);
                    }
                }
                throw e0.p(this.f44733c, i10, "@Field parameters can only be used with form encoding.", new Object[0]);
            } else if (annotation instanceof qv.d) {
                j(i10, type);
                if (this.f44747q) {
                    Class h16 = e0.h(type);
                    if (Map.class.isAssignableFrom(h16)) {
                        Type i13 = e0.i(type, h16, Map.class);
                        if (i13 instanceof ParameterizedType) {
                            ParameterizedType parameterizedType3 = (ParameterizedType) i13;
                            Type g12 = e0.g(0, parameterizedType3);
                            if (String.class == g12) {
                                h j10 = this.f44731a.j(e0.g(1, parameterizedType3), annotationArr);
                                this.f44737g = true;
                                return new u.e(this.f44733c, i10, j10, ((qv.d) annotation).encoded());
                            }
                            throw e0.p(this.f44733c, i10, "@FieldMap keys must be of type String: " + g12, new Object[0]);
                        }
                        throw e0.p(this.f44733c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                    }
                    throw e0.p(this.f44733c, i10, "@FieldMap parameter type must be Map.", new Object[0]);
                }
                throw e0.p(this.f44733c, i10, "@FieldMap parameters can only be used with form encoding.", new Object[0]);
            } else if (annotation instanceof qv.q) {
                j(i10, type);
                if (this.f44748r) {
                    qv.q qVar = (qv.q) annotation;
                    this.f44738h = true;
                    String value5 = qVar.value();
                    Class h17 = e0.h(type);
                    if (value5.isEmpty()) {
                        if (Iterable.class.isAssignableFrom(h17)) {
                            if (type instanceof ParameterizedType) {
                                if (MultipartBody.b.class.isAssignableFrom(e0.h(e0.g(0, (ParameterizedType) type)))) {
                                    return u.o.f44695a.c();
                                }
                                throw e0.p(this.f44733c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                            }
                            throw e0.p(this.f44733c, i10, h17.getSimpleName() + " must include generic type (e.g., " + h17.getSimpleName() + "<String>)", new Object[0]);
                        } else if (h17.isArray()) {
                            if (MultipartBody.b.class.isAssignableFrom(h17.getComponentType())) {
                                return u.o.f44695a.b();
                            }
                            throw e0.p(this.f44733c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                        } else if (MultipartBody.b.class.isAssignableFrom(h17)) {
                            return u.o.f44695a;
                        } else {
                            throw e0.p(this.f44733c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                        }
                    }
                    Headers h18 = Headers.h("Content-Disposition", "form-data; name=\"" + value5 + "\"", "Content-Transfer-Encoding", qVar.encoding());
                    if (Iterable.class.isAssignableFrom(h17)) {
                        if (type instanceof ParameterizedType) {
                            Type g13 = e0.g(0, (ParameterizedType) type);
                            if (!MultipartBody.b.class.isAssignableFrom(e0.h(g13))) {
                                return new u.i(this.f44733c, i10, h18, this.f44731a.h(g13, annotationArr, this.f44734d)).c();
                            }
                            throw e0.p(this.f44733c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                        }
                        throw e0.p(this.f44733c, i10, h17.getSimpleName() + " must include generic type (e.g., " + h17.getSimpleName() + "<String>)", new Object[0]);
                    } else if (h17.isArray()) {
                        Class a10 = a(h17.getComponentType());
                        if (!MultipartBody.b.class.isAssignableFrom(a10)) {
                            return new u.i(this.f44733c, i10, h18, this.f44731a.h(a10, annotationArr, this.f44734d)).b();
                        }
                        throw e0.p(this.f44733c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                    } else if (!MultipartBody.b.class.isAssignableFrom(h17)) {
                        return new u.i(this.f44733c, i10, h18, this.f44731a.h(type, annotationArr, this.f44734d));
                    } else {
                        throw e0.p(this.f44733c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                    }
                }
                throw e0.p(this.f44733c, i10, "@Part parameters can only be used with multipart encoding.", new Object[0]);
            } else if (annotation instanceof qv.r) {
                j(i10, type);
                if (this.f44748r) {
                    this.f44738h = true;
                    Class h19 = e0.h(type);
                    if (Map.class.isAssignableFrom(h19)) {
                        Type i14 = e0.i(type, h19, Map.class);
                        if (i14 instanceof ParameterizedType) {
                            ParameterizedType parameterizedType4 = (ParameterizedType) i14;
                            Type g14 = e0.g(0, parameterizedType4);
                            if (String.class == g14) {
                                Type g15 = e0.g(1, parameterizedType4);
                                if (!MultipartBody.b.class.isAssignableFrom(e0.h(g15))) {
                                    return new u.j(this.f44733c, i10, this.f44731a.h(g15, annotationArr, this.f44734d), ((qv.r) annotation).encoding());
                                }
                                throw e0.p(this.f44733c, i10, "@PartMap values cannot be MultipartBody.Part. Use @Part List<Part> or a different value type instead.", new Object[0]);
                            }
                            throw e0.p(this.f44733c, i10, "@PartMap keys must be of type String: " + g14, new Object[0]);
                        }
                        throw e0.p(this.f44733c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                    }
                    throw e0.p(this.f44733c, i10, "@PartMap parameter type must be Map.", new Object[0]);
                }
                throw e0.p(this.f44733c, i10, "@PartMap parameters can only be used with multipart encoding.", new Object[0]);
            } else if (annotation instanceof qv.a) {
                j(i10, type);
                if (!this.f44747q && !this.f44748r) {
                    if (!this.f44739i) {
                        try {
                            h h20 = this.f44731a.h(type, annotationArr, this.f44734d);
                            this.f44739i = true;
                            return new u.c(this.f44733c, i10, h20);
                        } catch (RuntimeException e10) {
                            throw e0.q(this.f44733c, e10, i10, "Unable to create @Body converter for %s", type);
                        }
                    }
                    throw e0.p(this.f44733c, i10, "Multiple @Body method annotations found.", new Object[0]);
                }
                throw e0.p(this.f44733c, i10, "@Body parameters cannot be used with form or multi-part encoding.", new Object[0]);
            } else if (annotation instanceof qv.x) {
                j(i10, type);
                Class h21 = e0.h(type);
                for (int i15 = i10 - 1; i15 >= 0; i15--) {
                    u uVar = this.f44753w[i15];
                    if ((uVar instanceof u.q) && ((u.q) uVar).f44698a.equals(h21)) {
                        throw e0.p(this.f44733c, i10, "@Tag type " + h21.getName() + " is duplicate of " + v.f44700b.a(this.f44733c, i15) + " and would always overwrite its value.", new Object[0]);
                    }
                }
                return new u.q(h21);
            } else {
                return null;
            }
        }

        static Set h(String str) {
            Matcher matcher = f44729y.matcher(str);
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            while (matcher.find()) {
                linkedHashSet.add(matcher.group(1));
            }
            return linkedHashSet;
        }

        private void i(int i10, String str) {
            if (f44730z.matcher(str).matches()) {
                if (this.f44752v.contains(str)) {
                    return;
                }
                throw e0.p(this.f44733c, i10, "URL \"%s\" does not contain \"{%s}\".", this.f44749s, str);
            }
            throw e0.p(this.f44733c, i10, "@Path parameter name must match %s. Found: %s", f44729y.pattern(), str);
        }

        private void j(int i10, Type type) {
            if (!e0.j(type)) {
                return;
            }
            throw e0.p(this.f44733c, i10, "Parameter type must not include a type variable or wildcard: %s", type);
        }

        y b() {
            boolean z10;
            for (Annotation annotation : this.f44734d) {
                e(annotation);
            }
            if (this.f44745o != null) {
                if (!this.f44746p) {
                    if (!this.f44748r) {
                        if (this.f44747q) {
                            throw e0.n(this.f44733c, "FormUrlEncoded can only be specified on HTTP methods with request body (e.g., @POST).", new Object[0]);
                        }
                    } else {
                        throw e0.n(this.f44733c, "Multipart can only be specified on HTTP methods with request body (e.g., @POST).", new Object[0]);
                    }
                }
                int length = this.f44735e.length;
                this.f44753w = new u[length];
                int i10 = length - 1;
                for (int i11 = 0; i11 < length; i11++) {
                    u[] uVarArr = this.f44753w;
                    Type type = this.f44736f[i11];
                    Annotation[] annotationArr = this.f44735e[i11];
                    if (i11 == i10) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    uVarArr[i11] = f(i11, type, annotationArr, z10);
                }
                if (this.f44749s == null && !this.f44744n) {
                    throw e0.n(this.f44733c, "Missing either @%s URL or @Url parameter.", this.f44745o);
                }
                boolean z11 = this.f44747q;
                if (!z11 && !this.f44748r && !this.f44746p && this.f44739i) {
                    throw e0.n(this.f44733c, "Non-body HTTP method cannot contain @Body.", new Object[0]);
                }
                if (z11 && !this.f44737g) {
                    throw e0.n(this.f44733c, "Form-encoded method must contain at least one @Field.", new Object[0]);
                }
                if (this.f44748r && !this.f44738h) {
                    throw e0.n(this.f44733c, "Multipart method must contain at least one @Part.", new Object[0]);
                }
                return new y(this);
            }
            throw e0.n(this.f44733c, "HTTP method annotation is required (e.g., @GET, @POST, etc.).", new Object[0]);
        }
    }

    y(a aVar) {
        this.f44717a = aVar.f44732b;
        this.f44718b = aVar.f44733c;
        this.f44719c = aVar.f44731a.f44555c;
        this.f44720d = aVar.f44745o;
        this.f44721e = aVar.f44749s;
        this.f44722f = aVar.f44750t;
        this.f44723g = aVar.f44751u;
        this.f44724h = aVar.f44746p;
        this.f44725i = aVar.f44747q;
        this.f44726j = aVar.f44748r;
        this.f44727k = aVar.f44753w;
        this.f44728l = aVar.f44754x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static y b(a0 a0Var, Class cls, Method method) {
        return new a(a0Var, cls, method).b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Request a(Object obj, Object[] objArr) {
        u[] uVarArr = this.f44727k;
        int length = objArr.length;
        if (length == uVarArr.length) {
            x xVar = new x(this.f44720d, this.f44719c, this.f44721e, this.f44722f, this.f44723g, this.f44724h, this.f44725i, this.f44726j);
            if (this.f44728l) {
                length--;
            }
            ArrayList arrayList = new ArrayList(length);
            for (int i10 = 0; i10 < length; i10++) {
                arrayList.add(objArr[i10]);
                uVarArr[i10].a(xVar, objArr[i10]);
            }
            return xVar.k().j(q.class, new q(this.f44717a, obj, this.f44718b, arrayList)).b();
        }
        throw new IllegalArgumentException("Argument count (" + length + ") doesn't match expected count (" + uVarArr.length + ")");
    }
}
