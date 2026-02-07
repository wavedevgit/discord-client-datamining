package y4;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.CoroutineDispatcher;
import okio.ByteString;
import qu.c0;
import qu.h;
import y4.a;
import y4.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements y4.a {

    /* renamed from: e  reason: collision with root package name */
    public static final a f55020e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final long f55021a;

    /* renamed from: b  reason: collision with root package name */
    private final c0 f55022b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55023c;

    /* renamed from: d  reason: collision with root package name */
    private final y4.c f55024d;

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
        private final c.b f55025a;

        public b(c.b bVar) {
            this.f55025a = bVar;
        }

        @Override // y4.a.b
        public void a() {
            this.f55025a.a();
        }

        @Override // y4.a.b
        /* renamed from: c */
        public c b() {
            c.d c10 = this.f55025a.c();
            if (c10 != null) {
                return new c(c10);
            }
            return null;
        }

        @Override // y4.a.b
        public c0 getData() {
            return this.f55025a.f(1);
        }

        @Override // y4.a.b
        public c0 getMetadata() {
            return this.f55025a.f(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements a.c {

        /* renamed from: d  reason: collision with root package name */
        private final c.d f55026d;

        public c(c.d dVar) {
            this.f55026d = dVar;
        }

        @Override // y4.a.c
        /* renamed from: a */
        public b B1() {
            c.b a10 = this.f55026d.a();
            if (a10 != null) {
                return new b(a10);
            }
            return null;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f55026d.close();
        }

        @Override // y4.a.c
        public c0 getData() {
            return this.f55026d.g(1);
        }

        @Override // y4.a.c
        public c0 getMetadata() {
            return this.f55026d.g(0);
        }
    }

    public e(long j10, c0 c0Var, h hVar, CoroutineDispatcher coroutineDispatcher) {
        this.f55021a = j10;
        this.f55022b = c0Var;
        this.f55023c = hVar;
        this.f55024d = new y4.c(getFileSystem(), c(), coroutineDispatcher, d(), 1, 2);
    }

    private final String e(String str) {
        return ByteString.f43214o.g(str).F().q();
    }

    @Override // y4.a
    public a.b a(String str) {
        c.b J0 = this.f55024d.J0(e(str));
        if (J0 != null) {
            return new b(J0);
        }
        return null;
    }

    @Override // y4.a
    public a.c b(String str) {
        c.d K0 = this.f55024d.K0(e(str));
        if (K0 != null) {
            return new c(K0);
        }
        return null;
    }

    public c0 c() {
        return this.f55022b;
    }

    public long d() {
        return this.f55021a;
    }

    @Override // y4.a
    public h getFileSystem() {
        return this.f55023c;
    }
}
