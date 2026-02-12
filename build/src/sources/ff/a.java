package ff;

import android.content.Context;
import android.os.Looper;
import ff.e;
import hf.c;
import hf.q;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final AbstractC0316a f23721a;

    /* renamed from: b  reason: collision with root package name */
    private final g f23722b;

    /* renamed from: c  reason: collision with root package name */
    private final String f23723c;

    /* renamed from: ff.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractC0316a extends e {
        public f a(Context context, Looper looper, hf.d dVar, Object obj, e.a aVar, e.b bVar) {
            return b(context, looper, dVar, obj, aVar, bVar);
        }

        public f b(Context context, Looper looper, hf.d dVar, Object obj, gf.d dVar2, gf.k kVar) {
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

        /* renamed from: g  reason: collision with root package name */
        public static final C0317a f23724g = new C0317a(null);

        /* renamed from: ff.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0317a implements d {
            /* synthetic */ C0317a(m mVar) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class e {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface f extends b {
        boolean a();

        void b(c.InterfaceC0361c interfaceC0361c);

        void c(String str);

        boolean d();

        String e();

        boolean f();

        void g(c.e eVar);

        boolean h();

        Set j();

        void l();

        void m(hf.j jVar, Set set);

        int n();

        com.google.android.gms.common.d[] o();

        String p();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g extends c {
    }

    public a(String str, AbstractC0316a abstractC0316a, g gVar) {
        q.m(abstractC0316a, "Cannot construct an Api with a null ClientBuilder");
        q.m(gVar, "Cannot construct an Api with a null ClientKey");
        this.f23723c = str;
        this.f23721a = abstractC0316a;
        this.f23722b = gVar;
    }

    public final AbstractC0316a a() {
        return this.f23721a;
    }

    public final c b() {
        return this.f23722b;
    }

    public final String c() {
        return this.f23723c;
    }
}
