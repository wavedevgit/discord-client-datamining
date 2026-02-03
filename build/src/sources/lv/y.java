package lv;

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
import lv.u;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.Request;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final Class f37509a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f37510b;

    /* renamed from: c  reason: collision with root package name */
    private final HttpUrl f37511c;

    /* renamed from: d  reason: collision with root package name */
    final String f37512d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37513e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f37514f;

    /* renamed from: g  reason: collision with root package name */
    private final MediaType f37515g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f37516h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f37517i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f37518j;

    /* renamed from: k  reason: collision with root package name */
    private final u[] f37519k;

    /* renamed from: l  reason: collision with root package name */
    final boolean f37520l;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: y  reason: collision with root package name */
        private static final Pattern f37521y = Pattern.compile("\\{([a-zA-Z][a-zA-Z0-9_-]*)\\}");

        /* renamed from: z  reason: collision with root package name */
        private static final Pattern f37522z = Pattern.compile("[a-zA-Z][a-zA-Z0-9_-]*");

        /* renamed from: a  reason: collision with root package name */
        final a0 f37523a;

        /* renamed from: b  reason: collision with root package name */
        final Class f37524b;

        /* renamed from: c  reason: collision with root package name */
        final Method f37525c;

        /* renamed from: d  reason: collision with root package name */
        final Annotation[] f37526d;

        /* renamed from: e  reason: collision with root package name */
        final Annotation[][] f37527e;

        /* renamed from: f  reason: collision with root package name */
        final Type[] f37528f;

        /* renamed from: g  reason: collision with root package name */
        boolean f37529g;

        /* renamed from: h  reason: collision with root package name */
        boolean f37530h;

        /* renamed from: i  reason: collision with root package name */
        boolean f37531i;

        /* renamed from: j  reason: collision with root package name */
        boolean f37532j;

        /* renamed from: k  reason: collision with root package name */
        boolean f37533k;

        /* renamed from: l  reason: collision with root package name */
        boolean f37534l;

        /* renamed from: m  reason: collision with root package name */
        boolean f37535m;

        /* renamed from: n  reason: collision with root package name */
        boolean f37536n;

        /* renamed from: o  reason: collision with root package name */
        String f37537o;

        /* renamed from: p  reason: collision with root package name */
        boolean f37538p;

        /* renamed from: q  reason: collision with root package name */
        boolean f37539q;

        /* renamed from: r  reason: collision with root package name */
        boolean f37540r;

        /* renamed from: s  reason: collision with root package name */
        String f37541s;

        /* renamed from: t  reason: collision with root package name */
        Headers f37542t;

        /* renamed from: u  reason: collision with root package name */
        MediaType f37543u;

        /* renamed from: v  reason: collision with root package name */
        Set f37544v;

        /* renamed from: w  reason: collision with root package name */
        u[] f37545w;

        /* renamed from: x  reason: collision with root package name */
        boolean f37546x;

        a(a0 a0Var, Class cls, Method method) {
            this.f37523a = a0Var;
            this.f37524b = cls;
            this.f37525c = method;
            this.f37526d = method.getAnnotations();
            this.f37528f = method.getGenericParameterTypes();
            this.f37527e = method.getParameterAnnotations();
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
                            this.f37543u = MediaType.e(trim);
                        } catch (IllegalArgumentException e10) {
                            throw e0.o(this.f37525c, e10, "Malformed content type: %s", trim);
                        }
                    } else if (z10) {
                        aVar.e(substring, trim);
                    } else {
                        aVar.a(substring, trim);
                    }
                } else {
                    throw e0.n(this.f37525c, "@Headers value must be in the form \"Name: Value\". Found: \"%s\"", str);
                }
            }
            return aVar.f();
        }

        private void d(String str, String str2, boolean z10) {
            String str3 = this.f37537o;
            if (str3 == null) {
                this.f37537o = str;
                this.f37538p = z10;
                if (str2.isEmpty()) {
                    return;
                }
                int indexOf = str2.indexOf(63);
                if (indexOf != -1 && indexOf < str2.length() - 1) {
                    String substring = str2.substring(indexOf + 1);
                    if (f37521y.matcher(substring).find()) {
                        throw e0.n(this.f37525c, "URL query string \"%s\" must not have replace block. For dynamic query parameters use @Query.", substring);
                    }
                }
                this.f37541s = str2;
                this.f37544v = h(str2);
                return;
            }
            throw e0.n(this.f37525c, "Only one HTTP method is allowed. Found: %s and %s.", str3, str);
        }

        private void e(Annotation annotation) {
            if (annotation instanceof nv.b) {
                d("DELETE", ((nv.b) annotation).value(), false);
            } else if (annotation instanceof nv.f) {
                d("GET", ((nv.f) annotation).value(), false);
            } else if (annotation instanceof nv.g) {
                d("HEAD", ((nv.g) annotation).value(), false);
            } else if (annotation instanceof nv.n) {
                d("PATCH", ((nv.n) annotation).value(), true);
            } else if (annotation instanceof nv.o) {
                d("POST", ((nv.o) annotation).value(), true);
            } else if (annotation instanceof nv.p) {
                d("PUT", ((nv.p) annotation).value(), true);
            } else if (annotation instanceof nv.m) {
                d("OPTIONS", ((nv.m) annotation).value(), false);
            } else if (annotation instanceof nv.h) {
                nv.h hVar = (nv.h) annotation;
                d(hVar.method(), hVar.path(), hVar.hasBody());
            } else if (annotation instanceof nv.k) {
                nv.k kVar = (nv.k) annotation;
                String[] value = kVar.value();
                if (value.length != 0) {
                    this.f37542t = c(value, kVar.allowUnsafeNonAsciiValues());
                    return;
                }
                throw e0.n(this.f37525c, "@Headers annotation is empty.", new Object[0]);
            } else if (annotation instanceof nv.l) {
                if (!this.f37539q) {
                    this.f37540r = true;
                    return;
                }
                throw e0.n(this.f37525c, "Only one encoding annotation is allowed.", new Object[0]);
            } else if (annotation instanceof nv.e) {
                if (!this.f37540r) {
                    this.f37539q = true;
                    return;
                }
                throw e0.n(this.f37525c, "Only one encoding annotation is allowed.", new Object[0]);
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
                            throw e0.p(this.f37525c, i10, "Multiple Retrofit annotations found, only one allowed.", new Object[0]);
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
                            this.f37546x = true;
                            return null;
                        }
                    } catch (NoClassDefFoundError unused) {
                    }
                }
                throw e0.p(this.f37525c, i10, "No Retrofit annotation found.", new Object[0]);
            }
            return uVar;
        }

        private u g(int i10, Type type, Annotation[] annotationArr, Annotation annotation) {
            if (annotation instanceof nv.y) {
                j(i10, type);
                if (!this.f37536n) {
                    if (!this.f37532j) {
                        if (!this.f37533k) {
                            if (!this.f37534l) {
                                if (!this.f37535m) {
                                    if (this.f37541s == null) {
                                        this.f37536n = true;
                                        if (type != HttpUrl.class && type != String.class && type != URI.class && (!(type instanceof Class) || !"android.net.Uri".equals(((Class) type).getName()))) {
                                            throw e0.p(this.f37525c, i10, "@Url must be okhttp3.HttpUrl, String, java.net.URI, or android.net.Uri type.", new Object[0]);
                                        }
                                        return new u.p(this.f37525c, i10);
                                    }
                                    throw e0.p(this.f37525c, i10, "@Url cannot be used with @%s URL", this.f37537o);
                                }
                                throw e0.p(this.f37525c, i10, "A @Url parameter must not come after a @QueryMap.", new Object[0]);
                            }
                            throw e0.p(this.f37525c, i10, "A @Url parameter must not come after a @QueryName.", new Object[0]);
                        }
                        throw e0.p(this.f37525c, i10, "A @Url parameter must not come after a @Query.", new Object[0]);
                    }
                    throw e0.p(this.f37525c, i10, "@Path parameters may not be used with @Url.", new Object[0]);
                }
                throw e0.p(this.f37525c, i10, "Multiple @Url method annotations found.", new Object[0]);
            } else if (annotation instanceof nv.s) {
                j(i10, type);
                if (!this.f37533k) {
                    if (!this.f37534l) {
                        if (!this.f37535m) {
                            if (!this.f37536n) {
                                if (this.f37541s != null) {
                                    this.f37532j = true;
                                    nv.s sVar = (nv.s) annotation;
                                    String value = sVar.value();
                                    i(i10, value);
                                    return new u.k(this.f37525c, i10, value, this.f37523a.j(type, annotationArr), sVar.encoded());
                                }
                                throw e0.p(this.f37525c, i10, "@Path can only be used with relative url on @%s", this.f37537o);
                            }
                            throw e0.p(this.f37525c, i10, "@Path parameters may not be used with @Url.", new Object[0]);
                        }
                        throw e0.p(this.f37525c, i10, "A @Path parameter must not come after a @QueryMap.", new Object[0]);
                    }
                    throw e0.p(this.f37525c, i10, "A @Path parameter must not come after a @QueryName.", new Object[0]);
                }
                throw e0.p(this.f37525c, i10, "A @Path parameter must not come after a @Query.", new Object[0]);
            } else if (annotation instanceof nv.t) {
                j(i10, type);
                nv.t tVar = (nv.t) annotation;
                String value2 = tVar.value();
                boolean encoded = tVar.encoded();
                Class h10 = e0.h(type);
                this.f37533k = true;
                if (Iterable.class.isAssignableFrom(h10)) {
                    if (type instanceof ParameterizedType) {
                        return new u.l(value2, this.f37523a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded).c();
                    }
                    throw e0.p(this.f37525c, i10, h10.getSimpleName() + " must include generic type (e.g., " + h10.getSimpleName() + "<String>)", new Object[0]);
                } else if (h10.isArray()) {
                    return new u.l(value2, this.f37523a.j(a(h10.getComponentType()), annotationArr), encoded).b();
                } else {
                    return new u.l(value2, this.f37523a.j(type, annotationArr), encoded);
                }
            } else if (annotation instanceof nv.v) {
                j(i10, type);
                boolean encoded2 = ((nv.v) annotation).encoded();
                Class h11 = e0.h(type);
                this.f37534l = true;
                if (Iterable.class.isAssignableFrom(h11)) {
                    if (type instanceof ParameterizedType) {
                        return new u.n(this.f37523a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded2).c();
                    }
                    throw e0.p(this.f37525c, i10, h11.getSimpleName() + " must include generic type (e.g., " + h11.getSimpleName() + "<String>)", new Object[0]);
                } else if (h11.isArray()) {
                    return new u.n(this.f37523a.j(a(h11.getComponentType()), annotationArr), encoded2).b();
                } else {
                    return new u.n(this.f37523a.j(type, annotationArr), encoded2);
                }
            } else if (annotation instanceof nv.u) {
                j(i10, type);
                Class h12 = e0.h(type);
                this.f37535m = true;
                if (Map.class.isAssignableFrom(h12)) {
                    Type i11 = e0.i(type, h12, Map.class);
                    if (i11 instanceof ParameterizedType) {
                        ParameterizedType parameterizedType = (ParameterizedType) i11;
                        Type g10 = e0.g(0, parameterizedType);
                        if (String.class == g10) {
                            return new u.m(this.f37525c, i10, this.f37523a.j(e0.g(1, parameterizedType), annotationArr), ((nv.u) annotation).encoded());
                        }
                        throw e0.p(this.f37525c, i10, "@QueryMap keys must be of type String: " + g10, new Object[0]);
                    }
                    throw e0.p(this.f37525c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                }
                throw e0.p(this.f37525c, i10, "@QueryMap parameter type must be Map.", new Object[0]);
            } else if (annotation instanceof nv.i) {
                j(i10, type);
                nv.i iVar = (nv.i) annotation;
                String value3 = iVar.value();
                Class h13 = e0.h(type);
                if (Iterable.class.isAssignableFrom(h13)) {
                    if (type instanceof ParameterizedType) {
                        return new u.f(value3, this.f37523a.j(e0.g(0, (ParameterizedType) type), annotationArr), iVar.allowUnsafeNonAsciiValues()).c();
                    }
                    throw e0.p(this.f37525c, i10, h13.getSimpleName() + " must include generic type (e.g., " + h13.getSimpleName() + "<String>)", new Object[0]);
                } else if (h13.isArray()) {
                    return new u.f(value3, this.f37523a.j(a(h13.getComponentType()), annotationArr), iVar.allowUnsafeNonAsciiValues()).b();
                } else {
                    return new u.f(value3, this.f37523a.j(type, annotationArr), iVar.allowUnsafeNonAsciiValues());
                }
            } else if (annotation instanceof nv.j) {
                if (type == Headers.class) {
                    return new u.h(this.f37525c, i10);
                }
                j(i10, type);
                Class h14 = e0.h(type);
                if (Map.class.isAssignableFrom(h14)) {
                    Type i12 = e0.i(type, h14, Map.class);
                    if (i12 instanceof ParameterizedType) {
                        ParameterizedType parameterizedType2 = (ParameterizedType) i12;
                        Type g11 = e0.g(0, parameterizedType2);
                        if (String.class == g11) {
                            return new u.g(this.f37525c, i10, this.f37523a.j(e0.g(1, parameterizedType2), annotationArr), ((nv.j) annotation).allowUnsafeNonAsciiValues());
                        }
                        throw e0.p(this.f37525c, i10, "@HeaderMap keys must be of type String: " + g11, new Object[0]);
                    }
                    throw e0.p(this.f37525c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                }
                throw e0.p(this.f37525c, i10, "@HeaderMap parameter type must be Map or Headers.", new Object[0]);
            } else if (annotation instanceof nv.c) {
                j(i10, type);
                if (this.f37539q) {
                    nv.c cVar = (nv.c) annotation;
                    String value4 = cVar.value();
                    boolean encoded3 = cVar.encoded();
                    this.f37529g = true;
                    Class h15 = e0.h(type);
                    if (Iterable.class.isAssignableFrom(h15)) {
                        if (type instanceof ParameterizedType) {
                            return new u.d(value4, this.f37523a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded3).c();
                        }
                        throw e0.p(this.f37525c, i10, h15.getSimpleName() + " must include generic type (e.g., " + h15.getSimpleName() + "<String>)", new Object[0]);
                    } else if (h15.isArray()) {
                        return new u.d(value4, this.f37523a.j(a(h15.getComponentType()), annotationArr), encoded3).b();
                    } else {
                        return new u.d(value4, this.f37523a.j(type, annotationArr), encoded3);
                    }
                }
                throw e0.p(this.f37525c, i10, "@Field parameters can only be used with form encoding.", new Object[0]);
            } else if (annotation instanceof nv.d) {
                j(i10, type);
                if (this.f37539q) {
                    Class h16 = e0.h(type);
                    if (Map.class.isAssignableFrom(h16)) {
                        Type i13 = e0.i(type, h16, Map.class);
                        if (i13 instanceof ParameterizedType) {
                            ParameterizedType parameterizedType3 = (ParameterizedType) i13;
                            Type g12 = e0.g(0, parameterizedType3);
                            if (String.class == g12) {
                                h j10 = this.f37523a.j(e0.g(1, parameterizedType3), annotationArr);
                                this.f37529g = true;
                                return new u.e(this.f37525c, i10, j10, ((nv.d) annotation).encoded());
                            }
                            throw e0.p(this.f37525c, i10, "@FieldMap keys must be of type String: " + g12, new Object[0]);
                        }
                        throw e0.p(this.f37525c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                    }
                    throw e0.p(this.f37525c, i10, "@FieldMap parameter type must be Map.", new Object[0]);
                }
                throw e0.p(this.f37525c, i10, "@FieldMap parameters can only be used with form encoding.", new Object[0]);
            } else if (annotation instanceof nv.q) {
                j(i10, type);
                if (this.f37540r) {
                    nv.q qVar = (nv.q) annotation;
                    this.f37530h = true;
                    String value5 = qVar.value();
                    Class h17 = e0.h(type);
                    if (value5.isEmpty()) {
                        if (Iterable.class.isAssignableFrom(h17)) {
                            if (type instanceof ParameterizedType) {
                                if (MultipartBody.b.class.isAssignableFrom(e0.h(e0.g(0, (ParameterizedType) type)))) {
                                    return u.o.f37487a.c();
                                }
                                throw e0.p(this.f37525c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                            }
                            throw e0.p(this.f37525c, i10, h17.getSimpleName() + " must include generic type (e.g., " + h17.getSimpleName() + "<String>)", new Object[0]);
                        } else if (h17.isArray()) {
                            if (MultipartBody.b.class.isAssignableFrom(h17.getComponentType())) {
                                return u.o.f37487a.b();
                            }
                            throw e0.p(this.f37525c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                        } else if (MultipartBody.b.class.isAssignableFrom(h17)) {
                            return u.o.f37487a;
                        } else {
                            throw e0.p(this.f37525c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                        }
                    }
                    Headers h18 = Headers.h("Content-Disposition", "form-data; name=\"" + value5 + "\"", "Content-Transfer-Encoding", qVar.encoding());
                    if (Iterable.class.isAssignableFrom(h17)) {
                        if (type instanceof ParameterizedType) {
                            Type g13 = e0.g(0, (ParameterizedType) type);
                            if (!MultipartBody.b.class.isAssignableFrom(e0.h(g13))) {
                                return new u.i(this.f37525c, i10, h18, this.f37523a.h(g13, annotationArr, this.f37526d)).c();
                            }
                            throw e0.p(this.f37525c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                        }
                        throw e0.p(this.f37525c, i10, h17.getSimpleName() + " must include generic type (e.g., " + h17.getSimpleName() + "<String>)", new Object[0]);
                    } else if (h17.isArray()) {
                        Class a10 = a(h17.getComponentType());
                        if (!MultipartBody.b.class.isAssignableFrom(a10)) {
                            return new u.i(this.f37525c, i10, h18, this.f37523a.h(a10, annotationArr, this.f37526d)).b();
                        }
                        throw e0.p(this.f37525c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                    } else if (!MultipartBody.b.class.isAssignableFrom(h17)) {
                        return new u.i(this.f37525c, i10, h18, this.f37523a.h(type, annotationArr, this.f37526d));
                    } else {
                        throw e0.p(this.f37525c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                    }
                }
                throw e0.p(this.f37525c, i10, "@Part parameters can only be used with multipart encoding.", new Object[0]);
            } else if (annotation instanceof nv.r) {
                j(i10, type);
                if (this.f37540r) {
                    this.f37530h = true;
                    Class h19 = e0.h(type);
                    if (Map.class.isAssignableFrom(h19)) {
                        Type i14 = e0.i(type, h19, Map.class);
                        if (i14 instanceof ParameterizedType) {
                            ParameterizedType parameterizedType4 = (ParameterizedType) i14;
                            Type g14 = e0.g(0, parameterizedType4);
                            if (String.class == g14) {
                                Type g15 = e0.g(1, parameterizedType4);
                                if (!MultipartBody.b.class.isAssignableFrom(e0.h(g15))) {
                                    return new u.j(this.f37525c, i10, this.f37523a.h(g15, annotationArr, this.f37526d), ((nv.r) annotation).encoding());
                                }
                                throw e0.p(this.f37525c, i10, "@PartMap values cannot be MultipartBody.Part. Use @Part List<Part> or a different value type instead.", new Object[0]);
                            }
                            throw e0.p(this.f37525c, i10, "@PartMap keys must be of type String: " + g14, new Object[0]);
                        }
                        throw e0.p(this.f37525c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                    }
                    throw e0.p(this.f37525c, i10, "@PartMap parameter type must be Map.", new Object[0]);
                }
                throw e0.p(this.f37525c, i10, "@PartMap parameters can only be used with multipart encoding.", new Object[0]);
            } else if (annotation instanceof nv.a) {
                j(i10, type);
                if (!this.f37539q && !this.f37540r) {
                    if (!this.f37531i) {
                        try {
                            h h20 = this.f37523a.h(type, annotationArr, this.f37526d);
                            this.f37531i = true;
                            return new u.c(this.f37525c, i10, h20);
                        } catch (RuntimeException e10) {
                            throw e0.q(this.f37525c, e10, i10, "Unable to create @Body converter for %s", type);
                        }
                    }
                    throw e0.p(this.f37525c, i10, "Multiple @Body method annotations found.", new Object[0]);
                }
                throw e0.p(this.f37525c, i10, "@Body parameters cannot be used with form or multi-part encoding.", new Object[0]);
            } else if (annotation instanceof nv.x) {
                j(i10, type);
                Class h21 = e0.h(type);
                for (int i15 = i10 - 1; i15 >= 0; i15--) {
                    u uVar = this.f37545w[i15];
                    if ((uVar instanceof u.q) && ((u.q) uVar).f37490a.equals(h21)) {
                        throw e0.p(this.f37525c, i10, "@Tag type " + h21.getName() + " is duplicate of " + v.f37492b.a(this.f37525c, i15) + " and would always overwrite its value.", new Object[0]);
                    }
                }
                return new u.q(h21);
            } else {
                return null;
            }
        }

        static Set h(String str) {
            Matcher matcher = f37521y.matcher(str);
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            while (matcher.find()) {
                linkedHashSet.add(matcher.group(1));
            }
            return linkedHashSet;
        }

        private void i(int i10, String str) {
            if (f37522z.matcher(str).matches()) {
                if (this.f37544v.contains(str)) {
                    return;
                }
                throw e0.p(this.f37525c, i10, "URL \"%s\" does not contain \"{%s}\".", this.f37541s, str);
            }
            throw e0.p(this.f37525c, i10, "@Path parameter name must match %s. Found: %s", f37521y.pattern(), str);
        }

        private void j(int i10, Type type) {
            if (!e0.j(type)) {
                return;
            }
            throw e0.p(this.f37525c, i10, "Parameter type must not include a type variable or wildcard: %s", type);
        }

        y b() {
            boolean z10;
            for (Annotation annotation : this.f37526d) {
                e(annotation);
            }
            if (this.f37537o != null) {
                if (!this.f37538p) {
                    if (!this.f37540r) {
                        if (this.f37539q) {
                            throw e0.n(this.f37525c, "FormUrlEncoded can only be specified on HTTP methods with request body (e.g., @POST).", new Object[0]);
                        }
                    } else {
                        throw e0.n(this.f37525c, "Multipart can only be specified on HTTP methods with request body (e.g., @POST).", new Object[0]);
                    }
                }
                int length = this.f37527e.length;
                this.f37545w = new u[length];
                int i10 = length - 1;
                for (int i11 = 0; i11 < length; i11++) {
                    u[] uVarArr = this.f37545w;
                    Type type = this.f37528f[i11];
                    Annotation[] annotationArr = this.f37527e[i11];
                    if (i11 == i10) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    uVarArr[i11] = f(i11, type, annotationArr, z10);
                }
                if (this.f37541s == null && !this.f37536n) {
                    throw e0.n(this.f37525c, "Missing either @%s URL or @Url parameter.", this.f37537o);
                }
                boolean z11 = this.f37539q;
                if (!z11 && !this.f37540r && !this.f37538p && this.f37531i) {
                    throw e0.n(this.f37525c, "Non-body HTTP method cannot contain @Body.", new Object[0]);
                }
                if (z11 && !this.f37529g) {
                    throw e0.n(this.f37525c, "Form-encoded method must contain at least one @Field.", new Object[0]);
                }
                if (this.f37540r && !this.f37530h) {
                    throw e0.n(this.f37525c, "Multipart method must contain at least one @Part.", new Object[0]);
                }
                return new y(this);
            }
            throw e0.n(this.f37525c, "HTTP method annotation is required (e.g., @GET, @POST, etc.).", new Object[0]);
        }
    }

    y(a aVar) {
        this.f37509a = aVar.f37524b;
        this.f37510b = aVar.f37525c;
        this.f37511c = aVar.f37523a.f37347c;
        this.f37512d = aVar.f37537o;
        this.f37513e = aVar.f37541s;
        this.f37514f = aVar.f37542t;
        this.f37515g = aVar.f37543u;
        this.f37516h = aVar.f37538p;
        this.f37517i = aVar.f37539q;
        this.f37518j = aVar.f37540r;
        this.f37519k = aVar.f37545w;
        this.f37520l = aVar.f37546x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static y b(a0 a0Var, Class cls, Method method) {
        return new a(a0Var, cls, method).b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Request a(Object obj, Object[] objArr) {
        u[] uVarArr = this.f37519k;
        int length = objArr.length;
        if (length == uVarArr.length) {
            x xVar = new x(this.f37512d, this.f37511c, this.f37513e, this.f37514f, this.f37515g, this.f37516h, this.f37517i, this.f37518j);
            if (this.f37520l) {
                length--;
            }
            ArrayList arrayList = new ArrayList(length);
            for (int i10 = 0; i10 < length; i10++) {
                arrayList.add(objArr[i10]);
                uVarArr[i10].a(xVar, objArr[i10]);
            }
            return xVar.k().j(q.class, new q(this.f37509a, obj, this.f37510b, arrayList)).b();
        }
        throw new IllegalArgumentException("Argument count (" + length + ") doesn't match expected count (" + uVarArr.length + ")");
    }
}
