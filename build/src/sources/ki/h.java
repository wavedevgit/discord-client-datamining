package ki;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h implements m {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ i f31755a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f31755a = iVar;
    }

    @Override // ki.m
    public final void a(n nVar, File file, boolean z10) {
        this.f31755a.f31757b.add(file);
        if (!z10) {
            this.f31755a.f31758c.set(false);
        }
    }
}
