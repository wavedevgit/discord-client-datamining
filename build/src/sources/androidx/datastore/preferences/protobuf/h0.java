package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.q1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f3647a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f3648b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f3649c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final q1.b f3650a;

        /* renamed from: b  reason: collision with root package name */
        public final Object f3651b;

        /* renamed from: c  reason: collision with root package name */
        public final q1.b f3652c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f3653d;

        public a(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
            this.f3650a = bVar;
            this.f3651b = obj;
            this.f3652c = bVar2;
            this.f3653d = obj2;
        }
    }

    private h0(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
        this.f3647a = new a(bVar, obj, bVar2, obj2);
        this.f3648b = obj;
        this.f3649c = obj2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int b(a aVar, Object obj, Object obj2) {
        return s.b(aVar.f3650a, 1, obj) + s.b(aVar.f3652c, 2, obj2);
    }

    public static h0 d(q1.b bVar, Object obj, q1.b bVar2, Object obj2) {
        return new h0(bVar, obj, bVar2, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(j jVar, a aVar, Object obj, Object obj2) {
        s.u(jVar, aVar.f3650a, 1, obj);
        s.u(jVar, aVar.f3652c, 2, obj2);
    }

    public int a(int i10, Object obj, Object obj2) {
        return j.P(i10) + j.y(b(this.f3647a, obj, obj2));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a c() {
        return this.f3647a;
    }
}
