package e5;

import android.graphics.Bitmap;
import androidx.collection.LruCache;
import e5.c;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f22628a;

    /* renamed from: b  reason: collision with root package name */
    private final b f22629b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Bitmap f22630a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f22631b;

        /* renamed from: c  reason: collision with root package name */
        private final int f22632c;

        public a(Bitmap bitmap, Map map, int i10) {
            this.f22630a = bitmap;
            this.f22631b = map;
            this.f22632c = i10;
        }

        public final Bitmap a() {
            return this.f22630a;
        }

        public final Map b() {
            return this.f22631b;
        }

        public final int c() {
            return this.f22632c;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends LruCache {

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ f f22633j;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(int i10, f fVar) {
            super(i10);
            this.f22633j = fVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.collection.LruCache
        /* renamed from: l */
        public void b(boolean z10, c.b bVar, a aVar, a aVar2) {
            this.f22633j.f22628a.d(bVar, aVar.a(), aVar.b(), aVar.c());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.collection.LruCache
        /* renamed from: m */
        public int j(c.b bVar, a aVar) {
            return aVar.c();
        }
    }

    public f(int i10, i iVar) {
        this.f22628a = iVar;
        this.f22629b = new b(i10, this);
    }

    @Override // e5.h
    public void a(int i10) {
        if (i10 >= 40) {
            c();
        } else if (10 <= i10 && i10 < 20) {
            this.f22629b.k(g() / 2);
        }
    }

    @Override // e5.h
    public c.C0288c b(c.b bVar) {
        a aVar = (a) this.f22629b.d(bVar);
        if (aVar != null) {
            return new c.C0288c(aVar.a(), aVar.b());
        }
        return null;
    }

    @Override // e5.h
    public void c() {
        this.f22629b.c();
    }

    @Override // e5.h
    public void d(c.b bVar, Bitmap bitmap, Map map) {
        int a10 = k5.a.a(bitmap);
        if (a10 <= f()) {
            this.f22629b.f(bVar, new a(bitmap, map, a10));
            return;
        }
        this.f22629b.g(bVar);
        this.f22628a.d(bVar, bitmap, map, a10);
    }

    public int f() {
        return this.f22629b.e();
    }

    public int g() {
        return this.f22629b.i();
    }
}
