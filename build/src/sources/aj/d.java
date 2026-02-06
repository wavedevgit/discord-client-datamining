package aj;

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
import yi.f;
import yi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements zi.b {

    /* renamed from: e  reason: collision with root package name */
    private static final yi.d f1069e = new yi.d() { // from class: aj.a
        @Override // yi.d
        public final void a(Object obj, Object obj2) {
            d.c(obj, (yi.e) obj2);
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private static final f f1070f = new f() { // from class: aj.b
        @Override // yi.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).d((String) obj);
        }
    };

    /* renamed from: g  reason: collision with root package name */
    private static final f f1071g = new f() { // from class: aj.c
        @Override // yi.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).e(((Boolean) obj).booleanValue());
        }
    };

    /* renamed from: h  reason: collision with root package name */
    private static final b f1072h = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f1073a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f1074b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private yi.d f1075c = f1069e;

    /* renamed from: d  reason: collision with root package name */
    private boolean f1076d = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements yi.a {
        a() {
        }

        @Override // yi.a
        public void a(Object obj, Writer writer) {
            e eVar = new e(writer, d.this.f1073a, d.this.f1074b, d.this.f1075c, d.this.f1076d);
            eVar.h(obj, false);
            eVar.p();
        }

        @Override // yi.a
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
        private static final DateFormat f1078a;

        static {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US);
            f1078a = simpleDateFormat;
            simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        }

        private b() {
        }

        @Override // yi.f
        /* renamed from: b */
        public void a(Date date, g gVar) {
            gVar.d(f1078a.format(date));
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    public d() {
        m(String.class, f1070f);
        m(Boolean.class, f1071g);
        m(Date.class, f1072h);
    }

    public static /* synthetic */ void c(Object obj, yi.e eVar) {
        throw new yi.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
    }

    public yi.a i() {
        return new a();
    }

    public d j(zi.a aVar) {
        aVar.a(this);
        return this;
    }

    public d k(boolean z10) {
        this.f1076d = z10;
        return this;
    }

    @Override // zi.b
    /* renamed from: l */
    public d a(Class cls, yi.d dVar) {
        this.f1073a.put(cls, dVar);
        this.f1074b.remove(cls);
        return this;
    }

    public d m(Class cls, f fVar) {
        this.f1074b.put(cls, fVar);
        this.f1073a.remove(cls);
        return this;
    }
}
