package os;

import hs.e0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends h {

    /* renamed from: i  reason: collision with root package name */
    public final Runnable f44845i;

    public i(Runnable runnable, long j10, boolean z10) {
        super(j10, z10);
        this.f44845i = runnable;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f44845i.run();
    }

    public String toString() {
        String c10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Task[");
        sb2.append(e0.a(this.f44845i));
        sb2.append('@');
        sb2.append(e0.b(this.f44845i));
        sb2.append(", ");
        sb2.append(this.f44843d);
        sb2.append(", ");
        c10 = j.c(this.f44844e);
        sb2.append(c10);
        sb2.append(']');
        return sb2.toString();
    }
}
