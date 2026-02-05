package ts;

import ms.e0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends h {

    /* renamed from: i  reason: collision with root package name */
    public final Runnable f51045i;

    public i(Runnable runnable, long j10, boolean z10) {
        super(j10, z10);
        this.f51045i = runnable;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f51045i.run();
    }

    public String toString() {
        String c10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Task[");
        sb2.append(e0.a(this.f51045i));
        sb2.append('@');
        sb2.append(e0.b(this.f51045i));
        sb2.append(", ");
        sb2.append(this.f51043d);
        sb2.append(", ");
        c10 = j.c(this.f51044e);
        sb2.append(c10);
        sb2.append(']');
        return sb2.toString();
    }
}
