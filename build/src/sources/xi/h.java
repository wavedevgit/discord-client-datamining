package xi;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
import xi.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final Map f53302a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f53303b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f53304c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements vi.b {

        /* renamed from: d  reason: collision with root package name */
        private static final ui.d f53305d = new ui.d() { // from class: xi.g
            @Override // ui.d
            public final void a(Object obj, Object obj2) {
                h.a.b(obj, (ui.e) obj2);
            }
        };

        /* renamed from: a  reason: collision with root package name */
        private final Map f53306a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private final Map f53307b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private ui.d f53308c = f53305d;

        public static /* synthetic */ void b(Object obj, ui.e eVar) {
            throw new ui.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
        }

        public h c() {
            return new h(new HashMap(this.f53306a), new HashMap(this.f53307b), this.f53308c);
        }

        public a d(vi.a aVar) {
            aVar.a(this);
            return this;
        }

        @Override // vi.b
        /* renamed from: e */
        public a a(Class cls, ui.d dVar) {
            this.f53306a.put(cls, dVar);
            this.f53307b.remove(cls);
            return this;
        }
    }

    h(Map map, Map map2, ui.d dVar) {
        this.f53302a = map;
        this.f53303b = map2;
        this.f53304c = dVar;
    }

    public static a a() {
        return new a();
    }

    public void b(Object obj, OutputStream outputStream) {
        new f(outputStream, this.f53302a, this.f53303b, this.f53304c).q(obj);
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
