package la;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface n extends w, r8.c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final Object f35991a;

        /* renamed from: b  reason: collision with root package name */
        public final CloseableReference f35992b;

        /* renamed from: e  reason: collision with root package name */
        public final b f35995e;

        /* renamed from: g  reason: collision with root package name */
        public int f35997g;

        /* renamed from: c  reason: collision with root package name */
        public int f35993c = 0;

        /* renamed from: d  reason: collision with root package name */
        public boolean f35994d = false;

        /* renamed from: f  reason: collision with root package name */
        public int f35996f = 0;

        private a(Object obj, CloseableReference closeableReference, b bVar, int i10) {
            this.f35991a = o8.j.g(obj);
            this.f35992b = (CloseableReference) o8.j.g(CloseableReference.n(closeableReference));
            this.f35995e = bVar;
            this.f35997g = i10;
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

    CloseableReference a(Object obj, CloseableReference closeableReference, b bVar);

    CloseableReference d(Object obj);
}
