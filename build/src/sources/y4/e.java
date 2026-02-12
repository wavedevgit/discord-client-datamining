package y4;

import av.c0;
import av.h;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.CoroutineDispatcher;
import okio.ByteString;
import y4.a;
import y4.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements y4.a {

    /* renamed from: e  reason: collision with root package name */
    public static final a f55429e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final long f55430a;

    /* renamed from: b  reason: collision with root package name */
    private final c0 f55431b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55432c;

    /* renamed from: d  reason: collision with root package name */
    private final y4.c f55433d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements a.b {

        /* renamed from: a  reason: collision with root package name */
        private final c.b f55434a;

        public b(c.b bVar) {
            this.f55434a = bVar;
        }

        @Override // y4.a.b
        public void a() {
            this.f55434a.a();
        }

        @Override // y4.a.b
        /* renamed from: c */
        public c b() {
            c.d c10 = this.f55434a.c();
            if (c10 != null) {
                return new c(c10);
            }
            return null;
        }

        @Override // y4.a.b
        public c0 getData() {
            return this.f55434a.f(1);
        }

        @Override // y4.a.b
        public c0 getMetadata() {
            return this.f55434a.f(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements a.c {

        /* renamed from: d  reason: collision with root package name */
        private final c.d f55435d;

        public c(c.d dVar) {
            this.f55435d = dVar;
        }

        @Override // y4.a.c
        /* renamed from: a */
        public b C1() {
            c.b a10 = this.f55435d.a();
            if (a10 != null) {
                return new b(a10);
            }
            return null;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f55435d.close();
        }

        @Override // y4.a.c
        public c0 getData() {
            return this.f55435d.h(1);
        }

        @Override // y4.a.c
        public c0 getMetadata() {
            return this.f55435d.h(0);
        }
    }

    public e(long j10, c0 c0Var, h hVar, CoroutineDispatcher coroutineDispatcher) {
        this.f55430a = j10;
        this.f55431b = c0Var;
        this.f55432c = hVar;
        this.f55433d = new y4.c(getFileSystem(), c(), coroutineDispatcher, d(), 1, 2);
    }

    private final String e(String str) {
        return ByteString.f40592o.g(str).F().q();
    }

    @Override // y4.a
    public a.b a(String str) {
        c.b F0 = this.f55433d.F0(e(str));
        if (F0 != null) {
            return new b(F0);
        }
        return null;
    }

    @Override // y4.a
    public a.c b(String str) {
        c.d G0 = this.f55433d.G0(e(str));
        if (G0 != null) {
            return new c(G0);
        }
        return null;
    }

    public c0 c() {
        return this.f55431b;
    }

    public long d() {
        return this.f55430a;
    }

    @Override // y4.a
    public h getFileSystem() {
        return this.f55432c;
    }
}
