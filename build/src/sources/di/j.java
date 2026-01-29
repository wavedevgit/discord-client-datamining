package di;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f22179a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f22180b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f22181c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f22181c = oVar;
        this.f22179a = set;
        this.f22180b = uVar;
    }

    @Override // di.l
    public final void a(ZipFile zipFile, Set set) {
        this.f22179a.addAll(o.a(this.f22181c, set, this.f22180b, zipFile));
    }
}
