package zi;

import j$.util.DesugarTimeZone;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import xi.f;
import xi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements yi.b {

    /* renamed from: e  reason: collision with root package name */
    private static final xi.d f55974e = new xi.d() { // from class: zi.a
        @Override // xi.d
        public final void a(Object obj, Object obj2) {
            d.c(obj, (xi.e) obj2);
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private static final f f55975f = new f() { // from class: zi.b
        @Override // xi.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).a((String) obj);
        }
    };

    /* renamed from: g  reason: collision with root package name */
    private static final f f55976g = new f() { // from class: zi.c
        @Override // xi.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).e(((Boolean) obj).booleanValue());
        }
    };

    /* renamed from: h  reason: collision with root package name */
    private static final b f55977h = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f55978a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f55979b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private xi.d f55980c = f55974e;

    /* renamed from: d  reason: collision with root package name */
    private boolean f55981d = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements xi.a {
        a() {
        }

        @Override // xi.a
        public void a(Object obj, Writer writer) {
            e eVar = new e(writer, d.this.f55978a, d.this.f55979b, d.this.f55980c, d.this.f55981d);
            eVar.h(obj, false);
            eVar.p();
        }

        @Override // xi.a
        public String b(Object obj) {
            StringWriter stringWriter = new StringWriter();
            try {
                a(obj, stringWriter);
            } catch (IOException unused) {
            }
            return stringWriter.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements f {

        /* renamed from: a  reason: collision with root package name */
        private static final DateFormat f55983a;

        static {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US);
            f55983a = simpleDateFormat;
            simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        }

        private b() {
        }

        @Override // xi.f
        /* renamed from: b */
        public void a(Date date, g gVar) {
            gVar.a(f55983a.format(date));
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    public d() {
        m(String.class, f55975f);
        m(Boolean.class, f55976g);
        m(Date.class, f55977h);
    }

    public static /* synthetic */ void c(Object obj, xi.e eVar) {
        throw new xi.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
    }

    public xi.a i() {
        return new a();
    }

    public d j(yi.a aVar) {
        aVar.a(this);
        return this;
    }

    public d k(boolean z10) {
        this.f55981d = z10;
        return this;
    }

    @Override // yi.b
    /* renamed from: l */
    public d a(Class cls, xi.d dVar) {
        this.f55978a.put(cls, dVar);
        this.f55979b.remove(cls);
        return this;
    }

    public d m(Class cls, f fVar) {
        this.f55979b.put(cls, fVar);
        this.f55978a.remove(cls);
        return this;
    }
}
