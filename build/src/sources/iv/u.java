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
        private final Method f31411a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31412b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31413c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, iv.h hVar) {
            this.f31411a = method;
            this.f31412b = i10;
            this.f31413c = hVar;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f31413c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f31411a;
                    int i10 = this.f31412b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f31411a, this.f31412b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f31414a;

        /* renamed from: b  reason: collision with root package name */
        private final iv.h f31415b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f31416c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, iv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f31414a = str;
            this.f31415b = hVar;
            this.f31416c = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f31415b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f31414a, str, this.f31416c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31417a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31418b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31419c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31420d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, iv.h hVar, boolean z10) {
            this.f31417a = method;
            this.f31418b = i10;
            this.f31419c = hVar;
            this.f31420d = z10;
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
                            String str2 = (String) this.f31419c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f31420d);
                            } else {
                                Method method = this.f31417a;
                                int i10 = this.f31418b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f31419c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f31417a;
                            int i11 = this.f31418b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f31417a, this.f31418b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f31417a, this.f31418b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f31421a;

        /* renamed from: b  reason: collision with root package name */
        private final iv.h f31422b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f31423c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, iv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f31421a = str;
            this.f31422b = hVar;
            this.f31423c = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f31422b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f31421a, str, this.f31423c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31424a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31425b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31426c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31427d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, iv.h hVar, boolean z10) {
            this.f31424a = method;
            this.f31425b = i10;
            this.f31426c = hVar;
            this.f31427d = z10;
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
                            xVar.b(str, (String) this.f31426c.a(value), this.f31427d);
                        } else {
                            Method method = this.f31424a;
                            int i10 = this.f31425b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f31424a, this.f31425b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f31424a, this.f31425b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31428a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31429b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f31428a = method;
            this.f31429b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // iv.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f31428a, this.f31429b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31430a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31431b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f31432c;

        /* renamed from: d  reason: collision with root package name */
        private final iv.h f31433d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, iv.h hVar) {
            this.f31430a = method;
            this.f31431b = i10;
            this.f31432c = headers;
            this.f31433d = hVar;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f31432c, (RequestBody) this.f31433d.a(obj));
            } catch (IOException e10) {
                Method method = this.f31430a;
                int i10 = this.f31431b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31434a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31435b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31436c;

        /* renamed from: d  reason: collision with root package name */
        private final String f31437d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, iv.h hVar, String str) {
            this.f31434a = method;
            this.f31435b = i10;
            this.f31436c = hVar;
            this.f31437d = str;
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
                            xVar.d(Headers.h("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f31437d), (RequestBody) this.f31436c.a(value));
                        } else {
                            Method method = this.f31434a;
                            int i10 = this.f31435b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f31434a, this.f31435b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f31434a, this.f31435b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31438a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31439b;

        /* renamed from: c  reason: collision with root package name */
        private final String f31440c;

        /* renamed from: d  reason: collision with root package name */
        private final iv.h f31441d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f31442e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, iv.h hVar, boolean z10) {
            this.f31438a = method;
            this.f31439b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f31440c = str;
            this.f31441d = hVar;
            this.f31442e = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f31440c, (String) this.f31441d.a(obj), this.f31442e);
                return;
            }
            Method method = this.f31438a;
            int i10 = this.f31439b;
            throw e0.p(method, i10, "Path parameter \"" + this.f31440c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f31443a;

        /* renamed from: b  reason: collision with root package name */
        private final iv.h f31444b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f31445c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, iv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f31443a = str;
            this.f31444b = hVar;
            this.f31445c = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f31444b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f31443a, str, this.f31445c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f31446a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31447b;

        /* renamed from: c  reason: collision with root package name */
        private final iv.h f31448c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31449d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, iv.h hVar, boolean z10) {
            this.f31446a = method;
            this.f31447b = i10;
            this.f31448c = hVar;
            this.f31449d = z10;
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
                            String str2 = (String) this.f31448c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f31449d);
                            } else {
                                Method method = this.f31446a;
                                int i10 = this.f31447b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f31448c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f31446a;
                            int i11 = this.f31447b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f31446a, this.f31447b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f31446a, this.f31447b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final iv.h f31450a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f31451b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(iv.h hVar, boolean z10) {
            this.f31450a = hVar;
            this.f31451b = z10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f31450a.a(obj), null, this.f31451b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f31452a = new o();

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
        private final Method f31453a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31454b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f31453a = method;
            this.f31454b = i10;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f31453a, this.f31454b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f31455a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f31455a = cls;
        }

        @Override // iv.u
        void a(x xVar, Object obj) {
            xVar.h(this.f31455a, obj);
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
