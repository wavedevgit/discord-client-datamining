package fw;

import fw.u;
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
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final Class f24563a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f24564b;

    /* renamed from: c  reason: collision with root package name */
    private final HttpUrl f24565c;

    /* renamed from: d  reason: collision with root package name */
    final String f24566d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24567e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f24568f;

    /* renamed from: g  reason: collision with root package name */
    private final MediaType f24569g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f24570h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f24571i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f24572j;

    /* renamed from: k  reason: collision with root package name */
    private final u[] f24573k;

    /* renamed from: l  reason: collision with root package name */
    final boolean f24574l;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: y  reason: collision with root package name */
        private static final Pattern f24575y = Pattern.compile("\\{([a-zA-Z][a-zA-Z0-9_-]*)\\}");

        /* renamed from: z  reason: collision with root package name */
        private static final Pattern f24576z = Pattern.compile("[a-zA-Z][a-zA-Z0-9_-]*");

        /* renamed from: a  reason: collision with root package name */
        final a0 f24577a;

        /* renamed from: b  reason: collision with root package name */
        final Class f24578b;

        /* renamed from: c  reason: collision with root package name */
        final Method f24579c;

        /* renamed from: d  reason: collision with root package name */
        final Annotation[] f24580d;

        /* renamed from: e  reason: collision with root package name */
        final Annotation[][] f24581e;

        /* renamed from: f  reason: collision with root package name */
        final Type[] f24582f;

        /* renamed from: g  reason: collision with root package name */
        boolean f24583g;

        /* renamed from: h  reason: collision with root package name */
        boolean f24584h;

        /* renamed from: i  reason: collision with root package name */
        boolean f24585i;

        /* renamed from: j  reason: collision with root package name */
        boolean f24586j;

        /* renamed from: k  reason: collision with root package name */
        boolean f24587k;

        /* renamed from: l  reason: collision with root package name */
        boolean f24588l;

        /* renamed from: m  reason: collision with root package name */
        boolean f24589m;

        /* renamed from: n  reason: collision with root package name */
        boolean f24590n;

        /* renamed from: o  reason: collision with root package name */
        String f24591o;

        /* renamed from: p  reason: collision with root package name */
        boolean f24592p;

        /* renamed from: q  reason: collision with root package name */
        boolean f24593q;

        /* renamed from: r  reason: collision with root package name */
        boolean f24594r;

        /* renamed from: s  reason: collision with root package name */
        String f24595s;

        /* renamed from: t  reason: collision with root package name */
        Headers f24596t;

        /* renamed from: u  reason: collision with root package name */
        MediaType f24597u;

        /* renamed from: v  reason: collision with root package name */
        Set f24598v;

        /* renamed from: w  reason: collision with root package name */
        u[] f24599w;

        /* renamed from: x  reason: collision with root package name */
        boolean f24600x;

        a(a0 a0Var, Class cls, Method method) {
            this.f24577a = a0Var;
            this.f24578b = cls;
            this.f24579c = method;
            this.f24580d = method.getAnnotations();
            this.f24582f = method.getGenericParameterTypes();
            this.f24581e = method.getParameterAnnotations();
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
                            this.f24597u = MediaType.e(trim);
                        } catch (IllegalArgumentException e10) {
                            throw e0.o(this.f24579c, e10, "Malformed content type: %s", trim);
                        }
                    } else if (z10) {
                        aVar.e(substring, trim);
                    } else {
                        aVar.a(substring, trim);
                    }
                } else {
                    throw e0.n(this.f24579c, "@Headers value must be in the form \"Name: Value\". Found: \"%s\"", str);
                }
            }
            return aVar.f();
        }

        private void d(String str, String str2, boolean z10) {
            String str3 = this.f24591o;
            if (str3 == null) {
                this.f24591o = str;
                this.f24592p = z10;
                if (str2.isEmpty()) {
                    return;
                }
                int indexOf = str2.indexOf(63);
                if (indexOf != -1 && indexOf < str2.length() - 1) {
                    String substring = str2.substring(indexOf + 1);
                    if (f24575y.matcher(substring).find()) {
                        throw e0.n(this.f24579c, "URL query string \"%s\" must not have replace block. For dynamic query parameters use @Query.", substring);
                    }
                }
                this.f24595s = str2;
                this.f24598v = h(str2);
                return;
            }
            throw e0.n(this.f24579c, "Only one HTTP method is allowed. Found: %s and %s.", str3, str);
        }

        private void e(Annotation annotation) {
            if (annotation instanceof hw.b) {
                d("DELETE", ((hw.b) annotation).value(), false);
            } else if (annotation instanceof hw.f) {
                d("GET", ((hw.f) annotation).value(), false);
            } else if (annotation instanceof hw.g) {
                d("HEAD", ((hw.g) annotation).value(), false);
            } else if (annotation instanceof hw.n) {
                d("PATCH", ((hw.n) annotation).value(), true);
            } else if (annotation instanceof hw.o) {
                d("POST", ((hw.o) annotation).value(), true);
            } else if (annotation instanceof hw.p) {
                d("PUT", ((hw.p) annotation).value(), true);
            } else if (annotation instanceof hw.m) {
                d("OPTIONS", ((hw.m) annotation).value(), false);
            } else if (annotation instanceof hw.h) {
                hw.h hVar = (hw.h) annotation;
                d(hVar.method(), hVar.path(), hVar.hasBody());
            } else if (annotation instanceof hw.k) {
                hw.k kVar = (hw.k) annotation;
                String[] value = kVar.value();
                if (value.length != 0) {
                    this.f24596t = c(value, kVar.allowUnsafeNonAsciiValues());
                    return;
                }
                throw e0.n(this.f24579c, "@Headers annotation is empty.", new Object[0]);
            } else if (annotation instanceof hw.l) {
                if (!this.f24593q) {
                    this.f24594r = true;
                    return;
                }
                throw e0.n(this.f24579c, "Only one encoding annotation is allowed.", new Object[0]);
            } else if (annotation instanceof hw.e) {
                if (!this.f24594r) {
                    this.f24593q = true;
                    return;
                }
                throw e0.n(this.f24579c, "Only one encoding annotation is allowed.", new Object[0]);
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
                            throw e0.p(this.f24579c, i10, "Multiple Retrofit annotations found, only one allowed.", new Object[0]);
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
                            this.f24600x = true;
                            return null;
                        }
                    } catch (NoClassDefFoundError unused) {
                    }
                }
                throw e0.p(this.f24579c, i10, "No Retrofit annotation found.", new Object[0]);
            }
            return uVar;
        }

        private u g(int i10, Type type, Annotation[] annotationArr, Annotation annotation) {
            if (annotation instanceof hw.y) {
                j(i10, type);
                if (!this.f24590n) {
                    if (!this.f24586j) {
                        if (!this.f24587k) {
                            if (!this.f24588l) {
                                if (!this.f24589m) {
                                    if (this.f24595s == null) {
                                        this.f24590n = true;
                                        if (type != HttpUrl.class && type != String.class && type != URI.class && (!(type instanceof Class) || !"android.net.Uri".equals(((Class) type).getName()))) {
                                            throw e0.p(this.f24579c, i10, "@Url must be okhttp3.HttpUrl, String, java.net.URI, or android.net.Uri type.", new Object[0]);
                                        }
                                        return new u.p(this.f24579c, i10);
                                    }
                                    throw e0.p(this.f24579c, i10, "@Url cannot be used with @%s URL", this.f24591o);
                                }
                                throw e0.p(this.f24579c, i10, "A @Url parameter must not come after a @QueryMap.", new Object[0]);
                            }
                            throw e0.p(this.f24579c, i10, "A @Url parameter must not come after a @QueryName.", new Object[0]);
                        }
                        throw e0.p(this.f24579c, i10, "A @Url parameter must not come after a @Query.", new Object[0]);
                    }
                    throw e0.p(this.f24579c, i10, "@Path parameters may not be used with @Url.", new Object[0]);
                }
                throw e0.p(this.f24579c, i10, "Multiple @Url method annotations found.", new Object[0]);
            } else if (annotation instanceof hw.s) {
                j(i10, type);
                if (!this.f24587k) {
                    if (!this.f24588l) {
                        if (!this.f24589m) {
                            if (!this.f24590n) {
                                if (this.f24595s != null) {
                                    this.f24586j = true;
                                    hw.s sVar = (hw.s) annotation;
                                    String value = sVar.value();
                                    i(i10, value);
                                    return new u.k(this.f24579c, i10, value, this.f24577a.j(type, annotationArr), sVar.encoded());
                                }
                                throw e0.p(this.f24579c, i10, "@Path can only be used with relative url on @%s", this.f24591o);
                            }
                            throw e0.p(this.f24579c, i10, "@Path parameters may not be used with @Url.", new Object[0]);
                        }
                        throw e0.p(this.f24579c, i10, "A @Path parameter must not come after a @QueryMap.", new Object[0]);
                    }
                    throw e0.p(this.f24579c, i10, "A @Path parameter must not come after a @QueryName.", new Object[0]);
                }
                throw e0.p(this.f24579c, i10, "A @Path parameter must not come after a @Query.", new Object[0]);
            } else if (annotation instanceof hw.t) {
                j(i10, type);
                hw.t tVar = (hw.t) annotation;
                String value2 = tVar.value();
                boolean encoded = tVar.encoded();
                Class h10 = e0.h(type);
                this.f24587k = true;
                if (Iterable.class.isAssignableFrom(h10)) {
                    if (type instanceof ParameterizedType) {
                        return new u.l(value2, this.f24577a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded).c();
                    }
                    throw e0.p(this.f24579c, i10, h10.getSimpleName() + " must include generic type (e.g., " + h10.getSimpleName() + "<String>)", new Object[0]);
                } else if (h10.isArray()) {
                    return new u.l(value2, this.f24577a.j(a(h10.getComponentType()), annotationArr), encoded).b();
                } else {
                    return new u.l(value2, this.f24577a.j(type, annotationArr), encoded);
                }
            } else if (annotation instanceof hw.v) {
                j(i10, type);
                boolean encoded2 = ((hw.v) annotation).encoded();
                Class h11 = e0.h(type);
                this.f24588l = true;
                if (Iterable.class.isAssignableFrom(h11)) {
                    if (type instanceof ParameterizedType) {
                        return new u.n(this.f24577a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded2).c();
                    }
                    throw e0.p(this.f24579c, i10, h11.getSimpleName() + " must include generic type (e.g., " + h11.getSimpleName() + "<String>)", new Object[0]);
                } else if (h11.isArray()) {
                    return new u.n(this.f24577a.j(a(h11.getComponentType()), annotationArr), encoded2).b();
                } else {
                    return new u.n(this.f24577a.j(type, annotationArr), encoded2);
                }
            } else if (annotation instanceof hw.u) {
                j(i10, type);
                Class h12 = e0.h(type);
                this.f24589m = true;
                if (Map.class.isAssignableFrom(h12)) {
                    Type i11 = e0.i(type, h12, Map.class);
                    if (i11 instanceof ParameterizedType) {
                        ParameterizedType parameterizedType = (ParameterizedType) i11;
                        Type g10 = e0.g(0, parameterizedType);
                        if (String.class == g10) {
                            return new u.m(this.f24579c, i10, this.f24577a.j(e0.g(1, parameterizedType), annotationArr), ((hw.u) annotation).encoded());
                        }
                        throw e0.p(this.f24579c, i10, "@QueryMap keys must be of type String: " + g10, new Object[0]);
                    }
                    throw e0.p(this.f24579c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                }
                throw e0.p(this.f24579c, i10, "@QueryMap parameter type must be Map.", new Object[0]);
            } else if (annotation instanceof hw.i) {
                j(i10, type);
                hw.i iVar = (hw.i) annotation;
                String value3 = iVar.value();
                Class h13 = e0.h(type);
                if (Iterable.class.isAssignableFrom(h13)) {
                    if (type instanceof ParameterizedType) {
                        return new u.f(value3, this.f24577a.j(e0.g(0, (ParameterizedType) type), annotationArr), iVar.allowUnsafeNonAsciiValues()).c();
                    }
                    throw e0.p(this.f24579c, i10, h13.getSimpleName() + " must include generic type (e.g., " + h13.getSimpleName() + "<String>)", new Object[0]);
                } else if (h13.isArray()) {
                    return new u.f(value3, this.f24577a.j(a(h13.getComponentType()), annotationArr), iVar.allowUnsafeNonAsciiValues()).b();
                } else {
                    return new u.f(value3, this.f24577a.j(type, annotationArr), iVar.allowUnsafeNonAsciiValues());
                }
            } else if (annotation instanceof hw.j) {
                if (type == Headers.class) {
                    return new u.h(this.f24579c, i10);
                }
                j(i10, type);
                Class h14 = e0.h(type);
                if (Map.class.isAssignableFrom(h14)) {
                    Type i12 = e0.i(type, h14, Map.class);
                    if (i12 instanceof ParameterizedType) {
                        ParameterizedType parameterizedType2 = (ParameterizedType) i12;
                        Type g11 = e0.g(0, parameterizedType2);
                        if (String.class == g11) {
                            return new u.g(this.f24579c, i10, this.f24577a.j(e0.g(1, parameterizedType2), annotationArr), ((hw.j) annotation).allowUnsafeNonAsciiValues());
                        }
                        throw e0.p(this.f24579c, i10, "@HeaderMap keys must be of type String: " + g11, new Object[0]);
                    }
                    throw e0.p(this.f24579c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                }
                throw e0.p(this.f24579c, i10, "@HeaderMap parameter type must be Map or Headers.", new Object[0]);
            } else if (annotation instanceof hw.c) {
                j(i10, type);
                if (this.f24593q) {
                    hw.c cVar = (hw.c) annotation;
                    String value4 = cVar.value();
                    boolean encoded3 = cVar.encoded();
                    this.f24583g = true;
                    Class h15 = e0.h(type);
                    if (Iterable.class.isAssignableFrom(h15)) {
                        if (type instanceof ParameterizedType) {
                            return new u.d(value4, this.f24577a.j(e0.g(0, (ParameterizedType) type), annotationArr), encoded3).c();
                        }
                        throw e0.p(this.f24579c, i10, h15.getSimpleName() + " must include generic type (e.g., " + h15.getSimpleName() + "<String>)", new Object[0]);
                    } else if (h15.isArray()) {
                        return new u.d(value4, this.f24577a.j(a(h15.getComponentType()), annotationArr), encoded3).b();
                    } else {
                        return new u.d(value4, this.f24577a.j(type, annotationArr), encoded3);
                    }
                }
                throw e0.p(this.f24579c, i10, "@Field parameters can only be used with form encoding.", new Object[0]);
            } else if (annotation instanceof hw.d) {
                j(i10, type);
                if (this.f24593q) {
                    Class h16 = e0.h(type);
                    if (Map.class.isAssignableFrom(h16)) {
                        Type i13 = e0.i(type, h16, Map.class);
                        if (i13 instanceof ParameterizedType) {
                            ParameterizedType parameterizedType3 = (ParameterizedType) i13;
                            Type g12 = e0.g(0, parameterizedType3);
                            if (String.class == g12) {
                                h j10 = this.f24577a.j(e0.g(1, parameterizedType3), annotationArr);
                                this.f24583g = true;
                                return new u.e(this.f24579c, i10, j10, ((hw.d) annotation).encoded());
                            }
                            throw e0.p(this.f24579c, i10, "@FieldMap keys must be of type String: " + g12, new Object[0]);
                        }
                        throw e0.p(this.f24579c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                    }
                    throw e0.p(this.f24579c, i10, "@FieldMap parameter type must be Map.", new Object[0]);
                }
                throw e0.p(this.f24579c, i10, "@FieldMap parameters can only be used with form encoding.", new Object[0]);
            } else if (annotation instanceof hw.q) {
                j(i10, type);
                if (this.f24594r) {
                    hw.q qVar = (hw.q) annotation;
                    this.f24584h = true;
                    String value5 = qVar.value();
                    Class h17 = e0.h(type);
                    if (value5.isEmpty()) {
                        if (Iterable.class.isAssignableFrom(h17)) {
                            if (type instanceof ParameterizedType) {
                                if (MultipartBody.b.class.isAssignableFrom(e0.h(e0.g(0, (ParameterizedType) type)))) {
                                    return u.o.f24541a.c();
                                }
                                throw e0.p(this.f24579c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                            }
                            throw e0.p(this.f24579c, i10, h17.getSimpleName() + " must include generic type (e.g., " + h17.getSimpleName() + "<String>)", new Object[0]);
                        } else if (h17.isArray()) {
                            if (MultipartBody.b.class.isAssignableFrom(h17.getComponentType())) {
                                return u.o.f24541a.b();
                            }
                            throw e0.p(this.f24579c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                        } else if (MultipartBody.b.class.isAssignableFrom(h17)) {
                            return u.o.f24541a;
                        } else {
                            throw e0.p(this.f24579c, i10, "@Part annotation must supply a name or use MultipartBody.Part parameter type.", new Object[0]);
                        }
                    }
                    Headers i14 = Headers.i("Content-Disposition", "form-data; name=\"" + value5 + "\"", "Content-Transfer-Encoding", qVar.encoding());
                    if (Iterable.class.isAssignableFrom(h17)) {
                        if (type instanceof ParameterizedType) {
                            Type g13 = e0.g(0, (ParameterizedType) type);
                            if (!MultipartBody.b.class.isAssignableFrom(e0.h(g13))) {
                                return new u.i(this.f24579c, i10, i14, this.f24577a.h(g13, annotationArr, this.f24580d)).c();
                            }
                            throw e0.p(this.f24579c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                        }
                        throw e0.p(this.f24579c, i10, h17.getSimpleName() + " must include generic type (e.g., " + h17.getSimpleName() + "<String>)", new Object[0]);
                    } else if (h17.isArray()) {
                        Class a10 = a(h17.getComponentType());
                        if (!MultipartBody.b.class.isAssignableFrom(a10)) {
                            return new u.i(this.f24579c, i10, i14, this.f24577a.h(a10, annotationArr, this.f24580d)).b();
                        }
                        throw e0.p(this.f24579c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                    } else if (!MultipartBody.b.class.isAssignableFrom(h17)) {
                        return new u.i(this.f24579c, i10, i14, this.f24577a.h(type, annotationArr, this.f24580d));
                    } else {
                        throw e0.p(this.f24579c, i10, "@Part parameters using the MultipartBody.Part must not include a part name in the annotation.", new Object[0]);
                    }
                }
                throw e0.p(this.f24579c, i10, "@Part parameters can only be used with multipart encoding.", new Object[0]);
            } else if (annotation instanceof hw.r) {
                j(i10, type);
                if (this.f24594r) {
                    this.f24584h = true;
                    Class h18 = e0.h(type);
                    if (Map.class.isAssignableFrom(h18)) {
                        Type i15 = e0.i(type, h18, Map.class);
                        if (i15 instanceof ParameterizedType) {
                            ParameterizedType parameterizedType4 = (ParameterizedType) i15;
                            Type g14 = e0.g(0, parameterizedType4);
                            if (String.class == g14) {
                                Type g15 = e0.g(1, parameterizedType4);
                                if (!MultipartBody.b.class.isAssignableFrom(e0.h(g15))) {
                                    return new u.j(this.f24579c, i10, this.f24577a.h(g15, annotationArr, this.f24580d), ((hw.r) annotation).encoding());
                                }
                                throw e0.p(this.f24579c, i10, "@PartMap values cannot be MultipartBody.Part. Use @Part List<Part> or a different value type instead.", new Object[0]);
                            }
                            throw e0.p(this.f24579c, i10, "@PartMap keys must be of type String: " + g14, new Object[0]);
                        }
                        throw e0.p(this.f24579c, i10, "Map must include generic types (e.g., Map<String, String>)", new Object[0]);
                    }
                    throw e0.p(this.f24579c, i10, "@PartMap parameter type must be Map.", new Object[0]);
                }
                throw e0.p(this.f24579c, i10, "@PartMap parameters can only be used with multipart encoding.", new Object[0]);
            } else if (annotation instanceof hw.a) {
                j(i10, type);
                if (!this.f24593q && !this.f24594r) {
                    if (!this.f24585i) {
                        try {
                            h h19 = this.f24577a.h(type, annotationArr, this.f24580d);
                            this.f24585i = true;
                            return new u.c(this.f24579c, i10, h19);
                        } catch (RuntimeException e10) {
                            throw e0.q(this.f24579c, e10, i10, "Unable to create @Body converter for %s", type);
                        }
                    }
                    throw e0.p(this.f24579c, i10, "Multiple @Body method annotations found.", new Object[0]);
                }
                throw e0.p(this.f24579c, i10, "@Body parameters cannot be used with form or multi-part encoding.", new Object[0]);
            } else if (annotation instanceof hw.x) {
                j(i10, type);
                Class h20 = e0.h(type);
                for (int i16 = i10 - 1; i16 >= 0; i16--) {
                    u uVar = this.f24599w[i16];
                    if ((uVar instanceof u.q) && ((u.q) uVar).f24544a.equals(h20)) {
                        throw e0.p(this.f24579c, i10, "@Tag type " + h20.getName() + " is duplicate of " + v.f24546b.a(this.f24579c, i16) + " and would always overwrite its value.", new Object[0]);
                    }
                }
                return new u.q(h20);
            } else {
                return null;
            }
        }

        static Set h(String str) {
            Matcher matcher = f24575y.matcher(str);
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            while (matcher.find()) {
                linkedHashSet.add(matcher.group(1));
            }
            return linkedHashSet;
        }

        private void i(int i10, String str) {
            if (f24576z.matcher(str).matches()) {
                if (this.f24598v.contains(str)) {
                    return;
                }
                throw e0.p(this.f24579c, i10, "URL \"%s\" does not contain \"{%s}\".", this.f24595s, str);
            }
            throw e0.p(this.f24579c, i10, "@Path parameter name must match %s. Found: %s", f24575y.pattern(), str);
        }

        private void j(int i10, Type type) {
            if (!e0.j(type)) {
                return;
            }
            throw e0.p(this.f24579c, i10, "Parameter type must not include a type variable or wildcard: %s", type);
        }

        y b() {
            boolean z10;
            for (Annotation annotation : this.f24580d) {
                e(annotation);
            }
            if (this.f24591o != null) {
                if (!this.f24592p) {
                    if (!this.f24594r) {
                        if (this.f24593q) {
                            throw e0.n(this.f24579c, "FormUrlEncoded can only be specified on HTTP methods with request body (e.g., @POST).", new Object[0]);
                        }
                    } else {
                        throw e0.n(this.f24579c, "Multipart can only be specified on HTTP methods with request body (e.g., @POST).", new Object[0]);
                    }
                }
                int length = this.f24581e.length;
                this.f24599w = new u[length];
                int i10 = length - 1;
                for (int i11 = 0; i11 < length; i11++) {
                    u[] uVarArr = this.f24599w;
                    Type type = this.f24582f[i11];
                    Annotation[] annotationArr = this.f24581e[i11];
                    if (i11 == i10) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    uVarArr[i11] = f(i11, type, annotationArr, z10);
                }
                if (this.f24595s == null && !this.f24590n) {
                    throw e0.n(this.f24579c, "Missing either @%s URL or @Url parameter.", this.f24591o);
                }
                boolean z11 = this.f24593q;
                if (!z11 && !this.f24594r && !this.f24592p && this.f24585i) {
                    throw e0.n(this.f24579c, "Non-body HTTP method cannot contain @Body.", new Object[0]);
                }
                if (z11 && !this.f24583g) {
                    throw e0.n(this.f24579c, "Form-encoded method must contain at least one @Field.", new Object[0]);
                }
                if (this.f24594r && !this.f24584h) {
                    throw e0.n(this.f24579c, "Multipart method must contain at least one @Part.", new Object[0]);
                }
                return new y(this);
            }
            throw e0.n(this.f24579c, "HTTP method annotation is required (e.g., @GET, @POST, etc.).", new Object[0]);
        }
    }

    y(a aVar) {
        this.f24563a = aVar.f24578b;
        this.f24564b = aVar.f24579c;
        this.f24565c = aVar.f24577a.f24401c;
        this.f24566d = aVar.f24591o;
        this.f24567e = aVar.f24595s;
        this.f24568f = aVar.f24596t;
        this.f24569g = aVar.f24597u;
        this.f24570h = aVar.f24592p;
        this.f24571i = aVar.f24593q;
        this.f24572j = aVar.f24594r;
        this.f24573k = aVar.f24599w;
        this.f24574l = aVar.f24600x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static y b(a0 a0Var, Class cls, Method method) {
        return new a(a0Var, cls, method).b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Request a(Object obj, Object[] objArr) {
        u[] uVarArr = this.f24573k;
        int length = objArr.length;
        if (length == uVarArr.length) {
            x xVar = new x(this.f24566d, this.f24565c, this.f24567e, this.f24568f, this.f24569g, this.f24570h, this.f24571i, this.f24572j);
            if (this.f24574l) {
                length--;
            }
            ArrayList arrayList = new ArrayList(length);
            for (int i10 = 0; i10 < length; i10++) {
                arrayList.add(objArr[i10]);
                uVarArr[i10].a(xVar, objArr[i10]);
            }
            return xVar.k().j(q.class, new q(this.f24563a, obj, this.f24564b, arrayList)).b();
        }
        throw new IllegalArgumentException("Argument count (" + length + ") doesn't match expected count (" + uVarArr.length + ")");
    }
}
