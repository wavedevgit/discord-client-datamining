package ej;

import ej.h;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final Map f22881a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f22882b;

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f22883c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements cj.b {

        /* renamed from: d  reason: collision with root package name */
        private static final bj.d f22884d = new bj.d() { // from class: ej.g
            @Override // bj.d
            public final void a(Object obj, Object obj2) {
                h.a.b(obj, (bj.e) obj2);
            }
        };

        /* renamed from: a  reason: collision with root package name */
        private final Map f22885a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private final Map f22886b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private bj.d f22887c = f22884d;

        public static /* synthetic */ void b(Object obj, bj.e eVar) {
            throw new bj.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
        }

        public h c() {
            return new h(new HashMap(this.f22885a), new HashMap(this.f22886b), this.f22887c);
        }

        public a d(cj.a aVar) {
            aVar.a(this);
            return this;
        }

        @Override // cj.b
        /* renamed from: e */
        public a a(Class cls, bj.d dVar) {
            this.f22885a.put(cls, dVar);
            this.f22886b.remove(cls);
            return this;
        }
    }

    h(Map map, Map map2, bj.d dVar) {
        this.f22881a = map;
        this.f22882b = map2;
        this.f22883c = dVar;
    }

    public static a a() {
        return new a();
    }

    public void b(Object obj, OutputStream outputStream) {
        new f(outputStream, this.f22881a, this.f22882b, this.f22883c).q(obj);
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
