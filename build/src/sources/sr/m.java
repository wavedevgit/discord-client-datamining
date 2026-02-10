package sr;

import sr.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l.b f48327a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f48328b;

        a(l.b bVar, g gVar) {
            this.f48327a = bVar;
            this.f48328b = gVar;
        }

        @Override // sr.m
        l a() {
            return this.f48327a.a(this.f48328b, new r());
        }
    }

    m() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m b(l.b bVar, g gVar) {
        return new a(bVar, gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract l a();
}
