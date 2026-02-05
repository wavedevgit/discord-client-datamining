package aj;

import aj.h;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final Map f669a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f670b;

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f671c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements yi.b {

        /* renamed from: d  reason: collision with root package name */
        private static final xi.d f672d = new xi.d() { // from class: aj.g
            @Override // xi.d
            public final void a(Object obj, Object obj2) {
                h.a.b(obj, (xi.e) obj2);
            }
        };

        /* renamed from: a  reason: collision with root package name */
        private final Map f673a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private final Map f674b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private xi.d f675c = f672d;

        public static /* synthetic */ void b(Object obj, xi.e eVar) {
            throw new xi.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
        }

        public h c() {
            return new h(new HashMap(this.f673a), new HashMap(this.f674b), this.f675c);
        }

        public a d(yi.a aVar) {
            aVar.a(this);
            return this;
        }

        @Override // yi.b
        /* renamed from: e */
        public a a(Class cls, xi.d dVar) {
            this.f673a.put(cls, dVar);
            this.f674b.remove(cls);
            return this;
        }
    }

    h(Map map, Map map2, xi.d dVar) {
        this.f669a = map;
        this.f670b = map2;
        this.f671c = dVar;
    }

    public static a a() {
        return new a();
    }

    public void b(Object obj, OutputStream outputStream) {
        new f(outputStream, this.f669a, this.f670b, this.f671c).q(obj);
    }

    public byte[] c(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            b(obj, byteArrayOutputStream);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
