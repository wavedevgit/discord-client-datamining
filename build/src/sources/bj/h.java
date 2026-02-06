package bj;

import bj.h;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final Map f6798a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f6799b;

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f6800c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements zi.b {

        /* renamed from: d  reason: collision with root package name */
        private static final yi.d f6801d = new yi.d() { // from class: bj.g
            @Override // yi.d
            public final void a(Object obj, Object obj2) {
                h.a.b(obj, (yi.e) obj2);
            }
        };

        /* renamed from: a  reason: collision with root package name */
        private final Map f6802a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private final Map f6803b = new HashMap();

        /* renamed from: c  reason: collision with root package name */
        private yi.d f6804c = f6801d;

        public static /* synthetic */ void b(Object obj, yi.e eVar) {
            throw new yi.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
        }

        public h c() {
            return new h(new HashMap(this.f6802a), new HashMap(this.f6803b), this.f6804c);
        }

        public a d(zi.a aVar) {
            aVar.a(this);
            return this;
        }

        @Override // zi.b
        /* renamed from: e */
        public a a(Class cls, yi.d dVar) {
            this.f6802a.put(cls, dVar);
            this.f6803b.remove(cls);
            return this;
        }
    }

    h(Map map, Map map2, yi.d dVar) {
        this.f6798a = map;
        this.f6799b = map2;
        this.f6800c = dVar;
    }

    public static a a() {
        return new a();
    }

    public void b(Object obj, OutputStream outputStream) {
        new f(outputStream, this.f6798a, this.f6799b, this.f6800c).q(obj);
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
