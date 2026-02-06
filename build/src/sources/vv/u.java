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
        private final Method f53099a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53100b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53101c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, vv.h hVar) {
            this.f53099a = method;
            this.f53100b = i10;
            this.f53101c = hVar;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f53101c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f53099a;
                    int i10 = this.f53100b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f53099a, this.f53100b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f53102a;

        /* renamed from: b  reason: collision with root package name */
        private final vv.h f53103b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f53104c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, vv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f53102a = str;
            this.f53103b = hVar;
            this.f53104c = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f53103b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f53102a, str, this.f53104c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53105a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53106b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53107c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53108d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, vv.h hVar, boolean z10) {
            this.f53105a = method;
            this.f53106b = i10;
            this.f53107c = hVar;
            this.f53108d = z10;
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
                            String str2 = (String) this.f53107c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f53108d);
                            } else {
                                Method method = this.f53105a;
                                int i10 = this.f53106b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f53107c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f53105a;
                            int i11 = this.f53106b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f53105a, this.f53106b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f53105a, this.f53106b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f53109a;

        /* renamed from: b  reason: collision with root package name */
        private final vv.h f53110b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f53111c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, vv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f53109a = str;
            this.f53110b = hVar;
            this.f53111c = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f53110b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f53109a, str, this.f53111c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53112a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53113b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53114c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53115d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, vv.h hVar, boolean z10) {
            this.f53112a = method;
            this.f53113b = i10;
            this.f53114c = hVar;
            this.f53115d = z10;
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
                            xVar.b(str, (String) this.f53114c.a(value), this.f53115d);
                        } else {
                            Method method = this.f53112a;
                            int i10 = this.f53113b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f53112a, this.f53113b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f53112a, this.f53113b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53116a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53117b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f53116a = method;
            this.f53117b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // vv.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f53116a, this.f53117b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53118a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53119b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f53120c;

        /* renamed from: d  reason: collision with root package name */
        private final vv.h f53121d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, vv.h hVar) {
            this.f53118a = method;
            this.f53119b = i10;
            this.f53120c = headers;
            this.f53121d = hVar;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f53120c, (RequestBody) this.f53121d.a(obj));
            } catch (IOException e10) {
                Method method = this.f53118a;
                int i10 = this.f53119b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53122a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53123b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53124c;

        /* renamed from: d  reason: collision with root package name */
        private final String f53125d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, vv.h hVar, String str) {
            this.f53122a = method;
            this.f53123b = i10;
            this.f53124c = hVar;
            this.f53125d = str;
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
                            xVar.d(Headers.h("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f53125d), (RequestBody) this.f53124c.a(value));
                        } else {
                            Method method = this.f53122a;
                            int i10 = this.f53123b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f53122a, this.f53123b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f53122a, this.f53123b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53126a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53127b;

        /* renamed from: c  reason: collision with root package name */
        private final String f53128c;

        /* renamed from: d  reason: collision with root package name */
        private final vv.h f53129d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53130e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, vv.h hVar, boolean z10) {
            this.f53126a = method;
            this.f53127b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f53128c = str;
            this.f53129d = hVar;
            this.f53130e = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f53128c, (String) this.f53129d.a(obj), this.f53130e);
                return;
            }
            Method method = this.f53126a;
            int i10 = this.f53127b;
            throw e0.p(method, i10, "Path parameter \"" + this.f53128c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f53131a;

        /* renamed from: b  reason: collision with root package name */
        private final vv.h f53132b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f53133c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, vv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f53131a = str;
            this.f53132b = hVar;
            this.f53133c = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f53132b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f53131a, str, this.f53133c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f53134a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53135b;

        /* renamed from: c  reason: collision with root package name */
        private final vv.h f53136c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53137d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, vv.h hVar, boolean z10) {
            this.f53134a = method;
            this.f53135b = i10;
            this.f53136c = hVar;
            this.f53137d = z10;
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
                            String str2 = (String) this.f53136c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f53137d);
                            } else {
                                Method method = this.f53134a;
                                int i10 = this.f53135b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f53136c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f53134a;
                            int i11 = this.f53135b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f53134a, this.f53135b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f53134a, this.f53135b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final vv.h f53138a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f53139b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(vv.h hVar, boolean z10) {
            this.f53138a = hVar;
            this.f53139b = z10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f53138a.a(obj), null, this.f53139b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f53140a = new o();

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
        private final Method f53141a;

        /* renamed from: b  reason: collision with root package name */
        private final int f53142b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f53141a = method;
            this.f53142b = i10;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f53141a, this.f53142b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f53143a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f53143a = cls;
        }

        @Override // vv.u
        void a(x xVar, Object obj) {
            xVar.h(this.f53143a, obj);
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
