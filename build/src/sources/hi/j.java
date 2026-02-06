package hi;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f26009a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f26010b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f26011c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f26011c = oVar;
        this.f26009a = set;
        this.f26010b = uVar;
    }

    @Override // hi.l
    public final void a(ZipFile zipFile, Set set) {
        this.f26009a.addAll(o.a(this.f26011c, set, this.f26010b, zipFile));
    }
}
