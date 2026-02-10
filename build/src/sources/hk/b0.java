package hk;

import hk.j1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f26144a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f26145b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f26146c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a {

        /* renamed from: a  reason: collision with root package name */
        public final j1.b f26147a;

        /* renamed from: b  reason: collision with root package name */
        public final Object f26148b;

        /* renamed from: c  reason: collision with root package name */
        public final j1.b f26149c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f26150d;

        public a(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
            this.f26147a = bVar;
            this.f26148b = obj;
            this.f26149c = bVar2;
            this.f26150d = obj2;
        }
    }

    private b0(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
        this.f26144a = new a(bVar, obj, bVar2, obj2);
        this.f26145b = obj;
        this.f26146c = obj2;
    }

    public static b0 b(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
        return new b0(bVar, obj, bVar2, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a a() {
        return this.f26144a;
    }
}
