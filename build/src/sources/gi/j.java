package gi;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f24938a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f24939b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f24940c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f24940c = oVar;
        this.f24938a = set;
        this.f24939b = uVar;
    }

    @Override // gi.l
    public final void a(ZipFile zipFile, Set set) {
        this.f24938a.addAll(o.a(this.f24940c, set, this.f24939b, zipFile));
    }
}
