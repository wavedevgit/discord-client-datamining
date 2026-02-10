package cj;

import cj.h;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final Map f7639a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f7640b;

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f7641c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements aj.b {

        /* renamed from: d  reason: collision with root package name */
        private static final zi.d f7642d = new zi.d() { // from class: cj.g
            @Override // zi.d
            public final void a(Object obj, Object obj2) {
                h.a.b(obj, (zi.e) obj2);
            }
        };

        /* renamed from: a  reason: collision with root package name */
        private final Map f7643a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private final Map f7644b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private zi.d f7645c = f7642d;

        public static /* synthetic */ void b(Object obj, zi.e eVar) {
            throw new zi.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
        }

        public h c() {
            return new h(new HashMap(this.f7643a), new HashMap(this.f7644b), this.f7645c);
        }

        public a d(aj.a aVar) {
            aVar.a(this);
            return this;
        }

        @Override // aj.b
        /* renamed from: e */
        public a a(Class cls, zi.d dVar) {
            this.f7643a.put(cls, dVar);
            this.f7644b.remove(cls);
            return this;
        }
    }

    h(Map map, Map map2, zi.d dVar) {
        this.f7639a = map;
        this.f7640b = map2;
        this.f7641c = dVar;
    }

    public static a a() {
        return new a();
    }

    public void b(Object obj, OutputStream outputStream) {
        new f(outputStream, this.f7639a, this.f7640b, this.f7641c).q(obj);
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
