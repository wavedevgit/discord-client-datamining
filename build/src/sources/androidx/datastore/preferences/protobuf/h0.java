package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.q1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f4101a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f4102b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f4103c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final q1.b f4104a;

        /* renamed from: b  reason: collision with root package name */
        public final Object f4105b;

        /* renamed from: c  reason: collision with root package name */
        public final q1.b f4106c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f4107d;

        public a(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
            this.f4104a = bVar;
            this.f4105b = obj;
            this.f4106c = bVar2;
            this.f4107d = obj2;
        }
    }

    private h0(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
        this.f4101a = new a(bVar, obj, bVar2, obj2);
        this.f4102b = obj;
        this.f4103c = obj2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int b(a aVar, Object obj, Object obj2) {
        return s.b(aVar.f4104a, 1, obj) + s.b(aVar.f4106c, 2, obj2);
    }

    public static h0 d(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
        return new h0(bVar, obj, bVar2, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(j jVar, a aVar, Object obj, Object obj2) {
        s.u(jVar, aVar.f4104a, 1, obj);
        s.u(jVar, aVar.f4106c, 2, obj2);
    }

    public int a(int i10, Object obj, Object obj2) {
        return j.P(i10) + j.y(b(this.f4101a, obj, obj2));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a c() {
        return this.f4101a;
    }
}
