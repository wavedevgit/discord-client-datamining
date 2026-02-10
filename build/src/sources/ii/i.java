package ii;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f26868a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f26869b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f26870c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f26871d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f26871d = oVar;
        this.f26868a = uVar;
        this.f26869b = set;
        this.f26870c = atomicBoolean;
    }

    @Override // ii.l
    public final void a(ZipFile zipFile, Set set) {
        this.f26871d.f(this.f26868a, set, new h(this));
    }
}
