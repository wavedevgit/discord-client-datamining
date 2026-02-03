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
    private final Map f53305a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f53306b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f53307c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements vi.b {

        /* renamed from: d  reason: collision with root package name */
        private static final ui.d f53308d = new ui.d() { // from class: xi.g
            @Override // ui.d
            public final void a(Object obj, Object obj2) {
                h.a.b(obj, (ui.e) obj2);
            }
        };

        /* renamed from: a  reason: collision with root package name */
        private final Map f53309a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private final Map f53310b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private ui.d f53311c = f53308d;

        public static /* synthetic */ void b(Object obj, ui.e eVar) {
            throw new ui.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
        }

        public h c() {
            return new h(new HashMap(this.f53309a), new HashMap(this.f53310b), this.f53311c);
        }

        public a d(vi.a aVar) {
            aVar.a(this);
            return this;
        }

        @Override // vi.b
        /* renamed from: e */
        public a a(Class cls, ui.d dVar) {
            this.f53309a.put(cls, dVar);
            this.f53310b.remove(cls);
            return this;
        }
    }

    h(Map map, Map map2, ui.d dVar) {
        this.f53305a = map;
        this.f53306b = map2;
        this.f53307c = dVar;
    }

    public static a a() {
        return new a();
    }

    public void b(Object obj, OutputStream outputStream) {
        new f(outputStream, this.f53305a, this.f53306b, this.f53307c).q(obj);
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
