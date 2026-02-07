package gk;

import gk.j1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f25233a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f25234b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f25235c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a {

        /* renamed from: a  reason: collision with root package name */
        public final j1.b f25236a;

        /* renamed from: b  reason: collision with root package name */
        public final Object f25237b;

        /* renamed from: c  reason: collision with root package name */
        public final j1.b f25238c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f25239d;

        public a(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
            this.f25236a = bVar;
            this.f25237b = obj;
            this.f25238c = bVar2;
            this.f25239d = obj2;
        }
    }

    private b0(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
        this.f25233a = new a(bVar, obj, bVar2, obj2);
        this.f25234b = obj;
        this.f25235c = obj2;
    }

    public static b0 b(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
        return new b0(bVar, obj, bVar2, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a a() {
        return this.f25233a;
    }
}
