package wv;

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
        @Override // wv.u
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

        @Override // wv.u
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
        private final Method f54174a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54175b;

        /* renamed from: c  reason: collision with root package name */
        private final wv.h f54176c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, wv.h hVar) {
            this.f54174a = method;
            this.f54175b = i10;
            this.f54176c = hVar;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f54176c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f54174a;
                    int i10 = this.f54175b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f54174a, this.f54175b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f54177a;

        /* renamed from: b  reason: collision with root package name */
        private final wv.h f54178b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f54179c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, wv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f54177a = str;
            this.f54178b = hVar;
            this.f54179c = z10;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f54178b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f54177a, str, this.f54179c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f54180a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54181b;

        /* renamed from: c  reason: collision with root package name */
        private final wv.h f54182c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f54183d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, wv.h hVar, boolean z10) {
            this.f54180a = method;
            this.f54181b = i10;
            this.f54182c = hVar;
            this.f54183d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // wv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f54182c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f54183d);
                            } else {
                                Method method = this.f54180a;
                                int i10 = this.f54181b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f54182c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f54180a;
                            int i11 = this.f54181b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f54180a, this.f54181b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f54180a, this.f54181b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f54184a;

        /* renamed from: b  reason: collision with root package name */
        private final wv.h f54185b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f54186c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, wv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f54184a = str;
            this.f54185b = hVar;
            this.f54186c = z10;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f54185b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f54184a, str, this.f54186c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f54187a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54188b;

        /* renamed from: c  reason: collision with root package name */
        private final wv.h f54189c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f54190d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, wv.h hVar, boolean z10) {
            this.f54187a = method;
            this.f54188b = i10;
            this.f54189c = hVar;
            this.f54190d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // wv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.b(str, (String) this.f54189c.a(value), this.f54190d);
                        } else {
                            Method method = this.f54187a;
                            int i10 = this.f54188b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f54187a, this.f54188b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f54187a, this.f54188b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f54191a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54192b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f54191a = method;
            this.f54192b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // wv.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f54191a, this.f54192b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f54193a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54194b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f54195c;

        /* renamed from: d  reason: collision with root package name */
        private final wv.h f54196d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, wv.h hVar) {
            this.f54193a = method;
            this.f54194b = i10;
            this.f54195c = headers;
            this.f54196d = hVar;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f54195c, (RequestBody) this.f54196d.a(obj));
            } catch (IOException e10) {
                Method method = this.f54193a;
                int i10 = this.f54194b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f54197a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54198b;

        /* renamed from: c  reason: collision with root package name */
        private final wv.h f54199c;

        /* renamed from: d  reason: collision with root package name */
        private final String f54200d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, wv.h hVar, String str) {
            this.f54197a = method;
            this.f54198b = i10;
            this.f54199c = hVar;
            this.f54200d = str;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // wv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.d(Headers.h("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f54200d), (RequestBody) this.f54199c.a(value));
                        } else {
                            Method method = this.f54197a;
                            int i10 = this.f54198b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f54197a, this.f54198b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f54197a, this.f54198b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f54201a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54202b;

        /* renamed from: c  reason: collision with root package name */
        private final String f54203c;

        /* renamed from: d  reason: collision with root package name */
        private final wv.h f54204d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f54205e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, wv.h hVar, boolean z10) {
            this.f54201a = method;
            this.f54202b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f54203c = str;
            this.f54204d = hVar;
            this.f54205e = z10;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f54203c, (String) this.f54204d.a(obj), this.f54205e);
                return;
            }
            Method method = this.f54201a;
            int i10 = this.f54202b;
            throw e0.p(method, i10, "Path parameter \"" + this.f54203c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f54206a;

        /* renamed from: b  reason: collision with root package name */
        private final wv.h f54207b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f54208c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, wv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f54206a = str;
            this.f54207b = hVar;
            this.f54208c = z10;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f54207b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f54206a, str, this.f54208c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f54209a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54210b;

        /* renamed from: c  reason: collision with root package name */
        private final wv.h f54211c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f54212d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, wv.h hVar, boolean z10) {
            this.f54209a = method;
            this.f54210b = i10;
            this.f54211c = hVar;
            this.f54212d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // wv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f54211c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f54212d);
                            } else {
                                Method method = this.f54209a;
                                int i10 = this.f54210b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f54211c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f54209a;
                            int i11 = this.f54210b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f54209a, this.f54210b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f54209a, this.f54210b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final wv.h f54213a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f54214b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(wv.h hVar, boolean z10) {
            this.f54213a = hVar;
            this.f54214b = z10;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f54213a.a(obj), null, this.f54214b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f54215a = new o();

        private o() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // wv.u
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
        private final Method f54216a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54217b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f54216a = method;
            this.f54217b = i10;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f54216a, this.f54217b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f54218a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f54218a = cls;
        }

        @Override // wv.u
        void a(x xVar, Object obj) {
            xVar.h(this.f54218a, obj);
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
