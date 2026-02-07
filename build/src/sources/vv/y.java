package vv;

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
import vv.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final Class f53210a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f53211b;

    /* renamed from: c  reason: collision with root package name */
    private final HttpUrl f53212c;

    /* renamed from: d  reason: collision with root package name */
    final String f53213d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53214e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f53215f;

    /* renamed from: g  reason: collision with root package name */
    private final MediaType f53216g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f53217h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f53218i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f53219j;

    /* renamed from: k  reason: collision with root package name */
    private final u[] f53220k;

    /* renamed from: l  reason: collision with root package name */
    final boolean f53221l;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: y  reason: collision with root package name */
        private static final Pattern f53222y = Pattern.compile("\\{([a-zA-Z][a-zA-Z0-9_-]*)\\}");

        /* renamed from: z  reason: collision with root package name */
        private static final Pattern f53223z = Pattern.compile("[a-zA-Z][a-zA-Z0-9_-]*");

        /* renamed from: a  reason: collision with root package name */
        final a0 f53224a;

        /* renamed from: b  reason: collision with root package name */
        final Class f53225b;

        /* renamed from: c  reason: collision with root package name */
        final Method f53226c;

        /* renamed from: d  reason: collision with root package name */
        final Annotation[] f53227d;

        /* renamed from: e  reason: collision with root package name */
        final Annotation[][] f53228e;

        /* renamed from: f  reason: collision with root package name */
        final Type[] f53229f;

        /* renamed from: g  reason: collision with root package name */
        boolean f53230g;

        /* renamed from: h  reason: collision with root package name */
        boolean f53231h;

        /* renamed from: i  reason: collision with root package name */
        boolean f53232i;

        /* renamed from: j  reason: collision with root package name */
        boolean f53233j;

        /* renamed from: k  reason: collision with root package name */
        boolean f53234k;

        /* renamed from: l  reason: collision with root package name */
        boolean f53235l;

        /* renamed from: m  reason: collision with root package name */
        boolean f53236m;

        /* renamed from: n  reason: collision with root package name */
        boolean f53237n;

        /* renamed from: o  reason: collision with root package name */
        String f53238o;

        /* renamed from: p  reason: collision with root package name */
        boolean f53239p;

        /* renamed from: q  reason: collision with root package name */
        boolean f53240q;

        /* renamed from: r  reason: collision with root package name */
        boolean f53241r;

        /* renamed from: s  reason: collision with root package name */
        String f53242s;

        /* renamed from: t  reason: collision with root package name */
        Headers f53243t;

        /* renamed from: u  reason: collision with root package name */
        MediaType f53244u;

        /* renamed from: v  reason: collision with root package name */
        Set f53245v;

        /* renamed from: w  reason: collision with root package name */
        u[] f53246w;

        /* renamed from: x  reason: collision with root package name */
        boolean f53247x;

        a(a0 a0Var, Class cls, Method method) {
            this.f53224a = a0Var;
            this.f53225b = cls;
            this.f53226c = method;
            this.f53227d = method.getAnnotations();
            this.f53229f = method.getGenericParameterTypes();
            this.f53228e = method.getParameterAnnotations();
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
                            this.f53244u = MediaType.e(trim);
                        } catch (IllegalArgumentException e10) {
                            throw e0.o(this.f53226c, e10, "Malformed content type: %s", trim);
                        }
                    } else if (z10) {
                        aVar.e(substring, trim);
                    } else {
                        aVar.a(substring, trim);
                    }
                } else {
                    throw e0.n(this.f53226c, "@Headers value must be in the form \"Name: Value\". Found: \"%s\"", str);
                }
            }
            return aVar.f();
        }

        private void d(String str, String str2, boolean z10) {
            String str3 = this.f53238o;
            if (str3 == null) {
                this.f53238o = str;
                this.f53239p = z10;
                if (str2.isEmpty()) {
                    return;
                }
                int indexOf = str2.indexOf(63);
                if (indexOf != -1 && indexOf < str2.length() - 1) {
                    String substring = str2.substring(indexOf + 1);
                    if (f53222y.matcher(substring).find()) {
                        throw e0.n(this.f53226c, "URL query string \"%s\" must not have replace block. For dynamic query parameters use @Query.", substring);
                    }
                }
                this.f53242s = str2;
                this.f53245v = h(str2);
                return;
            }
            throw e0.n(this.f53226c, "Only one HTTP method is allowed. Found: %s and %s.", str3, str);
        }

        private void e(Annotation annotation) {
            if (annotation instanceof xv.b) {
                d("DELETE", ((xv.b) annotation).value(), false);
            } else if (annotation instanceof xv.f) {
                d("GET", ((xv.f) annotation).value(), false);
            } else if (annotation instanceof xv.g) {
                d("HEAD", ((xv.g) annotation).value(), false);
            } else if (annotation instanceof xv.n) {
                d("PATCH", ((xv.n) annotation).value(), true);
            } else if (annotation instanceof xv.o) {
                d("POST", ((xv.o) annotation).value(), true);
            } else if (annotation instanceof xv.p) {
                d("PUT", ((xv.p) annotation).value(), true);
            } else if (annotation instanceof xv.m) {
                d("OPTIONS", ((xv.m) annotation).value(), false);
            } else if (annotation instanceof xv.h) {
                xv.h hVar = (xv.h) annotation;
                d(hVar.method(), hVar.path(), hVar.hasBody());
            } else if (annotation instanceof xv.k) {
                xv.k kVar = (xv.k) annotation;
                String[] value = kVar.value();
                if (value.length != 0) {
                    this.f53243t = c(value, kVar.allowUnsafeNonAsciiValues());
                    return;
                }
                throw e0.n(this.f53226c, "@Headers annotation is empty.", new Object[0]);
            } else if (annotation instanceof xv.l) {
                if (!this.f53240q) {
                    this.f53241r = true;
                    return;
                }
                throw e0.n(this.f53226c, "Only one encoding annotation is allowed.", new Object[0]);
            } else if (annotation instanceof xv.e) {
                if (!this.f53241r) {
                    this.f53240q = true;
                    return;
                }
                throw e0.n(this.f53226c, "Only one encoding annotation is allowed.", new Object[0]);
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
                            throw e0.p(this.f53226c, i10, "Multiple Retrofit annotations found, only one allowed.", new Object[0]);
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
                            this.f53247x = true;
                            return null;
                        }
                    } catch (NoClassDefFoundError unused) {
                    }
                }
                throw e0.p(this.f53226c, i10, "No Retrofit annotation found.", new Object[0]);
            }
            return uVar;
        }

        private u g(int i10, Type type, Annotation[] annotationArr, Annotation annotation) {
            if (annotation instanceof xv.y) {
                j(i10, type);
                if (!this.f53237n) {
                    if (!this.f53233j) {
                        if (!this.f53234k) {
                            if (!this.f53235l) {
                                if (!this.f53236m) {
                                    if (this.f53242s == null) {
                                        this.f53237n = true;
                                        if (type != HttpUrl.class && type != String.class && type != URI.class && (!(type instanceof Class) || !"android.net.Uri".equals(((Class) type).getName()))) {
                                            throw e0.p(this.f53226c, i10, "@Url must be okhttp3.HttpUrl, String, java.net.URI, or android.net.Uri type.", new Object[0]);
                                        }
                                        return new u.p(this.f53226c, i10);
                                    }
                                    throw e0.p(this.f53226c, i10, "@Url cannot be used with @%s URL", this.f53238o);
                                }
                                throw e0.p(this.f53226c, i10, "A @Url parameter must not come after a @QueryMap.", new Object[0]);
                            }
                            throw e0.p(this.f53226c, i10, "A @Url parameter must not come after a @QueryName.", new Object[0]);
                        }
                        throw e0.p(this.f53226c, i10, "A @Url parameter must not come after a @Query.", new Object[0]);
                    }
                    throw e0.p(this.f53226c, i10, "@Path parameters may not be used with @Url.", new Object[0]);
                }
                throw e0.p(this.f53226c, i10, "Multiple @Url method annotations found.", new Object[0]);
            } else if (annotation instanceof xv.s) {
                j(i10, type);
                if (!this.f53234k) {
                    if (!this.f53235l) {
                        if (!this.f53236m) {
                            if (!this.f53237n) {
                                if (this.f53242s != null) {
                                    this.f53233j = true;
                                    xv.s sVar = (xv.s) annotation;
                                    String value = sVar.value();
                                    i(i10, value);
                                    return new u.k(this.f53226c, i10, value, this.f53224a.j(type, annotationArr), sVar.encoded());
                                }
                                throw e0.p(this.f53226c, i10, "@Path can only be used with relative url on @%s", this.f53238o);
                            }
                            throw e0.p(this.f53226c, i10, "@Path parameters may not be used with @Url.", new Object[0]);
                        }
                        throw e0.p(this.f53226c, i10, "A @Path parameter must not come after a @QueryMap.", new Object[0]);
                    }
                    throw e0.p(this.f53226c, i10, "A @Path parameter must not come after a @QueryName.", new Object[0]);
                }
                throw e0.p(this.f53226c, i10, "A @Path parameter must not come after a @Query.", new Object[0]);
            } else if (annotation instanceof xv.t) {
                j(i10, type);
                xv.t tVar = (xv.t) annotation;
                String value2 = tVar.value();
                boolean encoded = tVar.encoded();
                Class h10 = e0.h(type);
                this.f53234k = true;
                if (Iterable.class.isAssignableFrom(h10)) {
                    if (type instanceof ParameterizedType) {
                        return new u.l(value2, this.f53224a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded).c();
                    }
                    throw e0.p(this.f53226c, i10, h10.getSimpleName() + " must include generic type (e.g., " + h10.getSimpleName() + "<String>)", new Object[0]);
                } else if (h10.isArray()) {
                    return new u.l(value2, this.f53224a.j(a(h10.getComponentType()), annotationArr), encoded).b();
                } else {
                    return new u.l(value2, this.f53224a.j(type, annotationArr), encoded);
                }
            } else if (annotation instanceof xv.v) {
                j(i10, type);
                boolean encoded2 = ((xv.v) annotation).encoded();
                Class h11 = e0.h(type);
                this.f53235l = true;
                if (Iterable.class.isAssignableFrom(h11)) {
                    if (type instanceof ParameterizedType) {
                        return new u.n(this.f53224a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded2).c();
                    }
                    throw e0.p(this.f53226c, i10, h11.getSimpleName() + " must include generic type (e.g., " + h11.getSimpleName() + "<String>)", new Object[0]);
                } else if (h11.isArray()) {
                    return new u.n(this.f53224a.j(a(h11.getComponentType()), annotationArr), encoded2).b();
                } else {
                    return new u.n(this.f53224a.j(type, annotationArr), encoded2);
                }
            } else if (annotation instanceof xv.u) {
                j(i10, type);
                Class h12 = e0.h(type);
                this.f53236m = true;
                if (Map.class.isAssignableFrom(h12)) {
                    Type i11 = e0.i(type, h12, Map.class);
                    if (i11 instanceof ParameterizedType) {
                        ParameterizedType parameterizedType = (ParameterizedType) i11;
                        Type g10 = e0.g(0, parameterizedType);
                        if (String.class == g10) {
                            return new u.m(this.f53226c, i10, this.f53224a.j(e0.g(1, parameterizedType), annotationArr), ((xv.u) annotation).encoded());
                        }
                        throw e0.p(this.f53226c, i10, "@QueryMap keys must be of type String: " + g10, new Object[0]);
                    }
                    throw e0.p(this.f53226c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                }
                throw e0.p(this.f53226c, i10, "@QueryMap parameter type must be Map.", new Object[0]);
            } else if (annotation instanceof xv.i) {
                j(i10, type);
                xv.i iVar = (xv.i) annotation;
                String value3 = iVar.value();
                Class h13 = e0.h(type);
                if (Iterable.class.isAssignableFrom(h13)) {
                    if (type instanceof ParameterizedType) {
                        return new u.f(value3, this.f53224a.j(e0.g(0, (ParameterizedType) type), annotationArr), iVar.allowUnsafeNonAsciiValues()).c();
                    }
                    throw e0.p(this.f53226c, i10, h13.getSimpleName() + " must include generic type (e.g., " + h13.getSimpleName() + "<String>)", new Object[0]);
                } else if (h13.isArray()) {
                    return new u.f(value3, this.f53224a.j(a(h13.getComponentType()), annotationArr), iVar.allowUnsafeNonAsciiValues()).b();
                } else {
                    return new u.f(value3, this.f53224a.j(type, annotationArr), iVar.allowUnsafeNonAsciiValues());
                }
            } else if (annotation instanceof xv.j) {
                if (type == Headers.class) {
                    return new u.h(this.f53226c, i10);
                }
                j(i10, type);
                Class h14 = e0.h(type);
                if (Map.class.isAssignableFrom(h14)) {
                    Type i12 = e0.i(type, h14, Map.class);
                    if (i12 instanceof ParameterizedType) {
                        ParameterizedType parameterizedType2 = (ParameterizedType) i12;
                        Type g11 = e0.g(0, parameterizedType2);
                        if (String.class == g11) {
                            return new u.g(this.f53226c, i10, this.f53224a.j(e0.g(1, parameterizedType2), annotationArr), ((xv.j) annotation).allowUnsafeNonAsciiValues());
                        }
                        throw e0.p(this.f53226c, i10, "@HeaderMap keys must be of type String: " + g11, new Object[0]);
                    }
                    throw e0.p(this.f53226c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                }
                throw e0.p(this.f53226c, i10, "@HeaderMap parameter type must be Map or Headers.", new Object[0]);
            } else if (annotation instanceof xv.c) {
                j(i10, type);
                if (this.f53240q) {
                    xv.c cVar = (xv.c) annotation;
                    String value4 = cVar.value();
                    boolean encoded3 = cVar.encoded();
                    this.f53230g = true;
                    Class h15 = e0.h(type);
                    if (Iterable.class.isAssignableFrom(h15)) {
                        if (type instanceof ParameterizedType) {
                            return new u.d(value4, this.f53224a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded3).c();
                        }
                        throw e0.p(this.f53226c, i10, h15.getSimpleName() + " must include generic type (e.g., " + h15.getSimpleName() + "<String>)", new Object[0]);
                    } else if (h15.isArray()) {
                        return new u.d(value4, this.f53224a.j(a(h15.getComponentType()), annotationArr), encoded3).b();
                    } else {
                        return new u.d(value4, this.f53224a.j(type, annotationArr), encoded3);
                    }
                }
                throw e0.p(this.f53226c, i10, "@Field parameters can only be used with form encoding.", new Object[0]);
            } else if (annotation instanceof xv.d) {
                j(i10, type);
                if (this.f53240q) {
                    Class h16 = e0.h(type);
                    if (Map.class.isAssignableFrom(h16)) {
                        Type i13 = e0.i(type, h16, Map.class);
                        if (i13 instanceof ParameterizedType) {
                            ParameterizedType parameterizedType3 = (ParameterizedType) i13;
                            Type g12 = e0.g(0, parameterizedType3);
                            if (String.class == g12) {
                                h j10 = this.f53224a.j(e0.g(1, parameterizedType3), annotationArr);
                                this.f53230g = true;
                                return new u.e(this.f53226c, i10, j10, ((xv.d) annotation).encoded());
                            }
                            throw e0.p(this.f53226c, i10, "@FieldMap keys must be of type String: " + g12, new Object[0]);
                        }
                        throw e0.p(this.f53226c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                    }
                    throw e0.p(this.f53226c, i10, "@FieldMap parameter type must be Map.", new Object[0]);
                }
                throw e0.p(this.f53226c, i10, "@FieldMap parameters can only be used with form encoding.", new Object[0]);
            } else if (annotation instanceof xv.q) {
                j(i10, type);
                if (this.f53241r) {
                    xv.q qVar = (xv.q) annotation;
                    this.f53231h = true;
                    String value5 = qVar.value();
                    Class h17 = e0.h(type);
                    if (value5.isEmpty()) {
                        if (Iterable.class.isAssignableFrom(h17)) {
                            if (type instanceof ParameterizedType) {
                                if (MultipartBody.b.class.isAssignableFrom(e0.h(e0.g(0, (ParameterizedType) type)))) {
                                    return u.o.f53188a.c();
                                }
                                throw e0.p(this.f53226c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                            }
                            throw e0.p(this.f53226c, i10, h17.getSimpleName() + " must include generic type (e.g., " + h17.getSimpleName() + "<String>)", new Object[0]);
                        } else if (h17.isArray()) {
                            if (MultipartBody.b.class.isAssignableFrom(h17.getComponentType())) {
                                return u.o.f53188a.b();
                            }
                            throw e0.p(this.f53226c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                        } else if (MultipartBody.b.class.isAssignableFrom(h17)) {
                            return u.o.f53188a;
                        } else {
                            throw e0.p(this.f53226c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                        }
                    }
                    Headers h18 = Headers.h("Content-Disposition", "form-data; name=\"" + value5 + "\"", "Content-Transfer-Encoding", qVar.encoding());
                    if (Iterable.class.isAssignableFrom(h17)) {
                        if (type instanceof ParameterizedType) {
                            Type g13 = e0.g(0, (ParameterizedType) type);
                            if (!MultipartBody.b.class.isAssignableFrom(e0.h(g13))) {
                                return new u.i(this.f53226c, i10, h18, this.f53224a.h(g13, annotationArr, this.f53227d)).c();
                            }
                            throw e0.p(this.f53226c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                        }
                        throw e0.p(this.f53226c, i10, h17.getSimpleName() + " must include generic type (e.g., " + h17.getSimpleName() + "<String>)", new Object[0]);
                    } else if (h17.isArray()) {
                        Class a10 = a(h17.getComponentType());
                        if (!MultipartBody.b.class.isAssignableFrom(a10)) {
                            return new u.i(this.f53226c, i10, h18, this.f53224a.h(a10, annotationArr, this.f53227d)).b();
                        }
                        throw e0.p(this.f53226c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                    } else if (!MultipartBody.b.class.isAssignableFrom(h17)) {
                        return new u.i(this.f53226c, i10, h18, this.f53224a.h(type, annotationArr, this.f53227d));
                    } else {
                        throw e0.p(this.f53226c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                    }
                }
                throw e0.p(this.f53226c, i10, "@Part parameters can only be used with multipart encoding.", new Object[0]);
            } else if (annotation instanceof xv.r) {
                j(i10, type);
                if (this.f53241r) {
                    this.f53231h = true;
                    Class h19 = e0.h(type);
                    if (Map.class.isAssignableFrom(h19)) {
                        Type i14 = e0.i(type, h19, Map.class);
                        if (i14 instanceof ParameterizedType) {
                            ParameterizedType parameterizedType4 = (ParameterizedType) i14;
                            Type g14 = e0.g(0, parameterizedType4);
                            if (String.class == g14) {
                                Type g15 = e0.g(1, parameterizedType4);
                                if (!MultipartBody.b.class.isAssignableFrom(e0.h(g15))) {
                                    return new u.j(this.f53226c, i10, this.f53224a.h(g15, annotationArr, this.f53227d), ((xv.r) annotation).encoding());
                                }
                                throw e0.p(this.f53226c, i10, "@PartMap values cannot be MultipartBody.Part. Use @Part List<Part> or a different value type instead.", new Object[0]);
                            }
                            throw e0.p(this.f53226c, i10, "@PartMap keys must be of type String: " + g14, new Object[0]);
                        }
                        throw e0.p(this.f53226c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                    }
                    throw e0.p(this.f53226c, i10, "@PartMap parameter type must be Map.", new Object[0]);
                }
                throw e0.p(this.f53226c, i10, "@PartMap parameters can only be used with multipart encoding.", new Object[0]);
            } else if (annotation instanceof xv.a) {
                j(i10, type);
                if (!this.f53240q && !this.f53241r) {
                    if (!this.f53232i) {
                        try {
                            h h20 = this.f53224a.h(type, annotationArr, this.f53227d);
                            this.f53232i = true;
                            return new u.c(this.f53226c, i10, h20);
                        } catch (RuntimeException e10) {
                            throw e0.q(this.f53226c, e10, i10, "Unable to create @Body converter for %s", type);
                        }
                    }
                    throw e0.p(this.f53226c, i10, "Multiple @Body method annotations found.", new Object[0]);
                }
                throw e0.p(this.f53226c, i10, "@Body parameters cannot be used with form or multi-part encoding.", new Object[0]);
            } else if (annotation instanceof xv.x) {
                j(i10, type);
                Class h21 = e0.h(type);
                for (int i15 = i10 - 1; i15 >= 0; i15--) {
                    u uVar = this.f53246w[i15];
                    if ((uVar instanceof u.q) && ((u.q) uVar).f53191a.equals(h21)) {
                        throw e0.p(this.f53226c, i10, "@Tag type " + h21.getName() + " is duplicate of " + v.f53193b.a(this.f53226c, i15) + " and would always overwrite its value.", new Object[0]);
                    }
                }
                return new u.q(h21);
            } else {
                return null;
            }
        }

        static Set h(String str) {
            Matcher matcher = f53222y.matcher(str);
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            while (matcher.find()) {
                linkedHashSet.add(matcher.group(1));
            }
            return linkedHashSet;
        }

        private void i(int i10, String str) {
            if (f53223z.matcher(str).matches()) {
                if (this.f53245v.contains(str)) {
                    return;
                }
                throw e0.p(this.f53226c, i10, "URL \"%s\" does not contain \"{%s}\".", this.f53242s, str);
            }
            throw e0.p(this.f53226c, i10, "@Path parameter name must match %s. Found: %s", f53222y.pattern(), str);
        }

        private void j(int i10, Type type) {
            if (!e0.j(type)) {
                return;
            }
            throw e0.p(this.f53226c, i10, "Parameter type must not include a type variable or wildcard: %s", type);
        }

        y b() {
            boolean z10;
            for (Annotation annotation : this.f53227d) {
                e(annotation);
            }
            if (this.f53238o != null) {
                if (!this.f53239p) {
                    if (!this.f53241r) {
                        if (this.f53240q) {
                            throw e0.n(this.f53226c, "FormUrlEncoded can only be specified on HTTP methods with request body (e.g., @POST).", new Object[0]);
                        }
                    } else {
                        throw e0.n(this.f53226c, "Multipart can only be specified on HTTP methods with request body (e.g., @POST).", new Object[0]);
                    }
                }
                int length = this.f53228e.length;
                this.f53246w = new u[length];
                int i10 = length - 1;
                for (int i11 = 0; i11 < length; i11++) {
                    u[] uVarArr = this.f53246w;
                    Type type = this.f53229f[i11];
                    Annotation[] annotationArr = this.f53228e[i11];
                    if (i11 == i10) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    uVarArr[i11] = f(i11, type, annotationArr, z10);
                }
                if (this.f53242s == null && !this.f53237n) {
                    throw e0.n(this.f53226c, "Missing either @%s URL or @Url parameter.", this.f53238o);
                }
                boolean z11 = this.f53240q;
                if (!z11 && !this.f53241r && !this.f53239p && this.f53232i) {
                    throw e0.n(this.f53226c, "Non-body HTTP method cannot contain @Body.", new Object[0]);
                }
                if (z11 && !this.f53230g) {
                    throw e0.n(this.f53226c, "Form-encoded method must contain at least one @Field.", new Object[0]);
                }
                if (this.f53241r && !this.f53231h) {
                    throw e0.n(this.f53226c, "Multipart method must contain at least one @Part.", new Object[0]);
                }
                return new y(this);
            }
            throw e0.n(this.f53226c, "HTTP method annotation is required (e.g., @GET, @POST, etc.).", new Object[0]);
        }
    }

    y(a aVar) {
        this.f53210a = aVar.f53225b;
        this.f53211b = aVar.f53226c;
        this.f53212c = aVar.f53224a.f53048c;
        this.f53213d = aVar.f53238o;
        this.f53214e = aVar.f53242s;
        this.f53215f = aVar.f53243t;
        this.f53216g = aVar.f53244u;
        this.f53217h = aVar.f53239p;
        this.f53218i = aVar.f53240q;
        this.f53219j = aVar.f53241r;
        this.f53220k = aVar.f53246w;
        this.f53221l = aVar.f53247x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static y b(a0 a0Var, Class cls, Method method) {
        return new a(a0Var, cls, method).b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Request a(Object obj, Object[] objArr) {
        u[] uVarArr = this.f53220k;
        int length = objArr.length;
        if (length == uVarArr.length) {
            x xVar = new x(this.f53213d, this.f53212c, this.f53214e, this.f53215f, this.f53216g, this.f53217h, this.f53218i, this.f53219j);
            if (this.f53221l) {
                length--;
            }
            ArrayList arrayList = new ArrayList(length);
            for (int i10 = 0; i10 < length; i10++) {
                arrayList.add(objArr[i10]);
                uVarArr[i10].a(xVar, objArr[i10]);
            }
            return xVar.k().j(q.class, new q(this.f53210a, obj, this.f53211b, arrayList)).b();
        }
        throw new IllegalArgumentException("Argument count (" + length + ") doesn't match expected count (" + uVarArr.length + ")");
    }
}
