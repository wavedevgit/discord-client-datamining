package ns;

import gs.e0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends h {

    /* renamed from: i  reason: collision with root package name */
    public final Runnable f42200i;

    public i(Runnable runnable, long j10, boolean z10) {
        super(j10, z10);
        this.f42200i = runnable;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f42200i.run();
    }

    public String toString() {
        String c10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Task[");
        sb2.append(e0.a(this.f42200i));
        sb2.append('@');
        sb2.append(e0.b(this.f42200i));
        sb2.append(", ");
        sb2.append(this.f42198d);
        sb2.append(", ");
        c10 = j.c(this.f42199e);
        sb2.append(c10);
        sb2.append(']');
        return sb2.toString();
    }
}
