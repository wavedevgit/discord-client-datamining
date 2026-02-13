package ki;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f32325a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f32326b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f32327c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f32328d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f32328d = oVar;
        this.f32325a = uVar;
        this.f32326b = set;
        this.f32327c = atomicBoolean;
    }

    @Override // ki.l
    public final void a(ZipFile zipFile, Set set) {
        this.f32328d.f(this.f32325a, set, new h(this));
    }
}
