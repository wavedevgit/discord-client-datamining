package la;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface n extends w, r8.c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final Object f35943a;

        /* renamed from: b  reason: collision with root package name */
        public final CloseableReference f35944b;

        /* renamed from: e  reason: collision with root package name */
        public final b f35947e;

        /* renamed from: g  reason: collision with root package name */
        public int f35949g;

        /* renamed from: c  reason: collision with root package name */
        public int f35945c = 0;

        /* renamed from: d  reason: collision with root package name */
        public boolean f35946d = false;

        /* renamed from: f  reason: collision with root package name */
        public int f35948f = 0;

        private a(Object obj, CloseableReference closeableReference, b bVar, int i10) {
            this.f35943a = o8.j.g(obj);
            this.f35944b = (CloseableReference) o8.j.g(CloseableReference.n(closeableReference));
            this.f35947e = bVar;
            this.f35949g = i10;
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
