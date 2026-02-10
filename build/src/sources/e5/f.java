package e5;

import android.graphics.Bitmap;
import androidx.collection.LruCache;
import e5.c;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f22318a;

    /* renamed from: b  reason: collision with root package name */
    private final b f22319b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Bitmap f22320a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f22321b;

        /* renamed from: c  reason: collision with root package name */
        private final int f22322c;

        public a(Bitmap bitmap, Map map, int i10) {
            this.f22320a = bitmap;
            this.f22321b = map;
            this.f22322c = i10;
        }

        public final Bitmap a() {
            return this.f22320a;
        }

        public final Map b() {
            return this.f22321b;
        }

        public final int c() {
            return this.f22322c;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends LruCache {

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ f f22323j;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(int i10, f fVar) {
            super(i10);
            this.f22323j = fVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.collection.LruCache
        /* renamed from: l */
        public void b(boolean z10, c.b bVar, a aVar, a aVar2) {
            this.f22323j.f22318a.d(bVar, aVar.a(), aVar.b(), aVar.c());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.collection.LruCache
        /* renamed from: m */
        public int j(c.b bVar, a aVar) {
            return aVar.c();
        }
    }

    public f(int i10, i iVar) {
        this.f22318a = iVar;
        this.f22319b = new b(i10, this);
    }

    @Override // e5.h
    public void a(int i10) {
        if (i10 >= 40) {
            c();
        } else if (10 <= i10 && i10 < 20) {
            this.f22319b.k(g() / 2);
        }
    }

    @Override // e5.h
    public c.C0302c b(c.b bVar) {
        a aVar = (a) this.f22319b.d(bVar);
        if (aVar != null) {
            return new c.C0302c(aVar.a(), aVar.b());
        }
        return null;
    }

    @Override // e5.h
    public void c() {
        this.f22319b.c();
    }

    @Override // e5.h
    public void d(c.b bVar, Bitmap bitmap, Map map) {
        int a10 = k5.a.a(bitmap);
        if (a10 <= f()) {
            this.f22319b.f(bVar, new a(bitmap, map, a10));
            return;
        }
        this.f22319b.g(bVar);
        this.f22318a.d(bVar, bitmap, map, a10);
    }

    public int f() {
        return this.f22319b.e();
    }

    public int g() {
        return this.f22319b.i();
    }
}
