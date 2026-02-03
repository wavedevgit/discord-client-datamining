package y4;

import ju.c0;
import ju.h;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.CoroutineDispatcher;
import okio.ByteString;
import y4.a;
import y4.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements y4.a {

    /* renamed from: e  reason: collision with root package name */
    public static final a f53977e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final long f53978a;

    /* renamed from: b  reason: collision with root package name */
    private final c0 f53979b;

    /* renamed from: c  reason: collision with root package name */
    private final h f53980c;

    /* renamed from: d  reason: collision with root package name */
    private final y4.c f53981d;

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
        private final c.b f53982a;

        public b(c.b bVar) {
            this.f53982a = bVar;
        }

        @Override // y4.a.b
        public void a() {
            this.f53982a.a();
        }

        @Override // y4.a.b
        /* renamed from: c */
        public c b() {
            c.d c10 = this.f53982a.c();
            if (c10 != null) {
                return new c(c10);
            }
            return null;
        }

        @Override // y4.a.b
        public c0 getData() {
            return this.f53982a.f(1);
        }

        @Override // y4.a.b
        public c0 getMetadata() {
            return this.f53982a.f(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements a.c {

        /* renamed from: d  reason: collision with root package name */
        private final c.d f53983d;

        public c(c.d dVar) {
            this.f53983d = dVar;
        }

        @Override // y4.a.c
        /* renamed from: a */
        public b C1() {
            c.b a10 = this.f53983d.a();
            if (a10 != null) {
                return new b(a10);
            }
            return null;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f53983d.close();
        }

        @Override // y4.a.c
        public c0 getData() {
            return this.f53983d.h(1);
        }

        @Override // y4.a.c
        public c0 getMetadata() {
            return this.f53983d.h(0);
        }
    }

    public e(long j10, c0 c0Var, h hVar, CoroutineDispatcher coroutineDispatcher) {
        this.f53978a = j10;
        this.f53979b = c0Var;
        this.f53980c = hVar;
        this.f53981d = new y4.c(getFileSystem(), c(), coroutineDispatcher, d(), 1, 2);
    }

    private final String e(String str) {
        return ByteString.f44507o.g(str).F().q();
    }

    @Override // y4.a
    public a.b a(String str) {
        c.b K0 = this.f53981d.K0(e(str));
        if (K0 != null) {
            return new b(K0);
        }
        return null;
    }

    @Override // y4.a
    public a.c b(String str) {
        c.d L0 = this.f53981d.L0(e(str));
        if (L0 != null) {
            return new c(L0);
        }
        return null;
    }

    public c0 c() {
        return this.f53979b;
    }

    public long d() {
        return this.f53978a;
    }

    @Override // y4.a
    public h getFileSystem() {
        return this.f53980c;
    }
}
