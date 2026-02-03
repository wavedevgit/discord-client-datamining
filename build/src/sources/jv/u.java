package jv;

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
        @Override // jv.u
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

        @Override // jv.u
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
        private final Method f32508a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32509b;

        /* renamed from: c  reason: collision with root package name */
        private final jv.h f32510c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, jv.h hVar) {
            this.f32508a = method;
            this.f32509b = i10;
            this.f32510c = hVar;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f32510c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f32508a;
                    int i10 = this.f32509b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f32508a, this.f32509b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f32511a;

        /* renamed from: b  reason: collision with root package name */
        private final jv.h f32512b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f32513c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, jv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f32511a = str;
            this.f32512b = hVar;
            this.f32513c = z10;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f32512b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f32511a, str, this.f32513c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32514a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32515b;

        /* renamed from: c  reason: collision with root package name */
        private final jv.h f32516c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f32517d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, jv.h hVar, boolean z10) {
            this.f32514a = method;
            this.f32515b = i10;
            this.f32516c = hVar;
            this.f32517d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // jv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f32516c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f32517d);
                            } else {
                                Method method = this.f32514a;
                                int i10 = this.f32515b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f32516c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f32514a;
                            int i11 = this.f32515b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f32514a, this.f32515b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f32514a, this.f32515b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f32518a;

        /* renamed from: b  reason: collision with root package name */
        private final jv.h f32519b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f32520c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, jv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f32518a = str;
            this.f32519b = hVar;
            this.f32520c = z10;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f32519b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f32518a, str, this.f32520c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32521a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32522b;

        /* renamed from: c  reason: collision with root package name */
        private final jv.h f32523c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f32524d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, jv.h hVar, boolean z10) {
            this.f32521a = method;
            this.f32522b = i10;
            this.f32523c = hVar;
            this.f32524d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // jv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.b(str, (String) this.f32523c.a(value), this.f32524d);
                        } else {
                            Method method = this.f32521a;
                            int i10 = this.f32522b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f32521a, this.f32522b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f32521a, this.f32522b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32525a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32526b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f32525a = method;
            this.f32526b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // jv.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f32525a, this.f32526b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32527a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32528b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f32529c;

        /* renamed from: d  reason: collision with root package name */
        private final jv.h f32530d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, jv.h hVar) {
            this.f32527a = method;
            this.f32528b = i10;
            this.f32529c = headers;
            this.f32530d = hVar;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f32529c, (RequestBody) this.f32530d.a(obj));
            } catch (IOException e10) {
                Method method = this.f32527a;
                int i10 = this.f32528b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32531a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32532b;

        /* renamed from: c  reason: collision with root package name */
        private final jv.h f32533c;

        /* renamed from: d  reason: collision with root package name */
        private final String f32534d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, jv.h hVar, String str) {
            this.f32531a = method;
            this.f32532b = i10;
            this.f32533c = hVar;
            this.f32534d = str;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // jv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.d(Headers.h("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f32534d), (RequestBody) this.f32533c.a(value));
                        } else {
                            Method method = this.f32531a;
                            int i10 = this.f32532b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f32531a, this.f32532b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f32531a, this.f32532b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32535a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32536b;

        /* renamed from: c  reason: collision with root package name */
        private final String f32537c;

        /* renamed from: d  reason: collision with root package name */
        private final jv.h f32538d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f32539e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, jv.h hVar, boolean z10) {
            this.f32535a = method;
            this.f32536b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f32537c = str;
            this.f32538d = hVar;
            this.f32539e = z10;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f32537c, (String) this.f32538d.a(obj), this.f32539e);
                return;
            }
            Method method = this.f32535a;
            int i10 = this.f32536b;
            throw e0.p(method, i10, "Path parameter \"" + this.f32537c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f32540a;

        /* renamed from: b  reason: collision with root package name */
        private final jv.h f32541b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f32542c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, jv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f32540a = str;
            this.f32541b = hVar;
            this.f32542c = z10;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f32541b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f32540a, str, this.f32542c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32543a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32544b;

        /* renamed from: c  reason: collision with root package name */
        private final jv.h f32545c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f32546d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, jv.h hVar, boolean z10) {
            this.f32543a = method;
            this.f32544b = i10;
            this.f32545c = hVar;
            this.f32546d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // jv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f32545c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f32546d);
                            } else {
                                Method method = this.f32543a;
                                int i10 = this.f32544b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f32545c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f32543a;
                            int i11 = this.f32544b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f32543a, this.f32544b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f32543a, this.f32544b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final jv.h f32547a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f32548b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(jv.h hVar, boolean z10) {
            this.f32547a = hVar;
            this.f32548b = z10;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f32547a.a(obj), null, this.f32548b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f32549a = new o();

        private o() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // jv.u
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
        private final Method f32550a;

        /* renamed from: b  reason: collision with root package name */
        private final int f32551b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f32550a = method;
            this.f32551b = i10;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f32550a, this.f32551b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f32552a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f32552a = cls;
        }

        @Override // jv.u
        void a(x xVar, Object obj) {
            xVar.h(this.f32552a, obj);
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
