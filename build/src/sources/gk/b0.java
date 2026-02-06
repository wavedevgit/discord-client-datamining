package gk;

import gk.j1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f25185a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f25186b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f25187c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a {

        /* renamed from: a  reason: collision with root package name */
        public final j1.b f25188a;

        /* renamed from: b  reason: collision with root package name */
        public final Object f25189b;

        /* renamed from: c  reason: collision with root package name */
        public final j1.b f25190c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f25191d;

        public a(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
            this.f25188a = bVar;
            this.f25189b = obj;
            this.f25190c = bVar2;
            this.f25191d = obj2;
        }
    }

    private b0(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
        this.f25185a = new a(bVar, obj, bVar2, obj2);
        this.f25186b = obj;
        this.f25187c = obj2;
    }

    public static b0 b(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
        return new b0(bVar, obj, bVar2, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a a() {
        return this.f25185a;
    }
}
