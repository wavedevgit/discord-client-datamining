package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.q1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f3660a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f3661b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f3662c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final q1.b f3663a;

        /* renamed from: b  reason: collision with root package name */
        public final Object f3664b;

        /* renamed from: c  reason: collision with root package name */
        public final q1.b f3665c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f3666d;

        public a(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
            this.f3663a = bVar;
            this.f3664b = obj;
            this.f3665c = bVar2;
            this.f3666d = obj2;
        }
    }

    private h0(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
        this.f3660a = new a(bVar, obj, bVar2, obj2);
        this.f3661b = obj;
        this.f3662c = obj2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int b(a aVar, Object obj, Object obj2) {
        return s.b(aVar.f3663a, 1, obj) + s.b(aVar.f3665c, 2, obj2);
    }

    public static h0 d(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
        return new h0(bVar, obj, bVar2, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(j jVar, a aVar, Object obj, Object obj2) {
        s.u(jVar, aVar.f3663a, 1, obj);
        s.u(jVar, aVar.f3665c, 2, obj2);
    }

    public int a(int i10, Object obj, Object obj2) {
        return j.P(i10) + j.y(b(this.f3660a, obj, obj2));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a c() {
        return this.f3660a;
    }
}
