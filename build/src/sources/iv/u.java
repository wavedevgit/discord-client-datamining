package iv;

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
        @Override // iv.u
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

        @Override // iv.u
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
        private final Method f31395a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31396b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31397c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, iv.h hVar) {
            this.f31395a = method;
            this.f31396b = i10;
            this.f31397c = hVar;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f31397c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f31395a;
                    int i10 = this.f31396b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f31395a, this.f31396b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f31398a;

        /* renamed from: b  reason: collision with root package name */
        private final iv.h f31399b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f31400c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, iv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f31398a = str;
            this.f31399b = hVar;
            this.f31400c = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f31399b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f31398a, str, this.f31400c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31401a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31402b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31403c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31404d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, iv.h hVar, boolean z10) {
            this.f31401a = method;
            this.f31402b = i10;
            this.f31403c = hVar;
            this.f31404d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // iv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f31403c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f31404d);
                            } else {
                                Method method = this.f31401a;
                                int i10 = this.f31402b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f31403c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f31401a;
                            int i11 = this.f31402b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f31401a, this.f31402b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f31401a, this.f31402b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f31405a;

        /* renamed from: b  reason: collision with root package name */
        private final iv.h f31406b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f31407c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, iv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f31405a = str;
            this.f31406b = hVar;
            this.f31407c = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f31406b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f31405a, str, this.f31407c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31408a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31409b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31410c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31411d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, iv.h hVar, boolean z10) {
            this.f31408a = method;
            this.f31409b = i10;
            this.f31410c = hVar;
            this.f31411d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // iv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.b(str, (String) this.f31410c.a(value), this.f31411d);
                        } else {
                            Method method = this.f31408a;
                            int i10 = this.f31409b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f31408a, this.f31409b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f31408a, this.f31409b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31412a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31413b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f31412a = method;
            this.f31413b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // iv.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f31412a, this.f31413b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31414a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31415b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f31416c;

        /* renamed from: d  reason: collision with root package name */
        private final iv.h f31417d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, iv.h hVar) {
            this.f31414a = method;
            this.f31415b = i10;
            this.f31416c = headers;
            this.f31417d = hVar;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f31416c, (RequestBody) this.f31417d.a(obj));
            } catch (IOException e10) {
                Method method = this.f31414a;
                int i10 = this.f31415b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31418a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31419b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31420c;

        /* renamed from: d  reason: collision with root package name */
        private final String f31421d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, iv.h hVar, String str) {
            this.f31418a = method;
            this.f31419b = i10;
            this.f31420c = hVar;
            this.f31421d = str;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // iv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.d(Headers.h("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f31421d), (RequestBody) this.f31420c.a(value));
                        } else {
                            Method method = this.f31418a;
                            int i10 = this.f31419b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f31418a, this.f31419b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f31418a, this.f31419b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31422a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31423b;

        /* renamed from: c  reason: collision with root package name */
        private final String f31424c;

        /* renamed from: d  reason: collision with root package name */
        private final iv.h f31425d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f31426e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, iv.h hVar, boolean z10) {
            this.f31422a = method;
            this.f31423b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f31424c = str;
            this.f31425d = hVar;
            this.f31426e = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f31424c, (String) this.f31425d.a(obj), this.f31426e);
                return;
            }
            Method method = this.f31422a;
            int i10 = this.f31423b;
            throw e0.p(method, i10, "Path parameter \"" + this.f31424c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f31427a;

        /* renamed from: b  reason: collision with root package name */
        private final iv.h f31428b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f31429c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, iv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f31427a = str;
            this.f31428b = hVar;
            this.f31429c = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f31428b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f31427a, str, this.f31429c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31430a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31431b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31432c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31433d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, iv.h hVar, boolean z10) {
            this.f31430a = method;
            this.f31431b = i10;
            this.f31432c = hVar;
            this.f31433d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // iv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f31432c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f31433d);
                            } else {
                                Method method = this.f31430a;
                                int i10 = this.f31431b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f31432c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f31430a;
                            int i11 = this.f31431b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f31430a, this.f31431b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f31430a, this.f31431b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final iv.h f31434a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f31435b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(iv.h hVar, boolean z10) {
            this.f31434a = hVar;
            this.f31435b = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f31434a.a(obj), null, this.f31435b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f31436a = new o();

        private o() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // iv.u
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
        private final Method f31437a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31438b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f31437a = method;
            this.f31438b = i10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f31437a, this.f31438b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f31439a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f31439a = cls;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            xVar.h(this.f31439a, obj);
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
