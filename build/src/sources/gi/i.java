package gi;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f24934a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f24935b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f24936c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f24937d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f24937d = oVar;
        this.f24934a = uVar;
        this.f24935b = set;
        this.f24936c = atomicBoolean;
    }

    @Override // gi.l
    public final void a(ZipFile zipFile, Set set) {
        this.f24937d.f(this.f24934a, set, new h(this));
    }
}
