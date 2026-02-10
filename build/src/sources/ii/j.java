package ii;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f26872a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f26873b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f26874c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f26874c = oVar;
        this.f26872a = set;
        this.f26873b = uVar;
    }

    @Override // ii.l
    public final void a(ZipFile zipFile, Set set) {
        this.f26872a.addAll(o.a(this.f26874c, set, this.f26873b, zipFile));
    }
}
