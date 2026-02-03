package wi;

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
import ui.f;
import ui.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements vi.b {

    /* renamed from: e  reason: collision with root package name */
    private static final ui.d f52226e = new ui.d() { // from class: wi.a
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            d.c(obj, (ui.e) obj2);
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private static final f f52227f = new f() { // from class: wi.b
        @Override // ui.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).a((String) obj);
        }
    };

    /* renamed from: g  reason: collision with root package name */
    private static final f f52228g = new f() { // from class: wi.c
        @Override // ui.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).c(((Boolean) obj).booleanValue());
        }
    };

    /* renamed from: h  reason: collision with root package name */
    private static final b f52229h = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f52230a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f52231b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private ui.d f52232c = f52226e;

    /* renamed from: d  reason: collision with root package name */
    private boolean f52233d = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ui.a {
        a() {
        }

        @Override // ui.a
        public void a(Object obj, Writer writer) {
            e eVar = new e(writer, d.this.f52230a, d.this.f52231b, d.this.f52232c, d.this.f52233d);
            eVar.h(obj, false);
            eVar.p();
        }

        @Override // ui.a
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
        private static final DateFormat f52235a;

        static {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US);
            f52235a = simpleDateFormat;
            simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        }

        private b() {
        }

        @Override // ui.f
        /* renamed from: b */
        public void a(Date date, g gVar) {
            gVar.a(f52235a.format(date));
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    public d() {
        m(String.class, f52227f);
        m(Boolean.class, f52228g);
        m(Date.class, f52229h);
    }

    public static /* synthetic */ void c(Object obj, ui.e eVar) {
        throw new ui.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
    }

    public ui.a i() {
        return new a();
    }

    public d j(vi.a aVar) {
        aVar.a(this);
        return this;
    }

    public d k(boolean z10) {
        this.f52233d = z10;
        return this;
    }

    @Override // vi.b
    /* renamed from: l */
    public d a(Class cls, ui.d dVar) {
        this.f52230a.put(cls, dVar);
        this.f52231b.remove(cls);
        return this;
    }

    public d m(Class cls, f fVar) {
        this.f52231b.put(cls, fVar);
        this.f52230a.remove(cls);
        return this;
    }
}
