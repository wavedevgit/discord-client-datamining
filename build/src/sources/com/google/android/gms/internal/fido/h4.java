package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h4 extends i3 implements Runnable {

    /* renamed from: s  reason: collision with root package name */
    private final Runnable f13618s;

    public h4(Runnable runnable) {
        runnable.getClass();
        this.f13618s = runnable;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.internal.fido.l3
    public final String f() {
        String obj = this.f13618s.toString();
        return "task=[" + obj + "]";
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            this.f13618s.run();
        } catch (Throwable th2) {
            l(th2);
            throw th2;
        }
    }
}
