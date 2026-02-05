package gi;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h implements m {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ i f24933a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f24933a = iVar;
    }

    @Override // gi.m
    public final void a(n nVar, File file, boolean z10) {
        this.f24933a.f24935b.add(file);
        if (!z10) {
            this.f24933a.f24936c.set(false);
        }
    }
}
