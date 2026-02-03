package di;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h implements m {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ i f20609a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f20609a = iVar;
    }

    @Override // di.m
    public final void a(n nVar, File file, boolean z10) {
        this.f20609a.f20611b.add(file);
        if (!z10) {
            this.f20609a.f20612c.set(false);
        }
    }
}
