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
        private final Method f24499a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24500b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24501c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Method method, int i10, fw.h hVar) {
            this.f24499a = method;
            this.f24500b = i10;
            this.f24501c = hVar;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                try {
                    xVar.l((RequestBody) this.f24501c.a(obj));
                    return;
                } catch (IOException e10) {
                    Method method = this.f24499a;
                    int i10 = this.f24500b;
                    throw e0.q(method, e10, i10, "Unable to convert " + obj + " to RequestBody", new Object[0]);
                }
            }
            throw e0.p(this.f24499a, this.f24500b, "Body parameter value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f24502a;

        /* renamed from: b  reason: collision with root package name */
        private final fw.h f24503b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f24504c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(String str, fw.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f24502a = str;
            this.f24503b = hVar;
            this.f24504c = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f24503b.a(obj)) == null) {
                return;
            }
            xVar.a(this.f24502a, str, this.f24504c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class e extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24505a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24506b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24507c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f24508d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(Method method, int i10, fw.h hVar, boolean z10) {
            this.f24505a = method;
            this.f24506b = i10;
            this.f24507c = hVar;
            this.f24508d = z10;
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
                            String str2 = (String) this.f24507c.a(value);
                            if (str2 != null) {
                                xVar.a(str, str2, this.f24508d);
                            } else {
                                Method method = this.f24505a;
                                int i10 = this.f24506b;
                                throw e0.p(method, i10, "Field map value '" + value + "' converted to null by " + this.f24507c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f24505a;
                            int i11 = this.f24506b;
                            throw e0.p(method2, i11, "Field map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f24505a, this.f24506b, "Field map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f24505a, this.f24506b, "Field map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class f extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f24509a;

        /* renamed from: b  reason: collision with root package name */
        private final fw.h f24510b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f24511c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(String str, fw.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f24509a = str;
            this.f24510b = hVar;
            this.f24511c = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f24510b.a(obj)) == null) {
                return;
            }
            xVar.b(this.f24509a, str, this.f24511c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class g extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24512a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24513b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24514c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f24515d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Method method, int i10, fw.h hVar, boolean z10) {
            this.f24512a = method;
            this.f24513b = i10;
            this.f24514c = hVar;
            this.f24515d = z10;
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
                            xVar.b(str, (String) this.f24514c.a(value), this.f24515d);
                        } else {
                            Method method = this.f24512a;
                            int i10 = this.f24513b;
                            throw e0.p(method, i10, "Header map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f24512a, this.f24513b, "Header map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f24512a, this.f24513b, "Header map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class h extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24516a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24517b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public h(Method method, int i10) {
            this.f24516a = method;
            this.f24517b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // fw.u
        /* renamed from: d */
        public void a(x xVar, Headers headers) {
            if (headers != null) {
                xVar.c(headers);
                return;
            }
            throw e0.p(this.f24516a, this.f24517b, "Headers parameter must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class i extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24518a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24519b;

        /* renamed from: c  reason: collision with root package name */
        private final Headers f24520c;

        /* renamed from: d  reason: collision with root package name */
        private final fw.h f24521d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public i(Method method, int i10, Headers headers, fw.h hVar) {
            this.f24518a = method;
            this.f24519b = i10;
            this.f24520c = headers;
            this.f24521d = hVar;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            try {
                xVar.d(this.f24520c, (RequestBody) this.f24521d.a(obj));
            } catch (IOException e10) {
                Method method = this.f24518a;
                int i10 = this.f24519b;
                throw e0.p(method, i10, "Unable to convert " + obj + " to RequestBody", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class j extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24522a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24523b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24524c;

        /* renamed from: d  reason: collision with root package name */
        private final String f24525d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(Method method, int i10, fw.h hVar, String str) {
            this.f24522a = method;
            this.f24523b = i10;
            this.f24524c = hVar;
            this.f24525d = str;
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
                            xVar.d(Headers.i("Content-Disposition", "form-data; name=\"" + str + "\"", "Content-Transfer-Encoding", this.f24525d), (RequestBody) this.f24524c.a(value));
                        } else {
                            Method method = this.f24522a;
                            int i10 = this.f24523b;
                            throw e0.p(method, i10, "Part map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f24522a, this.f24523b, "Part map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f24522a, this.f24523b, "Part map was null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class k extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24526a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24527b;

        /* renamed from: c  reason: collision with root package name */
        private final String f24528c;

        /* renamed from: d  reason: collision with root package name */
        private final fw.h f24529d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f24530e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public k(Method method, int i10, String str, fw.h hVar, boolean z10) {
            this.f24526a = method;
            this.f24527b = i10;
            Objects.requireNonNull(str, "name == null");
            this.f24528c = str;
            this.f24529d = hVar;
            this.f24530e = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.f(this.f24528c, (String) this.f24529d.a(obj), this.f24530e);
                return;
            }
            Method method = this.f24526a;
            int i10 = this.f24527b;
            throw e0.p(method, i10, "Path parameter \"" + this.f24528c + "\" value must not be null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class l extends u {

        /* renamed from: a  reason: collision with root package name */
        private final String f24531a;

        /* renamed from: b  reason: collision with root package name */
        private final fw.h f24532b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f24533c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public l(String str, fw.h hVar, boolean z10) {
            Objects.requireNonNull(str, "name == null");
            this.f24531a = str;
            this.f24532b = hVar;
            this.f24533c = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            String str;
            if (obj == null || (str = (String) this.f24532b.a(obj)) == null) {
                return;
            }
            xVar.g(this.f24531a, str, this.f24533c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class m extends u {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24534a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24535b;

        /* renamed from: c  reason: collision with root package name */
        private final fw.h f24536c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f24537d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public m(Method method, int i10, fw.h hVar, boolean z10) {
            this.f24534a = method;
            this.f24535b = i10;
            this.f24536c = hVar;
            this.f24537d = z10;
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
                            String str2 = (String) this.f24536c.a(value);
                            if (str2 != null) {
                                xVar.g(str, str2, this.f24537d);
                            } else {
                                Method method = this.f24534a;
                                int i10 = this.f24535b;
                                throw e0.p(method, i10, "Query map value '" + value + "' converted to null by " + this.f24536c.getClass().getName() + " for key '" + str + "'.", new Object[0]);
                            }
                        } else {
                            Method method2 = this.f24534a;
                            int i11 = this.f24535b;
                            throw e0.p(method2, i11, "Query map contained null value for key '" + str + "'.", new Object[0]);
                        }
                    } else {
                        throw e0.p(this.f24534a, this.f24535b, "Query map contained null key.", new Object[0]);
                    }
                }
                return;
            }
            throw e0.p(this.f24534a, this.f24535b, "Query map was null", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class n extends u {

        /* renamed from: a  reason: collision with root package name */
        private final fw.h f24538a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f24539b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public n(fw.h hVar, boolean z10) {
            this.f24538a = hVar;
            this.f24539b = z10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj == null) {
                return;
            }
            xVar.g((String) this.f24538a.a(obj), null, this.f24539b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class o extends u {

        /* renamed from: a  reason: collision with root package name */
        static final o f24540a = new o();

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
        private final Method f24541a;

        /* renamed from: b  reason: collision with root package name */
        private final int f24542b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(Method method, int i10) {
            this.f24541a = method;
            this.f24542b = i10;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            if (obj != null) {
                xVar.m(obj);
                return;
            }
            throw e0.p(this.f24541a, this.f24542b, "@Url parameter is null.", new Object[0]);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class q extends u {

        /* renamed from: a  reason: collision with root package name */
        final Class f24543a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public q(Class cls) {
            this.f24543a = cls;
        }

        @Override // fw.u
        void a(x xVar, Object obj) {
            xVar.h(this.f24543a, obj);
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
