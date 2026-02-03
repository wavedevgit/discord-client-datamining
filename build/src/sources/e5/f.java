package e5;

import android.graphics.Bitmap;
import androidx.collection.LruCache;
import e5.c;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f21351a;

    /* renamed from: b  reason: collision with root package name */
    private final b f21352b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Bitmap f21353a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f21354b;

        /* renamed from: c  reason: collision with root package name */
        private final int f21355c;

        public a(Bitmap bitmap, Map map, int i10) {
            this.f21353a = bitmap;
            this.f21354b = map;
            this.f21355c = i10;
        }

        public final Bitmap a() {
            return this.f21353a;
        }

        public final Map b() {
            return this.f21354b;
        }

        public final int c() {
            return this.f21355c;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends LruCache {

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ f f21356j;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(int i10, f fVar) {
            super(i10);
            this.f21356j = fVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.collection.LruCache
        /* renamed from: l */
        public void b(boolean z10, c.b bVar, a aVar, a aVar2) {
            this.f21356j.f21351a.d(bVar, aVar.a(), aVar.b(), aVar.c());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.collection.LruCache
        /* renamed from: m */
        public int j(c.b bVar, a aVar) {
            return aVar.c();
        }
    }

    public f(int i10, i iVar) {
        this.f21351a = iVar;
        this.f21352b = new b(i10, this);
    }

    @Override // e5.h
    public void a(int i10) {
        if (i10 >= 40) {
            c();
        } else if (10 <= i10 && i10 < 20) {
            this.f21352b.k(g() / 2);
        }
    }

    @Override // e5.h
    public c.C0277c b(c.b bVar) {
        a aVar = (a) this.f21352b.d(bVar);
        if (aVar != null) {
            return new c.C0277c(aVar.a(), aVar.b());
        }
        return null;
    }

    @Override // e5.h
    public void c() {
        this.f21352b.c();
    }

    @Override // e5.h
    public void d(c.b bVar, Bitmap bitmap, Map map) {
        int a10 = k5.a.a(bitmap);
        if (a10 <= f()) {
            this.f21352b.f(bVar, new a(bitmap, map, a10));
            return;
        }
        this.f21352b.g(bVar);
        this.f21351a.d(bVar, bitmap, map, a10);
    }

    public int f() {
        return this.f21352b.e();
    }

    public int g() {
        return this.f21352b.i();
    }
}
