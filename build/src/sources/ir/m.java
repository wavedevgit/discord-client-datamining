package ir;

import ir.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l.b f29316a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f29317b;

        a(l.b bVar, g gVar) {
            this.f29316a = bVar;
            this.f29317b = gVar;
        }

        @Override // ir.m
        l a() {
            return this.f29316a.b(this.f29317b, new r());
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
