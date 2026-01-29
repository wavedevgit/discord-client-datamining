package ef;

import android.content.Context;
import android.os.Looper;
import ef.e;
import gf.c;
import gf.q;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final AbstractC0290a f22759a;

    /* renamed from: b  reason: collision with root package name */
    private final g f22760b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22761c;

    /* renamed from: ef.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractC0290a extends e {
        public f a(Context context, Looper looper, gf.d dVar, Object obj, e.a aVar, e.b bVar) {
            return b(context, looper, dVar, obj, aVar, bVar);
        }

        public f b(Context context, Looper looper, gf.d dVar, Object obj, ff.d dVar2, ff.k kVar) {
            throw new UnsupportedOperationException("buildClient must be implemented");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {

        /* renamed from: c  reason: collision with root package name */
        public static final C0291a f22762c = new C0291a(null);

        /* renamed from: ef.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0291a implements d {
            /* synthetic */ C0291a(m mVar) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class e {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface f extends b {
        boolean a();

        void b(String str);

        boolean c();

        String d();

        void e(c.InterfaceC0340c interfaceC0340c);

        boolean f();

        boolean g();

        Set i();

        void j(gf.j jVar, Set set);

        void k();

        void l(c.e eVar);

        int n();

        com.google.android.gms.common.d[] o();

        String p();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g extends c {
    }

    public a(String str, AbstractC0290a abstractC0290a, g gVar) {
        q.m(abstractC0290a, "Cannot construct an Api with a null ClientBuilder");
        q.m(gVar, "Cannot construct an Api with a null ClientKey");
        this.f22761c = str;
        this.f22759a = abstractC0290a;
        this.f22760b = gVar;
    }

    public final AbstractC0290a a() {
        return this.f22759a;
    }

    public final c b() {
        return this.f22760b;
    }

    public final String c() {
        return this.f22761c;
    }
}
