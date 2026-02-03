package lv;

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
        @Override // lv.u
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

        @Override // lv.u
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
        private final Method f37446a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37447b;

        /* renamed from: c  reason: collision with root package name */
        private final lv.h f37448c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, lv.h hVar) {
            this.f37446a = method;
            this.f37447b = i10;
            this.f37448c = hVar;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f37448c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f37446a;
                    int i10 = this.f37447b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f37446a, this.f37447b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f37449a;

        /* renamed from: b  reason: collision with root package name */
        private final lv.h f37450b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f37451c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, lv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f37449a = str;
            this.f37450b = hVar;
            this.f37451c = z10;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f37450b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f37449a, str, this.f37451c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f37452a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37453b;

        /* renamed from: c  reason: collision with root package name */
        private final lv.h f37454c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f37455d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, lv.h hVar, boolean z10) {
            this.f37452a = method;
            this.f37453b = i10;
            this.f37454c = hVar;
            this.f37455d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // lv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f37454c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f37455d);
                            } else {
                                Method method = this.f37452a;
                                int i10 = this.f37453b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f37454c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f37452a;
                            int i11 = this.f37453b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f37452a, this.f37453b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f37452a, this.f37453b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f37456a;

        /* renamed from: b  reason: collision with root package name */
        private final lv.h f37457b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f37458c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, lv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f37456a = str;
            this.f37457b = hVar;
            this.f37458c = z10;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f37457b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f37456a, str, this.f37458c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f37459a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37460b;

        /* renamed from: c  reason: collision with root package name */
        private final lv.h f37461c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f37462d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, lv.h hVar, boolean z10) {
            this.f37459a = method;
            this.f37460b = i10;
            this.f37461c = hVar;
            this.f37462d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // lv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.b(str, (String) this.f37461c.a(value), this.f37462d);
                        } else {
                            Method method = this.f37459a;
                            int i10 = this.f37460b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f37459a, this.f37460b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f37459a, this.f37460b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f37463a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37464b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f37463a = method;
            this.f37464b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // lv.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f37463a, this.f37464b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f37465a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37466b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f37467c;

        /* renamed from: d  reason: collision with root package name */
        private final lv.h f37468d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, lv.h hVar) {
            this.f37465a = method;
            this.f37466b = i10;
            this.f37467c = headers;
            this.f37468d = hVar;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f37467c, (RequestBody) this.f37468d.a(obj));
            } catch (IOException e10) {
                Method method = this.f37465a;
                int i10 = this.f37466b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f37469a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37470b;

        /* renamed from: c  reason: collision with root package name */
        private final lv.h f37471c;

        /* renamed from: d  reason: collision with root package name */
        private final String f37472d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, lv.h hVar, String str) {
            this.f37469a = method;
            this.f37470b = i10;
            this.f37471c = hVar;
            this.f37472d = str;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // lv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.d(Headers.h("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f37472d), (RequestBody) this.f37471c.a(value));
                        } else {
                            Method method = this.f37469a;
                            int i10 = this.f37470b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f37469a, this.f37470b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f37469a, this.f37470b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f37473a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37474b;

        /* renamed from: c  reason: collision with root package name */
        private final String f37475c;

        /* renamed from: d  reason: collision with root package name */
        private final lv.h f37476d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f37477e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, lv.h hVar, boolean z10) {
            this.f37473a = method;
            this.f37474b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f37475c = str;
            this.f37476d = hVar;
            this.f37477e = z10;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f37475c, (String) this.f37476d.a(obj), this.f37477e);
                return;
            }
            Method method = this.f37473a;
            int i10 = this.f37474b;
            throw e0.p(method, i10, "Path parameter \"" + this.f37475c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f37478a;

        /* renamed from: b  reason: collision with root package name */
        private final lv.h f37479b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f37480c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, lv.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f37478a = str;
            this.f37479b = hVar;
            this.f37480c = z10;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f37479b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f37478a, str, this.f37480c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f37481a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37482b;

        /* renamed from: c  reason: collision with root package name */
        private final lv.h f37483c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f37484d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, lv.h hVar, boolean z10) {
            this.f37481a = method;
            this.f37482b = i10;
            this.f37483c = hVar;
            this.f37484d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // lv.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f37483c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f37484d);
                            } else {
                                Method method = this.f37481a;
                                int i10 = this.f37482b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f37483c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f37481a;
                            int i11 = this.f37482b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f37481a, this.f37482b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f37481a, this.f37482b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final lv.h f37485a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f37486b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(lv.h hVar, boolean z10) {
            this.f37485a = hVar;
            this.f37486b = z10;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f37485a.a(obj), null, this.f37486b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f37487a = new o();

        private o() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // lv.u
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
        private final Method f37488a;

        /* renamed from: b  reason: collision with root package name */
        private final int f37489b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f37488a = method;
            this.f37489b = i10;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f37488a, this.f37489b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f37490a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f37490a = cls;
        }

        @Override // lv.u
        void a(x xVar, Object obj) {
            xVar.h(this.f37490a, obj);
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
