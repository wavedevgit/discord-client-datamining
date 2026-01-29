package di;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f22175a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f22176b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f22177c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f22178d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f22178d = oVar;
        this.f22175a = uVar;
        this.f22176b = set;
        this.f22177c = atomicBoolean;
    }

    @Override // di.l
    public final void a(ZipFile zipFile, Set set) {
        this.f22178d.f(this.f22175a, set, new h(this));
    }
}
