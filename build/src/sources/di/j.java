package di;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f20614a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f20615b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f20616c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f20616c = oVar;
        this.f20614a = set;
        this.f20615b = uVar;
    }

    @Override // di.l
    public final void a(ZipFile zipFile, Set set) {
        this.f20614a.addAll(o.a(this.f20616c, set, this.f20615b, zipFile));
    }
}
