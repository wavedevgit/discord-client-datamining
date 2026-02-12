package jk;

import jk.j1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f30983a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f30984b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f30985c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a {

        /* renamed from: a  reason: collision with root package name */
        public final j1.b f30986a;

        /* renamed from: b  reason: collision with root package name */
        public final Object f30987b;

        /* renamed from: c  reason: collision with root package name */
        public final j1.b f30988c;

        /* renamed from: d  reason: collision with root package name */
        public final Object f30989d;

        public a(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
            this.f30986a = bVar;
            this.f30987b = obj;
            this.f30988c = bVar2;
            this.f30989d = obj2;
        }
    }

    private b0(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
        this.f30983a = new a(bVar, obj, bVar2, obj2);
        this.f30984b = obj;
        this.f30985c = obj2;
    }

    public static b0 b(j1.b bVar, Object obj, j1.b bVar2, Object obj2) {
        return new b0(bVar, obj, bVar2, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a a() {
        return this.f30983a;
    }
}
