package ma;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface n extends w, s8.c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final Object f36765a;

        /* renamed from: b  reason: collision with root package name */
        public final CloseableReference f36766b;

        /* renamed from: e  reason: collision with root package name */
        public final b f36769e;

        /* renamed from: g  reason: collision with root package name */
        public int f36771g;

        /* renamed from: c  reason: collision with root package name */
        public int f36767c = 0;

        /* renamed from: d  reason: collision with root package name */
        public boolean f36768d = false;

        /* renamed from: f  reason: collision with root package name */
        public int f36770f = 0;

        private a(Object obj, CloseableReference closeableReference, b bVar, int i10) {
            this.f36765a = p8.j.g(obj);
            this.f36766b = (CloseableReference) p8.j.g(CloseableReference.n(closeableReference));
            this.f36769e = bVar;
            this.f36771g = i10;
        }

        public static a a(Object obj, CloseableReference closeableReference, int i10, b bVar) {
            return new a(obj, closeableReference, bVar, i10);
        }

        public static a b(Object obj, CloseableReference closeableReference, b bVar) {
            return a(obj, closeableReference, -1, bVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(Object obj, boolean z10);
    }

    CloseableReference d(Object obj, CloseableReference closeableReference, b bVar);

    CloseableReference f(Object obj);
}
