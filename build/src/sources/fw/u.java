package fw;

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
        @Override // fw.u
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

        @Override // fw.u
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
        private final Method f24500a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24501b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24502c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, fw.h hVar) {
            this.f24500a = method;
            this.f24501b = i10;
            this.f24502c = hVar;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f24502c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f24500a;
                    int i10 = this.f24501b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f24500a, this.f24501b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f24503a;

        /* renamed from: b  reason: collision with root package name */
        private final fw.h f24504b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f24505c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, fw.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f24503a = str;
            this.f24504b = hVar;
            this.f24505c = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f24504b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f24503a, str, this.f24505c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24506a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24507b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24508c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f24509d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, fw.h hVar, boolean z10) {
            this.f24506a = method;
            this.f24507b = i10;
            this.f24508c = hVar;
            this.f24509d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // fw.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f24508c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f24509d);
                            } else {
                                Method method = this.f24506a;
                                int i10 = this.f24507b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f24508c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f24506a;
                            int i11 = this.f24507b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f24506a, this.f24507b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f24506a, this.f24507b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f24510a;

        /* renamed from: b  reason: collision with root package name */
        private final fw.h f24511b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f24512c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, fw.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f24510a = str;
            this.f24511b = hVar;
            this.f24512c = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f24511b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f24510a, str, this.f24512c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24513a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24514b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24515c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f24516d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, fw.h hVar, boolean z10) {
            this.f24513a = method;
            this.f24514b = i10;
            this.f24515c = hVar;
            this.f24516d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // fw.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.b(str, (String) this.f24515c.a(value), this.f24516d);
                        } else {
                            Method method = this.f24513a;
                            int i10 = this.f24514b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f24513a, this.f24514b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f24513a, this.f24514b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24517a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24518b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f24517a = method;
            this.f24518b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // fw.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f24517a, this.f24518b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24519a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24520b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f24521c;

        /* renamed from: d  reason: collision with root package name */
        private final fw.h f24522d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, fw.h hVar) {
            this.f24519a = method;
            this.f24520b = i10;
            this.f24521c = headers;
            this.f24522d = hVar;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f24521c, (RequestBody) this.f24522d.a(obj));
            } catch (IOException e10) {
                Method method = this.f24519a;
                int i10 = this.f24520b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24523a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24524b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24525c;

        /* renamed from: d  reason: collision with root package name */
        private final String f24526d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, fw.h hVar, String str) {
            this.f24523a = method;
            this.f24524b = i10;
            this.f24525c = hVar;
            this.f24526d = str;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // fw.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            xVar.d(Headers.i("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f24526d), (RequestBody) this.f24525c.a(value));
                        } else {
                            Method method = this.f24523a;
                            int i10 = this.f24524b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f24523a, this.f24524b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f24523a, this.f24524b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24527a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24528b;

        /* renamed from: c  reason: collision with root package name */
        private final String f24529c;

        /* renamed from: d  reason: collision with root package name */
        private final fw.h f24530d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f24531e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, fw.h hVar, boolean z10) {
            this.f24527a = method;
            this.f24528b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f24529c = str;
            this.f24530d = hVar;
            this.f24531e = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f24529c, (String) this.f24530d.a(obj), this.f24531e);
                return;
            }
            Method method = this.f24527a;
            int i10 = this.f24528b;
            throw e0.p(method, i10, "Path parameter \"" + this.f24529c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f24532a;

        /* renamed from: b  reason: collision with root package name */
        private final fw.h f24533b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f24534c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, fw.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f24532a = str;
            this.f24533b = hVar;
            this.f24534c = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f24533b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f24532a, str, this.f24534c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24535a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24536b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24537c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f24538d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, fw.h hVar, boolean z10) {
            this.f24535a = method;
            this.f24536b = i10;
            this.f24537c = hVar;
            this.f24538d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // fw.u
        /* renamed from: d */
        public void a(x xVar, Map map) {
            if (map != null) {
                for (Map.Entry entry : map.entrySet()) {
                    String str = (String) entry.getKey();
                    if (str != null) {
                        Object value = entry.getValue();
                        if (value != null) {
                            String str2 = (String) this.f24537c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f24538d);
                            } else {
                                Method method = this.f24535a;
                                int i10 = this.f24536b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f24537c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f24535a;
                            int i11 = this.f24536b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f24535a, this.f24536b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f24535a, this.f24536b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final fw.h f24539a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f24540b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(fw.h hVar, boolean z10) {
            this.f24539a = hVar;
            this.f24540b = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f24539a.a(obj), null, this.f24540b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f24541a = new o();

        private o() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // fw.u
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
        private final Method f24542a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24543b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f24542a = method;
            this.f24543b = i10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f24542a, this.f24543b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f24544a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f24544a = cls;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            xVar.h(this.f24544a, obj);
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
