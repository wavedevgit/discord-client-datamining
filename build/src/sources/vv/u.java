package vv;

import java.io.IOException;
import java.lang.reflect.Array;
import java.lang.reflect.Method;
import java.util.Map;
import java.util.Objects;
import okhttp3.Headers;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class u {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a extends u {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // vv.u
        /* renamed from: d */
        public void a(x xVar, Iterable iterable) {
            if (iterable != null) {
                for (Object obj : iterable) {
                    u.this.a(xVar, obj);
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class b extends u {
        b() {
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                int length = Array.getLength(obj);
                for (int i10 = 0; i10 < length; i10++) {
                    u.this.a(xVar, Array.get(obj, i10));
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53147a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53148b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53149c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, vv.h hVar) {
            this.f53147a = method;
            this.f53148b = i10;
            this.f53149c = hVar;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f53149c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f53147a;
                    int i10 = this.f53148b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f53147a, this.f53148b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f53150a;

        /* renamed from: b  reason: collision with root package name */
        private final vv.h f53151b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f53152c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, vv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f53150a = str;
            this.f53151b = hVar;
            this.f53152c = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f53151b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f53150a, str, this.f53152c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53153a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53154b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53155c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53156d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, vv.h hVar, boolean z10) {
            this.f53153a = method;
            this.f53154b = i10;
            this.f53155c = hVar;
            this.f53156d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // vv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f53155c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f53156d);
                            } else {
                                Method method = this.f53153a;
                                int i10 = this.f53154b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f53155c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f53153a;
                            int i11 = this.f53154b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f53153a, this.f53154b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f53153a, this.f53154b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f53157a;

        /* renamed from: b  reason: collision with root package name */
        private final vv.h f53158b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f53159c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, vv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f53157a = str;
            this.f53158b = hVar;
            this.f53159c = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f53158b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f53157a, str, this.f53159c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53160a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53161b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53162c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53163d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, vv.h hVar, boolean z10) {
            this.f53160a = method;
            this.f53161b = i10;
            this.f53162c = hVar;
            this.f53163d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // vv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.b(str, (String) this.f53162c.a(value), this.f53163d);
                        } else {
                            Method method = this.f53160a;
                            int i10 = this.f53161b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f53160a, this.f53161b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f53160a, this.f53161b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53164a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53165b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f53164a = method;
            this.f53165b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // vv.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f53164a, this.f53165b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53166a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53167b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f53168c;

        /* renamed from: d  reason: collision with root package name */
        private final vv.h f53169d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, vv.h hVar) {
            this.f53166a = method;
            this.f53167b = i10;
            this.f53168c = headers;
            this.f53169d = hVar;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f53168c, (RequestBody) this.f53169d.a(obj));
            } catch (IOException e10) {
                Method method = this.f53166a;
                int i10 = this.f53167b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53170a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53171b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53172c;

        /* renamed from: d  reason: collision with root package name */
        private final String f53173d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, vv.h hVar, String str) {
            this.f53170a = method;
            this.f53171b = i10;
            this.f53172c = hVar;
            this.f53173d = str;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // vv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.d(Headers.h("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f53173d), (RequestBody) this.f53172c.a(value));
                        } else {
                            Method method = this.f53170a;
                            int i10 = this.f53171b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f53170a, this.f53171b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f53170a, this.f53171b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53174a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53175b;

        /* renamed from: c  reason: collision with root package name */
        private final String f53176c;

        /* renamed from: d  reason: collision with root package name */
        private final vv.h f53177d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53178e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, vv.h hVar, boolean z10) {
            this.f53174a = method;
            this.f53175b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f53176c = str;
            this.f53177d = hVar;
            this.f53178e = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f53176c, (String) this.f53177d.a(obj), this.f53178e);
                return;
            }
            Method method = this.f53174a;
            int i10 = this.f53175b;
            throw e0.p(method, i10, "Path parameter \"" + this.f53176c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f53179a;

        /* renamed from: b  reason: collision with root package name */
        private final vv.h f53180b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f53181c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, vv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f53179a = str;
            this.f53180b = hVar;
            this.f53181c = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f53180b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f53179a, str, this.f53181c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53182a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53183b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53184c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53185d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, vv.h hVar, boolean z10) {
            this.f53182a = method;
            this.f53183b = i10;
            this.f53184c = hVar;
            this.f53185d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // vv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f53184c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f53185d);
                            } else {
                                Method method = this.f53182a;
                                int i10 = this.f53183b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f53184c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f53182a;
                            int i11 = this.f53183b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f53182a, this.f53183b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f53182a, this.f53183b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final vv.h f53186a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f53187b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(vv.h hVar, boolean z10) {
            this.f53186a = hVar;
            this.f53187b = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f53186a.a(obj), null, this.f53187b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f53188a = new o();

        private o() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // vv.u
        /* renamed from: d */
        public void a(x xVar, MultipartBody.b bVar) {
            if (bVar != null) {
                xVar.e(bVar);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class p extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53189a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53190b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f53189a = method;
            this.f53190b = i10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f53189a, this.f53190b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f53191a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f53191a = cls;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            xVar.h(this.f53191a, obj);
        }
    }

    u() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void a(x xVar, Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final u b() {
        return new b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final u c() {
        return new a();
    }
}
