package e5;

import android.graphics.Bitmap;
import androidx.collection.LruCache;
import e5.c;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f21356a;

    /* renamed from: b  reason: collision with root package name */
    private final b f21357b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Bitmap f21358a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f21359b;

        /* renamed from: c  reason: collision with root package name */
        private final int f21360c;

        public a(Bitmap bitmap, Map map, int i10) {
            this.f21358a = bitmap;
            this.f21359b = map;
            this.f21360c = i10;
        }

        public final Bitmap a() {
            return this.f21358a;
        }

        public final Map b() {
            return this.f21359b;
        }

        public final int c() {
            return this.f21360c;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends LruCache {

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ f f21361j;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(int i10, f fVar) {
            super(i10);
            this.f21361j = fVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.collection.LruCache
        /* renamed from: l */
        public void b(boolean z10, c.b bVar, a aVar, a aVar2) {
            this.f21361j.f21356a.d(bVar, aVar.a(), aVar.b(), aVar.c());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.collection.LruCache
        /* renamed from: m */
        public int j(c.b bVar, a aVar) {
            return aVar.c();
        }
    }

    public f(int i10, i iVar) {
        this.f21356a = iVar;
        this.f21357b = new b(i10, this);
    }

    @Override // e5.h
    public void a(int i10) {
        if (i10 >= 40) {
            c();
        } else if (10 <= i10 && i10 < 20) {
            this.f21357b.k(g() / 2);
        }
    }

    @Override // e5.h
    public c.C0284c b(c.b bVar) {
        a aVar = (a) this.f21357b.d(bVar);
        if (aVar != null) {
            return new c.C0284c(aVar.a(), aVar.b());
        }
        return null;
    }

    @Override // e5.h
    public void c() {
        this.f21357b.c();
    }

    @Override // e5.h
    public void d(c.b bVar, Bitmap bitmap, Map map) {
        int a10 = k5.a.a(bitmap);
        if (a10 <= f()) {
            this.f21357b.f(bVar, new a(bitmap, map, a10));
            return;
        }
        this.f21357b.g(bVar);
        this.f21356a.d(bVar, bitmap, map, a10);
    }

    public int f() {
        return this.f21357b.e();
    }

    public int g() {
        return this.f21357b.i();
    }
}
