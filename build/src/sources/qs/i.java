package qs;

import js.e0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends h {

    /* renamed from: i  reason: collision with root package name */
    public final Runnable f48178i;

    public i(Runnable runnable, long j10, boolean z10) {
        super(j10, z10);
        this.f48178i = runnable;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f48178i.run();
    }

    public String toString() {
        String c10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Task[");
        sb2.append(e0.a(this.f48178i));
        sb2.append('@');
        sb2.append(e0.b(this.f48178i));
        sb2.append(", ");
        sb2.append(this.f48176d);
        sb2.append(", ");
        c10 = j.c(this.f48177e);
        sb2.append(c10);
        sb2.append(']');
        return sb2.toString();
    }
}
