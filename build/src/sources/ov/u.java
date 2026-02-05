package ov;

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
        @Override // ov.u
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

        @Override // ov.u
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
        private final Method f44654a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44655b;

        /* renamed from: c  reason: collision with root package name */
        private final ov.h f44656c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, ov.h hVar) {
            this.f44654a = method;
            this.f44655b = i10;
            this.f44656c = hVar;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f44656c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f44654a;
                    int i10 = this.f44655b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f44654a, this.f44655b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f44657a;

        /* renamed from: b  reason: collision with root package name */
        private final ov.h f44658b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f44659c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, ov.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f44657a = str;
            this.f44658b = hVar;
            this.f44659c = z10;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f44658b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f44657a, str, this.f44659c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f44660a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44661b;

        /* renamed from: c  reason: collision with root package name */
        private final ov.h f44662c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f44663d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, ov.h hVar, boolean z10) {
            this.f44660a = method;
            this.f44661b = i10;
            this.f44662c = hVar;
            this.f44663d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ov.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f44662c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f44663d);
                            } else {
                                Method method = this.f44660a;
                                int i10 = this.f44661b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f44662c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f44660a;
                            int i11 = this.f44661b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f44660a, this.f44661b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f44660a, this.f44661b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f44664a;

        /* renamed from: b  reason: collision with root package name */
        private final ov.h f44665b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f44666c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, ov.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f44664a = str;
            this.f44665b = hVar;
            this.f44666c = z10;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f44665b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f44664a, str, this.f44666c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f44667a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44668b;

        /* renamed from: c  reason: collision with root package name */
        private final ov.h f44669c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f44670d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, ov.h hVar, boolean z10) {
            this.f44667a = method;
            this.f44668b = i10;
            this.f44669c = hVar;
            this.f44670d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ov.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.b(str, (String) this.f44669c.a(value), this.f44670d);
                        } else {
                            Method method = this.f44667a;
                            int i10 = this.f44668b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f44667a, this.f44668b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f44667a, this.f44668b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f44671a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44672b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f44671a = method;
            this.f44672b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ov.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f44671a, this.f44672b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f44673a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44674b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f44675c;

        /* renamed from: d  reason: collision with root package name */
        private final ov.h f44676d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, ov.h hVar) {
            this.f44673a = method;
            this.f44674b = i10;
            this.f44675c = headers;
            this.f44676d = hVar;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f44675c, (RequestBody) this.f44676d.a(obj));
            } catch (IOException e10) {
                Method method = this.f44673a;
                int i10 = this.f44674b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f44677a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44678b;

        /* renamed from: c  reason: collision with root package name */
        private final ov.h f44679c;

        /* renamed from: d  reason: collision with root package name */
        private final String f44680d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, ov.h hVar, String str) {
            this.f44677a = method;
            this.f44678b = i10;
            this.f44679c = hVar;
            this.f44680d = str;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ov.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.d(Headers.h("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f44680d), (RequestBody) this.f44679c.a(value));
                        } else {
                            Method method = this.f44677a;
                            int i10 = this.f44678b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f44677a, this.f44678b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f44677a, this.f44678b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f44681a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44682b;

        /* renamed from: c  reason: collision with root package name */
        private final String f44683c;

        /* renamed from: d  reason: collision with root package name */
        private final ov.h f44684d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f44685e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, ov.h hVar, boolean z10) {
            this.f44681a = method;
            this.f44682b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f44683c = str;
            this.f44684d = hVar;
            this.f44685e = z10;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f44683c, (String) this.f44684d.a(obj), this.f44685e);
                return;
            }
            Method method = this.f44681a;
            int i10 = this.f44682b;
            throw e0.p(method, i10, "Path parameter \"" + this.f44683c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f44686a;

        /* renamed from: b  reason: collision with root package name */
        private final ov.h f44687b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f44688c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, ov.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f44686a = str;
            this.f44687b = hVar;
            this.f44688c = z10;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f44687b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f44686a, str, this.f44688c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f44689a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44690b;

        /* renamed from: c  reason: collision with root package name */
        private final ov.h f44691c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f44692d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, ov.h hVar, boolean z10) {
            this.f44689a = method;
            this.f44690b = i10;
            this.f44691c = hVar;
            this.f44692d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ov.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f44691c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f44692d);
                            } else {
                                Method method = this.f44689a;
                                int i10 = this.f44690b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f44691c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f44689a;
                            int i11 = this.f44690b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f44689a, this.f44690b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f44689a, this.f44690b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final ov.h f44693a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f44694b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(ov.h hVar, boolean z10) {
            this.f44693a = hVar;
            this.f44694b = z10;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f44693a.a(obj), null, this.f44694b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f44695a = new o();

        private o() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ov.u
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
        private final Method f44696a;

        /* renamed from: b  reason: collision with root package name */
        private final int f44697b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f44696a = method;
            this.f44697b = i10;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f44696a, this.f44697b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f44698a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f44698a = cls;
        }

        @Override // ov.u
        void a(x xVar, Object obj) {
            xVar.h(this.f44698a, obj);
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
