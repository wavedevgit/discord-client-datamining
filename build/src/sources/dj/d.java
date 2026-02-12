package dj;

import bj.f;
import bj.g;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements cj.b {

    /* renamed from: e  reason: collision with root package name */
    private static final bj.d f21733e = new bj.d() { // from class: dj.a
        @Override // bj.d
        public final void a(Object obj, Object obj2) {
            d.c(obj, (bj.e) obj2);
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private static final f f21734f = new f() { // from class: dj.b
        @Override // bj.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).a((String) obj);
        }
    };

    /* renamed from: g  reason: collision with root package name */
    private static final f f21735g = new f() { // from class: dj.c
        @Override // bj.f
        public final void a(Object obj, Object obj2) {
            ((g) obj2).d(((Boolean) obj).booleanValue());
        }
    };

    /* renamed from: h  reason: collision with root package name */
    private static final b f21736h = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f21737a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f21738b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private bj.d f21739c = f21733e;

    /* renamed from: d  reason: collision with root package name */
    private boolean f21740d = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements bj.a {
        a() {
        }

        @Override // bj.a
        public void a(Object obj, Writer writer) {
            e eVar = new e(writer, d.this.f21737a, d.this.f21738b, d.this.f21739c, d.this.f21740d);
            eVar.h(obj, false);
            eVar.p();
        }

        @Override // bj.a
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
        private static final DateFormat f21742a;

        static {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US);
            f21742a = simpleDateFormat;
            simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        }

        private b() {
        }

        @Override // bj.f
        /* renamed from: b */
        public void a(Date date, g gVar) {
            gVar.a(f21742a.format(date));
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    public d() {
        m(String.class, f21734f);
        m(Boolean.class, f21735g);
        m(Date.class, f21736h);
    }

    public static /* synthetic */ void c(Object obj, bj.e eVar) {
        throw new bj.b("Couldn't find encoder for type " + obj.getClass().getCanonicalName());
    }

    public bj.a i() {
        return new a();
    }

    public d j(cj.a aVar) {
        aVar.a(this);
        return this;
    }

    public d k(boolean z10) {
        this.f21740d = z10;
        return this;
    }

    @Override // cj.b
    /* renamed from: l */
    public d a(Class cls, bj.d dVar) {
        this.f21737a.put(cls, dVar);
        this.f21738b.remove(cls);
        return this;
    }

    public d m(Class cls, f fVar) {
        this.f21738b.put(cls, fVar);
        this.f21737a.remove(cls);
        return this;
    }
}
