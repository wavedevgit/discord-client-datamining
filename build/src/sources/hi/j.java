package hi;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f26057a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f26058b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f26059c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f26059c = oVar;
        this.f26057a = set;
        this.f26058b = uVar;
    }

    @Override // hi.l
    public final void a(ZipFile zipFile, Set set) {
        this.f26057a.addAll(o.a(this.f26059c, set, this.f26058b, zipFile));
    }
}
