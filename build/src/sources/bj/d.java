package bj;

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
import zi.f;
import zi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements aj.b {

    /* renamed from: e  reason: collision with root package name */
    private static final zi.d f7057e = new zi.d() { // from class: bj.a
        @Override // zi.d
        public final void a(Object obj, Object obj2) {
            d.c(obj, (zi.e) obj2);
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private static final f f7058f = new f() { // from class: bj.b
        @Override // zi.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).c((String) obj);
        }
    };

    /* renamed from: g  reason: collision with root package name */
    private static final f f7059g = new f() { // from class: bj.c
        @Override // zi.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).e(((Boolean) obj).booleanValue());
        }
    };

    /* renamed from: h  reason: collision with root package name */
    private static final b f7060h = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f7061a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f7062b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private zi.d f7063c = f7057e;

    /* renamed from: d  reason: collision with root package name */
    private boolean f7064d = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements zi.a {
        a() {
        }

        @Override // zi.a
        public void a(Object obj, Writer writer) {
            e eVar = new e(writer, d.this.f7061a, d.this.f7062b, d.this.f7063c, d.this.f7064d);
            eVar.h(obj, false);
            eVar.p();
        }

        @Override // zi.a
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
        private static final DateFormat f7066a;

        static {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US);
            f7066a = simpleDateFormat;
            simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        }

        private b() {
        }

        @Override // zi.f
        /* renamed from: b */
        public void a(Date date, g gVar) {
            gVar.c(f7066a.format(date));
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    public d() {
        m(String.class, f7058f);
        m(Boolean.class, f7059g);
        m(Date.class, f7060h);
    }

    public static /* synthetic */ void c(Object obj, zi.e eVar) {
        throw new zi.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
    }

    public zi.a i() {
        return new a();
    }

    public d j(aj.a aVar) {
        aVar.a(this);
        return this;
    }

    public d k(boolean z10) {
        this.f7064d = z10;
        return this;
    }

    @Override // aj.b
    /* renamed from: l */
    public d a(Class cls, zi.d dVar) {
        this.f7061a.put(cls, dVar);
        this.f7062b.remove(cls);
        return this;
    }

    public d m(Class cls, f fVar) {
        this.f7062b.put(cls, fVar);
        this.f7061a.remove(cls);
        return this;
    }
}
